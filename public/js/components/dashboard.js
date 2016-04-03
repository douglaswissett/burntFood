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

  var content = [
    { title: "Bread"},
    { title: "Eggs"},
    { title: "Milk"},
    { title: "Vanilla extract"},
    { title: "Raw sugar"},
    { title: "Ground cinnamon"},
    { title: "Butter"},
    { title: "Bone in skin on chicken thigh"},
    { title: "Baby potatoes"},
    { title: "Baby carrots"},
    { title: "Olive oil"},
    { title: "Salt"},
    { title: "Pepper"},
    { title: "Unsweetened applesauce"},
    { title: "Granulated sugar"},
    { title: "Large eggs"},
    { title: "All-purpose flour"},
    { title: "Baking soda"},
    { title: "Baking powder"},
    { title: "Cinnamon"},
    { title: "Carrots"},
    { title: "Cream cheese"},
    { title: "Almond extract"},
    { title: "Powdered sugar"},
    { title: "Chicken breasts"},
    { title: "Taco seasoning"},
    { title: "Plain greek yogurt"},
    { title: "Black beans"},
    { title: "Salsa"},
    { title: "Mexican cheese blend"},
    { title: "Tortilla chips"},
    { title: "Almond butter"},
    { title: "Semisweet chocolate"},
    { title: "White chocolate"},
    { title: "Extra-virgin olive oil"},
    { title: "Pure maple syrup"},
    { title: "Apple cider vinegar"},
    { title: "Grated lemon zest"},
    { title: "Lemon juice"},
    { title: "Kosher salt"},
    { title: "Black pepper"},
    { title: "Warm water"},
    { title: "Instant yeast"},
    { title: "Canola oil"},
    { title: "Drummettes"},
    { title: "Melted butter"},
    { title: "Paprika"},
    { title: "Onion powder"},
    { title: "Honey"},
    { title: "Sriracha"},
    { title: "Lime juice"},
    { title: "Soy sauce"},
    { title: "Brownie mix"},
    { title: "Light corn syrup"},
    { title: "Salted butter"},
    { title: "Heavy cream"},
    { title: "Frosting"},
    { title: "Unsweetened cocoa powder"},
    { title: "Whole milk"},
    { title: "Salmon fillets"},
    { title: "Garlic"},
    { title: "Chopped parsley"},
    { title: "Parmesan cheese"},
    { title: "Sliced potatoes"},
    { title: "Flour"},
    { title: "Cayenne pepper"},
    { title: "Sharp cheddar cheese"},
    { title: "Grating cheese"},
    { title: "Lean ground pork"},
    { title: "Lean ground beef"},
    { title: "Sesame oil"},
    { title: "Panko breadcrumbs"},
    { title: "Ginger paste"},
    { title: "Minced garlic"},
    { title: "Green onions"},
    { title: "Lemongrass"},
    { title: "Marinade"},
    { title: "Sesame seeds"},
    { title: "Chicken legs"},
    { title: "Tamari soy sauce"},
    { title: "Hoisin sauce"},
    { title: "Chinese mustard"},
    { title: "Orange juice"},
    { title: "Dijon mustard"},
    { title: "Garlic cloves"},
    { title: "Sea salt"},
    { title: "Meat"},
    { title: "Onions"},
    { title: "Fresh ginger"},
    { title: "Rice vinegar"},
    { title: "Asian chili sauce"},
    { title: "Dark sesame oil"},
    { title: "Lettuce leaves"},
    { title: "Low sodium soy sauce"},
    { title: "Water"},
    { title: "Ginger"},
    { title: "Chili paste"},
    { title: "Lime"},
    { title: "Corn starch"},
    { title: "Ground chicken"},
    { title: "Salted cashews"},
    { title: "Lettuce"},
    { title: "Cilantro"},
    { title: "Hellmann real mayonnais"},
    { title: "Sugar"},
    { title: "Ground ginger"},
    { title: "Slaw mix"},
    { title: "Chopped fresh cilantro"},
    { title: "Chicken drumsticks"},
    { title: "Olive oil spray"},
    { title: "Balsamic vinegar"},
    { title: "Chives"},
    { title: "Ground black pepper"},
    { title: "Wish bone western origin dress"},
    { title: "Bacon, crisp-cooked and crumbled"},
    { title: "Tomatoes"},
    { title: "Coleslaw"},
    { title: "Unsalted butter"},
    { title: "Green bell pepper"},
    { title: "Ham"},
    { title: "Iceberg lettuce"},
    { title: "Frozen whole kernel corn"},
    { title: "Cucumber"},
    { title: "Purple onion"},
    { title: "Shredded Monterey Jack cheese"},
    { title: "Wish bone western dress"},
    { title: "Seasoning salt"},
    { title: "Cooked ham"},
    { title: "Shredded cheddar cheese"},
    { title: "Finely chopped onion"},
    { title: "Chopped green bell pepper"},
    { title: "Red bell pepper"},
    { title: "Fresh chives"},
    { title: "Chopped onion"},
    { title: "Chopped bell pepper"},
    { title: "Deli ham"},
    { title: "Chopped ham"},
    { title: "Green pepper"},
    { title: "Cheese"},
    { title: "Pork shoulder"},
    { title: "Barbecue rub"},
    { title: "Barbecue sauce"},
    { title: "Sweet onion"},
    { title: "Ground beef"},
    { title: "Wagon wheel pasta, cook and drain"},
    { title: "Chili powder"},
    { title: "Cumin seed"},
    { title: "Chile pepper"},
    { title: "Ground turmeric"},
    { title: "Mustard greens"},
    { title: "Fresh spinach"},
    { title: "Ground cumin"},
    { title: "Ground coriander"},
    { title: "Potatoes"},
    { title: "Ghee"},
    { title: "Ginger root"},
    { title: "Stew"},
    { title: "Coriander"},
    { title: "Amchur"},
    { title: "Green chilies"},
    { title: "Garam masala"},
    { title: "Turmeric"},
    { title: "Red chili powder"},
    { title: "Safflower oil"},
    { title: "Yellow onion"},
    { title: "Dried mint"},
    { title: "Cauliflower florets"},
    { title: "Low sodium vegetable broth"},
    { title: "Quick cooking brown rice"},
    { title: "Currant"},
    { title: "Frozen peas"},
    { title: "Lentils"},
    { title: "Unsalted almonds"},
    { title: "Low-fat plain yogurt"},
    { title: "Cauliflower"},
    { title: "Oil"},
    ];

    $('.ui.search')
    .search({
      source: content
    });

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
    $(".rating").rating();
  },
  handleClick : function() {
    $('.ui.modal.'+this.props.index)
    .modal('show')
  },
  render : function() {
    return (

        <div className="card" onClick={this.handleClick}>
          <div className="image">
            <img src={this.state.recipeImage} />
          </div>
          <div className="extra">
            Rating:
            <div className="ui star rating" data-rating={this.props.details.rating}></div>
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