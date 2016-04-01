'use strict'
const React = require('react');
const Link  = require('react-router').Link;
const Logout = require('./logout.js');
const request = require('request');






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
    })
  },
  handleSubmit : function(event) {
    event.preventDefault();

    let query = this.refs.recipeQ.value;
    this.state.query.push(query);
    this.setState({ query: this.state.query });
    query = this.state.query.join(' ');
    query = query.replace(/ +/g, '+');
    
    request('http://api.yummly.com/v1/api/recipes?_app_id=c1ccfb41&_app_key=c65556237ef5e562638d93d41433e9c8&q=' + query, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        let parsedData = JSON.parse(body);
        parsedData.matches.forEach((el, index) => {
          this.state.recipes['recipe-'+index] = el;
          this.setState({recipes: this.state.recipes});
        })
      }
    }.bind(this));

    this.refs.recipeSearchForm.reset();
  },
  renderRecipeResult : function(key) {
    return (
      <RecipeResult key={key} index={key} details={this.state.recipes[key]} />
    )
  },
  render : function() {
    return (
      <div style={{height: '1000px'}}>

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

          <div className="sixteen wide column" style={{border: '1px solid blue'}}>
            <ul>

            {
              Object.keys(this.state.recipes).map(this.renderRecipeResult)
            }

            </ul>
          </div>

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
        
        </div>

      </div>
    )
  }
});

const RecipeResult = React.createClass({
  render : function() {
    return (
      <li>
        <div>
          {this.props.details.recipeName}
        </div>
      </li>
    )
  }
});


module.exports = Dashboard;