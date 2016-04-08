'use strict'
const React = require('react');
const Link  = require('react-router').Link;
const Logout = require('./logout.js');
const request = require('request');
const auth    = require('../auth');


const RecipeResult = require('./reciperesult.js')
const MyRecipes    = require('./myrecipes.js');
const SearchForm = require('./SearchForm');

const Dashboard = React.createClass({
  renderRecipeResult : function(key) {
    return (
      <RecipeResult key={key} index={key} details={this.props.recipes[key]} />
    )
  },
  render : function() {

    let pointerStyle = {
      backgroundColor: 'white',
      height: '50px',
      width: '170px',
      borderRadius: '10px',
      padding: '15px',
      fontWeight: 'bold',
      position: 'relative',
      top: '-65px',
      left: '125px'
    }

    return (
      <div id="dashboard">
        <div className="ui grid">
          <div className="sixteen wide column" style={{paddingTop: '100px'}}>

            {
              this.props.query.length > 0 ? (

              <div className="ui segment" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                <h2>Search for recipes</h2>
                <div className="ui four cards" style={{border: '1px solid blue'}}>
                  {
                    Object.keys(this.props.recipes).map(this.renderRecipeResult)
                  }
                </div>
              </div>

              ) : (
                <div>
                  <i className="pointing left icon" style={{ fontSize: '5em', position: 'relative', top: '38px' }}></i>
                  <div style={pointerStyle}>
                    Enter ingredients here
                  </div>
                </div>  
              )
            }
          </div>     
        </div>
      </div>
    )
  }
});




module.exports = Dashboard;