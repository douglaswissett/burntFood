'use strict'
const React = require('react');

const Tracker = require('./tracker.js');

const MyTrackers = React.createClass({

  renderTracker : function(key) {
    return (
      <Tracker key={key} index={key} details={this.props.workouts[key]} dropTracker={this.props.dropTracker} completeTracker={this.props.completeTracker} />
    )
  },
  filterTracked : function(key) {
    return this.props.workouts[key].tracking === true;
  },
  render : function() {
    return (
      <div className="ui grid" id="trackZone">
        <div className="sixteen wide column">
          <div className="ui segment">
            <h3 className="ui header">Track Zone</h3>

            <div className="ui three cards" style={{border: '3px solid grey'}}>

            {
              Object.keys(this.props.workouts)
              .filter(this.filterTracked)
              .map(this.renderTracker)
            }

            </div>

          </div>
        </div>
      </div>
    )
  }
});



module.exports = MyTrackers;
