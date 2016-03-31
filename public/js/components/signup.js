const React = require('react');
const auth = require('../auth');

const Signup = React.createClass({
handleSubmit : function(event) {
    event.preventDefault()

    const email = this.refs.email.value
    const pass  = this.refs.pass.value
    const signupInfo = {
      email: email,
      password: pass
    }

    $.post('/api/guests/', signupInfo)
      .done((data) => {
        if(data) {

          alert('Signup Error, Email Already Exists!')
        }else {
        }
      })
      .error((error) => {
        console.error(error);
      })
  },


  render : function() {
    return (
      <div className="ui grid centered">
        <div className="six wide column">
          <form ref="formSignup" className="ui form" onSubmit={this.handleSubmit}>
            <h2>Please sign up</h2>
            <input ref="email" type="email" placeholder="Email address" autofocus />
            <input ref="pass"  type="password" placeholder="Password" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Signup;