const React = require('react');
const auth    = require('../auth');


const MyRecipes = React.createClass({

  getInitialState : function() {
    return {
      savedData: {},
    }
  },
  componentDidMount : function() {

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
  renderSavedData : function(key) {
    return (
      <UserData key={key} index={key} details={this.state.savedData[key]} />
    )
  },
  render : function() {
    return (
      <div className="sixteen wide column" style={{border: '1px solid blue', position: 'absolute', top: '905px', left: '0', paddingTop: '120px'}} id="myRecipes">
        <div className="ui segment">
          <h2 className="ui header" style={{textAlign: 'centered'}}>The Burn Zone</h2>

          <div className="ui two cards" style={{border: '2px solid lime'}}>

            {
              Object.keys(this.state.savedData).map(this.renderSavedData)
            }

          </div>

        </div>
      </div>
    )
  }
});

const UserData = React.createClass({
  render : function() {
    return (
      <div className="ui card">
        <div className="ui slide masked reveal image">
          <img src="/images/avatar/large/jenny.jpg" className="visible content" />
          <img src="/images/avatar/large/elliot.jpg" className="hidden content" />
        </div>
        <div className="content">
          <a className="header">Team Fu &amp; Hess</a>
          <div className="meta">
            <span className="date">Create in Sep 2014</span>
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="users icon"></i>
            2 Members
          </a>
        </div>
      </div>
    )
  }
})


module.exports = MyRecipes;