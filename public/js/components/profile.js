'use strict'
const React = require('react');

const Profile = React.createClass({

  render : function() {
    return (
        <div className="ui segment">
        <div className="ui grid">
        <div className="six wide column">
          <div className="ui card">
            <div className="image">
              <img src="https://s.yimg.com/ny/api/res/1.2/Cn3tC8Colvh9AYmNNy4N6A--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NTAwO2g9Mjgw/http://l.yimg.com/cd/diminuendo/1.0/original/711b93b2fa389a7af38c350ff4c5a179703890ce.gif" />
            </div>
            <div className="content">
              <a className="header">BoJack</a>
              <div className="meta">
                <span className="date">Joined in 2013</span>
              </div>
              <div className="description">
                Bojack is a web developer studying in New York.
              </div>
            </div>
            <div className="extra content">
              <a>
                <i className="user icon"></i>
                0 Followers
              </a>
            </div>
          </div>

        </div>
        <div className="ten wide column" style={{paddingTop: '50px'}}>
          <h3 className="ui header">Statistics</h3>
          <div className="ui statistics">
            <div className="statistic">
              <div className="value">
                0
              </div>
              <div className="label">
                Saved recipes
              </div>
            </div>
            <div className="statistic">
              <div className="value">
                0
              </div>
              <div className="label">
                Total recipes
              </div>
            </div>
            <div className="statistic">
              <div className="value">
                1
              </div>
              <div className="label">
                Total members
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    )
  }
});

module.exports = Profile;