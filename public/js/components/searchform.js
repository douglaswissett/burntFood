const React = require('react');
const auth  = require('../auth');

const SearchForm = React.createClass({
  handleSubmit : function(event) {
    event.preventDefault();



    let query = this.refs.recipeQ.value;
    this.props.query.push(query);
    // this.setState({ query: this.state.query });
    console.log(this.props.query);
    query = this.props.query.join(' ');
    query = query.replace(/ +/g, '+');


    
    this.props.setAppState(this.props.query,{});

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


        // this.setState({recipes: this.state.recipes})
      if(matches.length === 0) {
        this.props.recipes = {};
        // this.setState({recipes: this.state.recipes});
      } else {

        function requestRecipes(collection, i) {
          if(collection.length == i) {
            return;
          }

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
            that.props.recipes[recipe.id] = recipe;
            that.props.recipes[recipe.id].largeImage = parsedData.images[0].hostedLargeUrl;
            that.props.recipes[recipe.id].ingredientLines = parsedData.ingredientLines;
            that.props.recipes[recipe.id].totalTime = parsedData.totalTime;
            // that.setState({recipes: that.state.recipes});
            console.log(that.props.recipes);

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
        <form ref="recipeSearchForm" onSubmit={this.handleSubmit}>
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