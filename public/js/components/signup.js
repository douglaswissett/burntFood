const React = require('react');
const Link  = require('react-router').Link;
const auth  = require('../auth');

const Signup = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleSubmit : function(event) {
    event.preventDefault()
    let that = this;

    let email = this.refs.email.value;
    let pass  = this.refs.pass.value;
    let age = this.refs.age.value;
    let gender = this.refs.gender.value;
    let weight = this.refs.weight.value;
    let height = this.refs.height.value;

    let signupInfo = {
      email: email,
      password: pass,
      age: age,
      gender: gender,
      weight: weight,
      height: height
    }

    $.post('/api/guests/', signupInfo)
      .done((data) => {
        if(data) {

          alert('Signup Error, Email Already Exists!')
        }
      })
      .error((error) => {
        console.error(error);


        auth.login(email, pass, (loggedIn) => {
          if (!loggedIn)
            return this.setState({ error: true })

          const { location } = this.props

          // force refresh to counter danger unexpected node error
          // window.location.href = window.location.href;
          if (location.state && location.state.nextPathname) {
            this.context.router.replace(location.state.nextPathname)
          } else {
            this.context.router.replace('/')
          }
        })

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
              <input style={{ margin: '7.5px 0 7.5px 15px', width: '100px' }} type="number" ref="age" placeholder="Age" min="12"/>
              <select style={{margin: '7.5px 0 7.5px 30px', width: '110px' , height: '36px', display: 'inline-block'}} ref="gender">
                <option></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input style={{ margin: '7.5px 0 7.5px 18px', width: '110px' }} ref="weight" type="number" placeholder="Weight kg" />
              <input style={{ margin: '7.5px 0 7.5px 18px', width: '110px' }} ref="height" type="number" placeholder="Height cm" />
              
              <button className="ui primary button" type="submit">Submit</button>
            </form>

            <Link to="/"><button className="ui button">Back</button></Link>

          </div>
        </div>
      </div>
    )
  }
});

module.exports = Signup;