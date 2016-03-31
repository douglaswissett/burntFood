const React = require('react');
const auth  = require('../auth');
const Link  = require('react-router').Link;

const Login = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState : function() {
    return {
      error: false
    }
  },
  handleSubmit : function(event) {
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value

    auth.login(email, pass, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true })
      const { location } = this.props

      if (location.state && location.state.nextPathname) {
        this.context.router.replace(location.state.nextPathname)
      } else {
        this.context.router.replace('/')
      }
    })
  },
  render : function() {
    return (
      <div className="ui grid centered">
        <div className="six wide column">
          <form className="ui form" onSubmit={this.handleSubmit}>      
            <input ref="email" type="email" placeholder="Email address" autofocus />
            <input ref="pass" type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <Link to="/signup"><button>Signup</button></Link>
          {
            this.state.error && (<p>Password and email do not match</p>)
          }
        </div>
      </div>
    )
  }
})
module.exports = Login;