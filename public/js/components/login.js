const React          = require('react');
const Link           = require('react-router').Link;
const auth           = require('../auth');

const Login = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      error: false
    }
  },

  handleSubmit(event) {
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
  render() {
    return (
      <div className="ui grid centered">
        <div className="six wide column">
          <form ref="formSignup" className="ui form" onSubmit={this.handleSubmit}>
            <input ref="email" type="email" placeholder="Email address" autofocus />
            <input ref="pass"  type="password" placeholder="Password" />
            <button type="submit">Login</button>
            {this.state.error && (
              <p>Bad login information</p>
            )}
          </form>
          <Link to="/"><button>Back</button></Link>
        </div>
      </div>
    )
  }
});



module.exports = Login;