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
    let that = this;

    $.ajax({
      url: '/api/recipes/saved',
      beforeSend: function( xhr ) {
        xhr.setRequestHeader("Authorization", 'Bearer ' + auth.getToken() );
      }
    })
    .done((data) => {

      function recursiveSavedData(collection, i) {
        if(collection.length == i) {
          return;
        }
        let el = collection[i];
        that.state.savedData[el.recipe_id] = el;

        $.ajax({
          url: '/api/users/yummly/'+ el.yummly_id,
          type: 'GET',
          beforeSend: function( xhr ) {
            xhr.setRequestHeader("Authorization", 'Bearer ' + auth.getToken() );
          }  
        })
        .done((data) => {
          let parsedData = JSON.parse(data)

          that.state.savedData[el.recipe_id].totalTime = parsedData.totalTime;
          that.state.savedData[el.recipe_id].prepTime = parsedData.prepTime;
          that.state.savedData[el.recipe_id].cookTime = parsedData.cookTime;
          that.state.savedData[el.recipe_id]['list'] = parsedData.ingredientLines;
          // console.log('test2', that.state.savedData[el.recipe_id].list )
          that.state.savedData[el.recipe_id].numberOfServings = parsedData.numberOfServings;
          that.state.savedData[el.recipe_id].attribution = parsedData.attribution;
          that.state.savedData[el.recipe_id].attributes = parsedData.attributes;
          that.state.savedData[el.recipe_id].flavors = parsedData.flavors;
          that.state.savedData[el.recipe_id].yield = parsedData.yield;

          that.setState({savedData: that.state.savedData});
          i++;
          recursiveSavedData(collection, i);
        })
      }

      recursiveSavedData(data, 0);
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

      function recursiveSavedData(collection, i) {
        if(collection.length == i) {
          return;
        }
        let el = collection[i];
        that.state.savedData[el.recipe_id] = el;

        $.ajax({
          url: '/api/users/yummly/'+ el.yummly_id,
          type: 'GET',
          beforeSend: function( xhr ) {
            xhr.setRequestHeader("Authorization", 'Bearer ' + auth.getToken() );
          }  
        })
        .done((data) => {
          let parsedData = JSON.parse(data)

          that.state.savedData[el.recipe_id].totalTime = parsedData.totalTime;
          that.state.savedData[el.recipe_id].prepTime = parsedData.prepTime;
          that.state.savedData[el.recipe_id].cookTime = parsedData.cookTime;
          that.state.savedData[el.recipe_id]['list'] = parsedData.ingredientLines;
          console.log('test2', that.state.savedData[el.recipe_id].list )
          that.state.savedData[el.recipe_id].numberOfServings = parsedData.numberOfServings;
          that.state.savedData[el.recipe_id].attribution = parsedData.attribution;
          that.state.savedData[el.recipe_id].attributes = parsedData.attributes;
          that.state.savedData[el.recipe_id].flavors = parsedData.flavors;
          that.state.savedData[el.recipe_id].yield = parsedData.yield;

          that.setState({savedData: that.state.savedData});
          i++;
          recursiveSavedData(collection, i);
        })
      }

      recursiveSavedData(data, 0);
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