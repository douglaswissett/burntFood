const React = require('react');
const auth = require('../auth');
const Link = require('react-router').Link;

const Logout = React.createClass({
  componentDidMount : function() {
    auth.logout()
  },
  render : function() {
    return (
      <div>
        <p>You are now logged out</p>
        <Link to="/"><button>Back</button></Link>
      </div>
    )
  }
})

module.exports = Logout;