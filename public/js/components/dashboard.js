'use strict'
const React = require('react');
const Link  = require('react-router').Link;
const Logout = require('./logout.js');
const request = require('request');
const auth    = require('../auth');





const Dashboard = React.createClass({
  getInitialState : function() {
    return {
      query: [],
      recipes: {}
    }
  },
  componentDidMount : function() {

    // $('.ui.search')
    // .search({
    //   source: content
    // });

  },
  handleSubmit : function(event) {
    event.preventDefault();

    let query = this.refs.recipeQ.value;
    this.state.query.push(query);
    this.setState({ query: this.state.query });
    query = this.state.query.join(' ');
    query = query.replace(/ +/g, '+');

    $.ajax({
      url: '/api/users/yummly',
      type: 'post',
      data: {qs: query},
      beforeSend: function( xhr ) {
        xhr.setRequestHeader("Authorization", 'Bearer ' + auth.getToken() );
      }
    })
    .done((data) => {

      let parsedData = JSON.parse(data);
      if(parsedData.matches.length === 0) {
        this.state.recipes = {};
        this.setState({recipes: this.state.recipes});
      } else {

        parsedData.matches.forEach((el, index) => {
          this.state.recipes['recipe-'+index] = el;
          this.setState({recipes: this.state.recipes});
        });
      }
    });

    this.refs.recipeSearchForm.reset();
  },
  renderRecipeResult : function(key) {
    return (
      <RecipeResult key={key} index={key} details={this.state.recipes[key]} />
    )
  },
  render : function() {
    return (
      <div>

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


        <div className="ui grid">

          <div className="eight wide column">
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

          <div className="eight wide column">
            <div>
              {
                this.state.query.length > 0 ? (
                <h2>Added ingredients</h2>
                ) : (
                  ''
                )
              }
              <ul>
                {
                  this.state.query.map(function(el){
                    return (<li>{el}</li>)
                  })
                }
              </ul>
            </div>
          </div>
          <div className="sixteen wide column">
            
            <div className="ui four cards">

            {
              Object.keys(this.state.recipes).map(this.renderRecipeResult)
            }

            </div>
            
          </div>



        </div>
      </div>
    )
  }
});

const RecipeResult = React.createClass({
  getInitialState : function() {
    return {
      recipeImage: '',
      name: '',
      ingredients: [],
      totalTime: ''
    }
  },
  componentWillMount : function() {
    console.log('grabing recipe id details');
    $.ajax({
      url: '/api/users/yummly/'+ this.props.details.id,
      type: 'GET',
      beforeSend: function( xhr ) {
        xhr.setRequestHeader("Authorization", 'Bearer ' + auth.getToken() );
      }
    })
    .done((data) => {
      let parsedData = JSON.parse(data);
      this.setState({
        recipeImage: parsedData.images[0].hostedLargeUrl,
        name: parsedData.name,
        ingredients: parsedData.ingredientLines,
        totalTime: parsedData.totalTime
      });
    });
  },
  componentDidMount : function() {
    let that = this;
    $(".rating").rating();

    $('.recipeImg').on('load', function() {
      that.updateState();
    })

  },
  handleClick : function() {
    $('.ui.modal.'+this.props.index)
    .modal('show')
  },
  updateState : function() {
    console.log('updating state');
    $.ajax({
      url: '/api/users/yummly/'+ this.props.details.id,
      type: 'GET',
      beforeSend: function( xhr ) {
        xhr.setRequestHeader("Authorization", 'Bearer ' + auth.getToken() );
      }
    })
    .done((data) => {
      let parsedData = JSON.parse(data);
      this.setState({
        recipeImage: parsedData.images[0].hostedLargeUrl,
        name: parsedData.name,
        ingredients: parsedData.ingredientLines,
        totalTime: parsedData.totalTime
      });
    });
  },
  render : function() {
    return (

        <div className="card" onClick={this.handleClick}>
          <div className="image">
            <img src={this.props.details.smallImageUrls[0]} className="recipeImg" />
          </div>
          <div className="extra">
            Rating:
            <div className="ui star rating" data-rating={this.props.details.rating}></div><br/>
            {this.props.details.recipeName}
          </div>

          <div className={"ui modal "+this.props.index}>
            <i className="close icon"></i>
            <div className="header">
              {this.state.name}
            </div>
            <div className="image content">
              <div className="ui medium image">
                <img src={this.state.recipeImage} />
              </div>
              <div className="description">
                <div className="ui header">Ingredients</div>
                <ul>
                  {
                    this.state.ingredients.map(function(el) {
                      return (<li>{el}</li>)
                    })
                  }
                </ul>
                <p>Total time: {this.state.totalTime}</p>
              </div>
            </div>
            <div className="actions">
              <div className="ui black deny button">
                Nope
              </div>
              <div className="ui positive right labeled icon button">
                Yep, thats me
                <i className="checkmark icon"></i>
              </div>
            </div>
          </div>

        </div>
    )
  }
});



module.exports = Dashboard;