'use strict';
console.log('react linked');

const React          = require('react');
const ReactDOM       = require('react-dom');
const browserHistory = require('react-router').browserHistory;
const Router         = require('react-router').Router;
const Route          = require('react-router').Route;
const Link           = require('react-router').Link;
const auth           = require('./auth');

import {Button, Rail, Sticky, Dropdown, Sidebar} from 'react-semantify';

const Signup = require('./components/signup.js');
const Login = require('./components/login.js');
const Logout = require('./components/logout.js');
const Dashboard = require('./components/dashboard.js');
const NotFound = require('./components/404.js');
const SearchForm = require('./components/searchform.js');
const UISidebar = require('./components/sidebar.js');
const MyRecipes = require('./components/myrecipes.js');

const App = React.createClass({
  getInitialState : function() {
    return {
      loggedIn: auth.loggedIn(),
      error: false,
      query: [],
      recipes: {}
    }
  },
  setAppState : function(query, recipes) {
    this.setState({
      query: query,
      recipes: recipes
    })
  },
  contextTypes : function() {
    router: React.PropTypes.func.isRequired
  },
  updateAuth : function(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  },
  componentWillMount : function() {
    auth.onChange = this.updateAuth
    auth.login()
  },
  componentDidMount : function() {

    let scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 210) {
            $(".ui.three.item.menu").css('background-color', 'white');
            $('.item.right.floated').css('color', 'black');
        } else {
            $('.item.right.floated').css('color', 'white');
            $(".ui.three.item.menu").css('background-color', 'transparent');
        }
    });

    $('.ui.sticky')
    .sticky({
      context: '#appContainer',
      offset: 80
    });

    $('.ui.sticky.nav')
    .sticky({
      context: '#appContainer',
      offset: 0
    });

    $('#homeBtn').click(function() {
      $('.ui.grid.myRecipe').hide();
      $('#myRecipes').css('display','none');
      $('#mainDash').show();
    $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $('#backBtn').click(function() {
      
    $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $('#hungryBtn').click(function() {
      console.log('move to hungry');
        $('.ui.grid.myRecipe').hide();
        $('#myRecipes').css('display','none');
        // $('.user.steps').fadeOut();
        
        // setTimeout(function(){
        //   $('.user.steps').css('display','none');
        // },1000);

        $('#mainDash').show();
        $('html,body').animate({
            scrollTop: 500 },
            'slow');
    });

    $('#statsBtn').click(function() {
        $('#mainDash').hide();
        // $('.user.steps').hide();
        
        $('#myRecipes').css('display','inline-block');
        $('.ui.grid.myRecipe').show();
        $("html, body").animate({ scrollTop: 280 }, "slow");
    });

  },
  // handleMenu : function() {
  //   $('.ui.sidebar').sidebar({
  //     dimPage: false,
  //   })
  //   .sidebar('setting', 'transition', 'scale down')
  //   .sidebar('toggle')
  // },
  handleSubmit(event) {
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value

    auth.login(email, pass, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true })

      const { location } = this.props

      // force refresh to counter danger unexpected node error
      window.location.href = window.location.href;
      // if (location.state && location.state.nextPathname) {
      //   this.context.router.replace(location.state.nextPathname)
      // } else {
      //   this.context.router.replace('/')
      // }
    })
  },
  clearSearch : function() {
    this.state.query = [];
    this.state.recipes = {}
    this.setState({
      query: this.state.query,
      recipes: this.state.recipes
    });
  },
  handleHungry : function() {
      console.log('move to hungry');
        $('.ui.grid.myRecipe').hide();
        $('#myRecipes').css('display','none');
        // $('.user.steps').fadeOut();

        // setTimeout(function(){
        //   $('.user.steps').css('display','none');
        // },1000);

        $('#mainDash').show();
        $('html,body').animate({
            scrollTop: 500 },
            'slow');
  },
  render : function() {
    if(this.state.loggedIn) {

      return (
        <div>

          <div className="ui sticky nav">
            <div className="ui three item menu">

              <Link to="/"><div style={{border: '3px solid black', margin: '0 145px 0 -45px'}} id="homeBtn">BWYE</div></Link>
              <a className="item right floated" id="backBtn" style={{fontWeight: 'bold'}}>Back to top</a>
              <Link to="/"><a className="item right floated" id="hungryBtn" style={{fontWeight: 'bold'}}>Hungry?</a></Link>
              <Link to="/recipes"><a className="item right floated" id="statsBtn" style={{fontWeight: 'bold'}}>My Area</a></Link>
              <Link to="/logout"><a className="item right floated" style={{fontWeight: 'bold'}}>Logout</a></Link>
            </div>
          </div>

          <div className="user steps">

                     <div className="ui steps" style={{position: 'relative', top: '90px', left: '-4px'}}>
                        <div className="step">
                        <i className="food icon"></i>
                          <div className="content">
                            <div className="title">Our goal</div>
                            <div className="description">Burn what you eat</div>
                          </div>
                        </div>
                      </div>

                       <div className="ui ordered steps" style={{position: 'relative', top: '210px', left: '-207px'}}>
                        <div className="step click" onClick={this.handleHungry}>
                          <div className="content">
                            <div className="title">Find recipes</div>
                            <div className="description">Choose ingredients you love</div>
                          </div>
                        </div>
                        <div className="step click">
                          <div className="content">
                            <div className="title">Save recipes</div>
                            <div className="description">Select recipes you like</div>
                          </div>
                        </div>
                        <div className="step click">
                          <div className="content">
                            <div className="title">Track workouts</div>
                            <div className="description">See your calorie burns</div>
                          </div>
                        </div>
                      </div>         

            </div>

          <div className="ui container" id="appContainer">

            <div className="ui grid" id="mainDash">
              <div className="right floated left aligned thirteen wide column">
                <div className="ui segment" style={{height: '1170px !important', border: '3px solid gold', backgroundColor: 'transparent'}}>

                  <div id="rail" className="ui left rail" style={{border: '3px dotted green', height: '905px !important', marginTop: '100px !important'}}>  
                    <div className="ui sticky">
                      
                      <SearchForm query={this.state.query} recipes={this.state.recipes} setAppState={this.setAppState} />

                      <div className="added list">
                        {
                          this.state.query.length > 0 ? (
                            <div>
                              <button className="ui button" onClick={this.clearSearch}>Clear search</button>
                              <h4 className="ui header">Added ingredients</h4>
                            </div>
                          ) : (
                            null
                          )
                        }
                        <ul>
                          {
                            this.state.query.map(function(el){
                              return (<li style={{listStyle: 'none', fontWeight: 'bold'}}>{el}</li>)
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Dashboard query={this.state.query} recipes={this.state.recipes} />

                </div>
              </div>
            </div>

            {this.props.children}

          </div>

          <div className="ui inverted vertical footer segment">
              <div className="ui container">
                  Burn What You Eat 2016. General Assembly.<br/> 
                  <a href="https://github.com/douglaswissett">Github</a><br/>
                  <a href="https://uk.linkedin.com/in/douglaswissett">LinkedIn</a>
              </div>
          </div>

        </div>
      )

    } else {

      let loginStyle = {
        marginTop: '95px',
        marginRight: '75px',
        opacity: '.9'
      }

      let loginBtnStyle = {
        marginTop: '15px',
        marginLeft: '70px',
        width: '120px'
      }

      let footerStyle = {
        position: 'absolute',
        left: '0',
        bottom: '0',
        width: '100%'
      }

      return (
        <div className="ui container">
        
        <div className="ui grid">
        <div className="ten wide column centered">
        <div className="ui segment" style={loginStyle}>


        <div className="ui two column middle aligned very relaxed stackable grid">

                <div className="column">
                  <form ref="formSignup" className="ui form" onSubmit={this.handleSubmit}>
                    <input ref="email" type="email" placeholder="Email address" autofocus style={{margin: '10px 0'}} />
                    <input ref="pass"  type="password" placeholder="Password" />
                    <button className="positive ui button" type="submit" style={loginBtnStyle}>Login</button>
                    {this.state.error && (
                      <p>Bad login information</p>
                    )}
                  </form>
                </div>


                <div className="ui vertical divider">
                  Or
                </div>


                <div className="center aligned column">
                  <Link to="/signup"><div className="ui big green labeled icon button">
                    <i className="signup icon"></i>
                    Sign Up
                  </div></Link>
                </div>

                {this.props.children}
              </div>

              </div>
              </div>
              </div>


          <div className="ui inverted vertical footer segment" style={footerStyle}>
              <div className="ui container">
                  Burn What You Eat 2016. General Assembly.<br/> 
                  <a href="https://github.com/douglaswissett">Github</a><br/>
                  <a href="https://uk.linkedin.com/in/douglaswissett">LinkedIn</a>
              </div>
          </div>

        </div>
      )
    }
  }
});


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="dashboard" component={Dashboard} />
      <Route path="recipes" component={MyRecipes} />
    </Route>
    <Route path="logout" component={Logout} />
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />
    <Route path="*" component={NotFound} />
  </Router>
), document.getElementById('container'))

