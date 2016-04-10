'use strict'
const React = require('react');
const auth  = require('../auth');

const UserData = React.createClass({
  componentDidMount : function() {
    $('.ui.accordion')
    .accordion();
  },
  handleFail : function() {
    this.props.deleteData(this.props.index);
  },
  handleTrack : function() {
    let that = this;
    console.log('ex_id: ', this.props.details.exercise_id);

    $.ajax({
      url: '/api/exercises/track/' + this.props.details.exercise_id,
      type: 'PUT',
      beforeSend: function( xhr ) {
        xhr.setRequestHeader("Authorization", 'Bearer ' + auth.getToken() );
      }
    })
    .done(() => {
      console.log('tracker boolean set to true');
      this.props.addTracker(this.props.details.exercise_id);

      
      setTimeout(function(){
        $('html,body').animate({
        scrollTop: $('.card.workout-'+that.props.details.exercise_id).offset().top},
        'slow');
      },200);
      

    });

  },
  render : function() {
    
    let headerStyle = {
      position: 'relative',
      top: '50px',
      left: '20px',
      fontFamily: 'Lobster'
    }

    return (
      <div className="ui card">
        <div className="card">
          <div className="content">
            <img className="right floated mini ui image" src={this.props.details.img_url} style={{width: '185px !important'}} />
            <div className="header">
              <h3 style={headerStyle} >{this.props.details.recipe}</h3>
            </div>
            <div className="description">




              <div className="ui styled accordion" style={{marginTop: '120px', fontFamily: 'sans-serif'}}>
                <div className="title">
                  <i className="dropdown icon"></i>
                  Ingredients
                </div>
                <div className="content">
                  <ul>
                    {
                      this.props.details.list.map(function(el) {
                        return (<li>{el}</li>)
                      })
                    }
                  </ul>
                </div>
                <div className="title">
                  <i className="dropdown icon"></i>
                  Cooking info
                </div>
                <div className="content">
                  <ul>
                    <li>Total cooking time: {this.props.details.totalTime}</li>
                    <li>Preparation time: {this.props.details.prepTime}</li>
                    <li>Cooking time: {this.props.details.cookTime}</li>
                    <li>Serves: {this.props.details.numberOfServings}</li>
                    <li><a href={this.props.details.attribution.url}>{this.props.details.recipe}</a> recipe</li>
                  </ul>
                </div>
                <div className="title">
                  <i className="dropdown icon"></i>
                  Workout info
                </div>
                <div className="content">
                  {"This contains: " + this.props.details.calories + ' calories per serving.'}<br/>
                  {this.props.details.exercise + " for " + this.props.details.duration + ' minutes to burn off a portion.'}<br/>
                  <a onClick={this.handleTrack}>Track this workout</a>
                </div>
              </div>


            </div>
          </div>
          <div className="extra content">
            
              <div className="ui basic red button" onClick={this.handleFail} style={{position: 'relative', left: '180px', top: '20px'}}>Remove recipe</div>
            

            <div>
              <br/><br/> Powered by 
              <img src={this.props.details.attribution.logo} />
            </div>

          </div>
        </div>
      </div>
    )
  }
})



module.exports = UserData;
