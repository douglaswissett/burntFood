'use strict'
const React = require('react');
const moment   = require('moment');

const Tracker = React.createClass({

  handleDone : function() {
    this.props.completeTracker(this.props.index);
  },
  handleDrop : function() {
    this.props.dropTracker(this.props.index);
  },
  render : function() {
    return (
      <div className={"card "+this.props.index} >
        <div className="content">
          <div className="header" style={{fontFamily: 'Lobster'}}>
            {this.props.details.exercise +' for '+ this.props.details.duration + ' minutes'}
          </div>
          <div className="description" style={{fontFamily: 'sans-serif', fontSize: '.9em'}}>
            {'A portion of '+this.props.details.recipe}<br/>
            {'Created on '+ moment(this.props.details.created).format('MMMM Do YYYY, h:mm:ss a')}<br/><br/>
            {
              this.props.details.status ? (
                'Status: Superstar!!'
              ) : (
                'Status: You still need to workout... Come on mate'
              )
            }
          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button" onClick={this.handleDone}>Done</div>
            <div className="ui basic red button" onClick={this.handleDrop}>Drop</div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Tracker;
