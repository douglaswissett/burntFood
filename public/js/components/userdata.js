'use strict'
const React = require('react');
const auth  = require('../auth');

const UserData = React.createClass({
  componentDidMount : function() {
    $('.ui.accordion')
    .accordion();
  },
  handleWin : function() {
    
    console.log(this.props.details);
  },
  handleFail : function() {
    this.props.deleteData(this.props.index);
  },
  handleTrack : function() {
    this.props.addTracker(this.props.details.exercise_id);

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
    });


  },
  render : function() {
    
    return (
      <div className="ui card">
        <div className="card">
          <div className="content">
            <img className="right floated mini ui image" src={this.props.details.img_url} style={{width: '185px !important'}} />
            <div className="header">
              {this.props.details.recipe}
            </div>
            <div className="description">




              <div className="ui styled accordion" style={{marginTop: '120px'}}>
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
            <div className="ui two buttons">
              <div className="ui basic green button" onClick={this.handleWin}>Win</div>
              <div className="ui basic red button" onClick={this.handleFail}>Fail</div>
            </div>

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



              // <div>
              //   <ul>
              //     {
              //       !this.props.details.attributes ? (
              //         this.props.details.attributes.course.map((el) => {
              //           return (<li>{el}</li>) 
              //         })
              //       ) : (
              //         null
              //       )
              //     }
              //   </ul>
              // </div>


module.exports = UserData;
