'use strict'
const React = require('react');
const auth  = require('../auth');

const RecipeResult = React.createClass({

  componentDidMount : function() {
    $(".rating").rating();
    let that = this;

    
    $('.button.'+this.props.index).click(() => {



      let calories = this.props.details.calories;
      if(this.props.details.calories === undefined) {
        // some yummly data has no calorie intake, give a rough guestimate... dummy data is wrong :)
        calories = Math.floor(Math.random() * 600 + 100)
      }

      let exercise;
      let userInfo;
      let bmr;
      let duration;

      $.ajax({
        url: '/api/exercises/random',
        type: 'get',
        beforeSend: function( xhr ) {
          xhr.setRequestHeader("Authorization", 'Bearer ' + auth.getToken() );
        }
      })
      .done((data) => {
        exercise = data;

        $.ajax({
          url: '/api/users/info',
          type: 'GET',
          beforeSend: function( xhr ) {
            xhr.setRequestHeader("Authorization", 'Bearer ' + auth.getToken() );
          }
        })
        .done((data) => {
          userInfo = data;
          console.log(calories, exercise, userInfo);

          if(userInfo.gender.toLowerCase() === 'male') {
            bmr = (13.75 * +(userInfo.weight)) + (5 * +(userInfo.height)) - (6.76 * +(userInfo.age)) + 66;
          } else {
            bmr = (9.56 * +(userInfo.weight)) + (1.85 * +(userInfo.height)) - (4.68 * +(userInfo.age)) + 665;
          }
          
          calcExerciseTime(bmr, +(exercise.met), calories);
          function calcExerciseTime(bmr, met, calories) {
            duration = (calories / ((bmr / 24) * met)) * 60;

            $.ajax({
              url: '/api/exercises',
              type: 'POST',
              beforeSend: function( xhr ) {
                xhr.setRequestHeader("Authorization", 'Bearer ' + auth.getToken() );
              },
              data: {
                exercise: exercise.type,
                duration: Math.ceil(duration)
              }
            })
            .done((data) => {

              $.ajax({
                url: '/api/recipes',
                type: 'POST',
                beforeSend: function( xhr ) {
                  xhr.setRequestHeader("Authorization", 'Bearer ' + auth.getToken() );
                },
                data: {
                  recipe: that.props.details.recipeName,
                  img_url: that.props.details.largeImage,
                  calories: calories,
                  exercise_id: data.exercise_id,
                  yummly_id: that.props.details.id
                }
              })
              .done(() => {
                console.log('inserted recipe ');

                $('body').append(`<div class='popup ${that.props.index}'></div>`);
                let $popup = $('.popup.'+that.props.index);
                let $header = $('<div>');
                let $body = $('<div>');

                $header.append(`<h3>Nice! Now you need to workout</h3>`);
                $body.append(`<p>${exercise.type} for ${Math.ceil(duration)} minutes.</p>`)
                $popup.append($header, $body);

              })
            }) 
          }
        })
      })
    })
  },
  handleClick : function() {
    $('.ui.modal.recipe.'+this.props.index)
    .modal('show')
  },
  render : function() {
    return (

        <div className="card result" onClick={this.handleClick}>
          <div className="image">
            <img src={this.props.details.largeImage} className="recipeImg" />
          </div>
          <div className="extra">
            Rating:
            <div className="ui star rating" data-rating={this.props.details.rating}></div><br/>
            {this.props.details.recipeName}
          </div>

          <div className={"ui modal recipe "+this.props.index}>
            <i className="close icon"></i>
            <div className="header">
              {this.props.details.recipeName}
            </div>
            <div className="image content">
              <div className="ui medium image">
                <img src={this.props.details.largeImage} />
              </div>
              <div className="description">
                <div className="ui header">Ingredients</div>
                <ul>
                  {
                    this.props.details.ingredients.map(function(el) {
                      return (<li>{el}</li>)
                    })
                  }
                </ul>
                <p>Total time: {this.props.details.totalTime}</p>
              </div>
            </div>
            <div className="actions">
              <div className="ui black deny button">Nope
                
              </div>
              <div className={"ui positive right labeled icon button cook "+this.props.index}>
                Cook it
                <i className="checkmark icon"></i>
              </div>
            </div>
          </div>


        </div>
    )
  }
});

module.exports = RecipeResult;