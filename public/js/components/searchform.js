const React = require('react');
const auth  = require('../auth');

const SearchForm = React.createClass({
  handleSubmit : function(event) {
    event.preventDefault();

    // format query
    let query = this.refs.recipeQ.value;
    this.props.query.push(query);
    query = this.props.query.join(' ');
    query = query.replace(/ +/g, '+');

    // ajax for recipes by ingredients
    $.ajax({
      url: '/api/users/yummly',
      type: 'post',
      data: {qs: query},
      beforeSend: function( xhr ) {
        xhr.setRequestHeader("Authorization", 'Bearer ' + auth.getToken() );
      }
    })
    .done((data) => {
      let that = this;
      let parsedData = JSON.parse(data);
      let matches = parsedData.matches;

      this.props.setAppState(this.props.query,{});
      if(matches.length === 0) {
        this.props.setAppState(this.props.query,{});
      } else {

        function requestRecipes(collection, i) {
          if(collection.length == i) {
            return;
          }
          // ajax for detailed data by recipe id
          let recipe = collection[i];
          $.ajax({
            url: '/api/users/yummly/'+ recipe.id,
            type: 'GET',
            beforeSend: function( xhr ) {
              xhr.setRequestHeader("Authorization", 'Bearer ' + auth.getToken() );
            }  
          })
          .done((data) => {
            let parsedData = JSON.parse(data);
            // assign state for each recipe
            that.props.recipes[recipe.id] = recipe;
            that.props.recipes[recipe.id].largeImage = parsedData.images[0].hostedLargeUrl;
            that.props.recipes[recipe.id].ingredientLines = parsedData.ingredientLines;
            that.props.recipes[recipe.id].totalTime = parsedData.totalTime;

            // loop through nutritional values of each recipe and store calories
            parsedData.nutritionEstimates.forEach((el) => {
              if(el.attribute == "ENERC_KCAL") {
                that.props.recipes[recipe.id].calories = el.value;
              }
            });
            // set parent state of recipes and queries
            that.props.setAppState(that.props.query, that.props.recipes);

            i++
            requestRecipes(collection, i);
          })
        }
        requestRecipes(matches, 0);
      }
    });

    this.refs.recipeSearchForm.reset();
  },
  render : function() {
    return (
      <div className="eight wide column" id="hungry">
        <form ref="recipeSearchForm" id="recipeSearchForm" onSubmit={this.handleSubmit}>
          <div className="ui search">
            <div className="ui icon input">
              <input className="prompt" ref="recipeQ" type="text" placeholder="Search ingredients..." />
              <i className="search icon"></i>
            </div>
            <div className="results"></div>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = SearchForm;