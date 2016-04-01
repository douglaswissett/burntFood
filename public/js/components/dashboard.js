const React = require('react');
const Link  = require('react-router').Link;
const Logout = require('./logout.js');
const request = require('request');




const Dashboard = React.createClass({
  componentDidMount : function() {
    $('#multi-select')
    .dropdown();
  },
  handleSubmit : function(event) {
    event.preventDefault();

    // console.log($('#multi-select').val())
    let query = this.refs.recipeQ.value;
    request('http://api.yummly.com/v1', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body) // Show the HTML for the Google homepage. 
      }
    });
  },
  render : function() {
    return (
      <div style={{height: '1000px'}}>

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
                22 Followers
              </a>
            </div>
          </div>

        </div>
        <div className="ten wide column" style={{paddingTop: '50px'}}>
          <h3 className="ui header">Statistics</h3>
          <div className="ui statistics">
            <div className="statistic">
              <div className="value">
                22
              </div>
              <div className="label">
                Saved recipes
              </div>
            </div>
            <div className="statistic">
              <div className="value">
                31,200
              </div>
              <div className="label">
                Total recipes
              </div>
            </div>
            <div className="statistic">
              <div className="value">
                6,423
              </div>
              <div className="label">
                Total members
              </div>
            </div>
          </div>

        </div>
        </div>
        </div>


        <div className="ui grid centered">
        <div className="column">

          <form id="recipeSearchForm" onSubmit={this.handleSubmit}>
            

            <div className="ui icon input">
              <input type="text" ref="recipeQ" placeholder="Search ingredients..." />
              <i className="search icon"></i>
            </div>

            <button className="positive ui button" style={{marginTop: '15px'}}>Search</button>
          </form>

        </div>
        </div>

      </div>
    )
  }
});

            // <select name="states" className="ui selection dropdown multiple" multiple="" id="multi-select">
            //   <option value="">States</option>
            //   <option value="AL">Alabama</option>
            //   <option value="AK">Alaska</option>
            //   <option value="AZ">Arizona</option>
            //   <option value="AR">Arkansas</option>
            //   <option value="CA">California</option>
            //   <option value="OH">Ohio</option>
            //   <option value="OK">Oklahoma</option>
            //   <option value="OR">Oregon</option>
            //   <option value="PA">Pennsylvania</option>
            //   <option value="RI">Rhode Island</option>
            //   <option value="SC">South Carolina</option>
            //   <option value="SD">South Dakota</option>
            //   <option value="TN">Tennessee</option>
            //   <option value="TX">Texas</option>
            //   <option value="UT">Utah</option>
            //   <option value="VT">Vermont</option>
            //   <option value="VA">Virginia</option>
            //   <option value="WA">Washington</option>
            //   <option value="WV">West Virginia</option>
            //   <option value="WI">Wisconsin</option>
            //   <option value="WY">Wyoming</option>
            // </select>

module.exports = Dashboard;