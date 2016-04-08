const React = require('react');
const auth    = require('../auth');

const UserData = require('./userdata.js');

const MyRecipes = React.createClass({

  getInitialState : function() {
    return {
      savedData: {}
    }
  },
  addTracker : function(exer_id) {

    console.log('addTracker: ', exer_id);
  },
  deleteData : function(key) {

    $.ajax({
      url: '/api/exercises/delete/' + this.state.savedData[key].exercise_id,
      type: 'DELETE',
      beforeSend: function( xhr ) {
        xhr.setRequestHeader("Authorization", 'Bearer ' + auth.getToken() );
      }
    })
    .done((data) => {
      
      delete this.state.savedData[key];
      this.setState({savedData: this.state.savedData})
    })
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
  renderSavedData : function(key) {
    return (
      <UserData key={key} index={key} details={this.state.savedData[key]} deleteData={this.deleteData} addTracker={this.addTracker} />
    )
  },
  render : function() {
    return (
      <div>
      <div className="ui grid myRecipe">     

        <div className="sixteen wide column" id="myRecipes" style={{paddingTop: '100px !important'}}>
          <div className="ui segment">
            <h2 className="ui header" style={{textAlign: 'centered'}}>My Recipes</h2>

            <div className="ui two cards" style={{border: '2px solid lime'}}>

              {
                Object.keys(this.state.savedData).map(this.renderSavedData)
              }

            </div>

          </div>
        </div>
      </div>

      <Tracker />

      </div>
    )
  }
});


const Tracker = React.createClass({

  render : function() {
    return (
      <div className="ui grid">
        <div className="sixteen wide column">
          <div className="ui segment">
            <h3>Track Zone</h3>

            


            

          </div>
        </div>
      </div>
    )
  }
});




module.exports = MyRecipes;