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

  getInitialState : function() {
    return {
      savedData: {}
    }
  },
  componentWillMount : function() {

    $.ajax({
      url: '/api/recipes/saved',
      beforeSend: function( xhr ) {
        xhr.setRequestHeader("Authorization", 'Bearer ' + auth.getToken() );
      }
    })
    .done((data) => {

      data.forEach((el) => {
        this.state.savedData[el.recipe_id] = el;
        this.setState({savedData: this.state.savedData});
      })
    })
  },
  updateSavedData : function() {

    $.ajax({
      url: '/api/recipes/saved',
      beforeSend: function( xhr ) {
        xhr.setRequestHeader("Authorization", 'Bearer ' + auth.getToken() );
      }
    })
    .done((data) => {

      data.forEach((el) => {
        this.state.savedData[el.recipe_id] = el;
        this.setState({savedData: this.state.savedData});
      })
    })

  },
  renderRecipeResult : function(key) {
    return (
      <RecipeResult key={key} index={key} details={this.props.recipes[key]} updateSavedData={this.updateSavedData} />
    )
  },
  render : function() {
    return (
      <div id="dashboard">
        <div className="ui grid">
          <div className="sixteen wide column" style={{paddingTop: '100px'}}>
            <div className="ui segment">
              <h2>Search for recipes</h2>
              <div className="ui four cards" style={{border: '1px solid blue'}}>
                {
                  Object.keys(this.props.recipes).map(this.renderRecipeResult)
                }
              </div>
            </div>
          </div>

          <MyRecipes savedData={this.state.savedData} />
          
        </div>
      </div>
    )
  }
});





















module.exports = Dashboard;