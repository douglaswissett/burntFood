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
    return (
      <div id="dashboard">
        <div className="ui grid">
          <div className="sixteen wide column">
            <div className="ui four cards">
              {
                Object.keys(this.props.recipes).map(this.renderRecipeResult)
              }
            </div>
          </div>
          <div className="sixteen wide column" style={{border: '1px solid orange', height: '300px'}}>
            <h1>Most popular choices to go here...</h1>
          </div>

          <MyRecipes />
          
        </div>
      </div>
    )
  }
});





















module.exports = Dashboard;