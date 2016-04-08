const React = require('react');
const Link  = require('react-router').Link;
const auth  = require('../auth');

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
          <div className="ui segment">

            <form ref="formSignup" className="ui form" onSubmit={this.handleSubmit}>
              <h2>Please sign up</h2>
              <input style={{ margin: '7.5px 0 7.5px 30px', width: '365px'}} ref="email" type="email" placeholder="Email address" autofocus />
              <input style={{ margin: '7.5px 0 7.5px 30px', width: '250px' }} ref="pass"  type="password" placeholder="Password" />
              <input style={{ margin: '7.5px 0 7.5px 15px', width: '100px' }} type="number" placeholder="Age" min="12"/>
              <select style={{margin: '7.5px 0 7.5px 30px', width: '110px' , height: '36px', display: 'inline-block'}}>
                <option></option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <input style={{ margin: '7.5px 0 7.5px 18px', width: '110px' }} type="number" placeholder="Weight kg" />
              <input style={{ margin: '7.5px 0 7.5px 18px', width: '110px' }} type="number" placeholder="Height cm" />
              <button type="submit">Submit</button>
            </form>
            <Link to="/"><button>Back</button></Link>


          </div>
        </div>
      </div>
    )
  }
});

module.exports = Signup;