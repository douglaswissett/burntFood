const React = require('react');
const auth    = require('../auth');


const MyRecipes = React.createClass({

  getInitialState : function() {
    return {
      savedData: {}
    }
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
      <UserData key={key} index={key} details={this.state.savedData[key]} deleteData={this.deleteData}/>
    )
  },
  render : function() {
    return (
      <div className="ui grid myRecipe">     

        <div className="sixteen wide column" id="myRecipes" style={{paddingTop: '100px !important'}}>
          <div className="ui segment">
            <h2 className="ui header" style={{textAlign: 'centered'}}>The Burn Zone</h2>

            <div className="ui two cards" style={{border: '2px solid lime'}}>

              {
                Object.keys(this.state.savedData).map(this.renderSavedData)
              }

            </div>

          </div>
        </div>
      </div>
    )
  }
});








const UserData = React.createClass({
  componentDidMount : function() {
    $('.ui.accordion')
    .accordion();
  },
  handleWin : function() {
    

  },
  handleFail : function() {
    this.props.deleteData(this.props.index);
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

              <div>
                <ul>
                  {
                    !this.props.details.attributes ? (
                      this.props.details.attributes.course.map((el) => {
                        return (<li>{el}</li>) 
                      })
                    ) : (
                      null
                    )
                  }
                </ul>
              </div>


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
                  {"This contains: " + this.props.details.calories + ' calories.'}<br/>
                  {this.props.details.exercise + " for " + this.props.details.duration + ' minutes'}
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





module.exports = MyRecipes;