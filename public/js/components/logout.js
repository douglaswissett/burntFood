const React = require('react');
const auth = require('../auth');
const Link = require('react-router').Link;




let logoutStyles = {
  position: 'absolute',
  top: '200px',
  left: '440px',
  width: '300px',
  height: '115px',
  textAlign: 'center',
  padding: '18px',
  boxShadow: '0 0 20px orange inset',
  opacity: '.875'
}

const Logout = React.createClass({
  componentDidMount : function() {
    auth.logout()
  },
  render : function() {

    let footerStyle = {
      position: 'absolute',
      left: '0',
      bottom: '0',
      width: '100%'
    }

    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="eight wide column">
            <div className="ui segment" style={logoutStyles}>

              <p style={{fontSize: '16px'}}>You are now logged out</p>
              <Link to="/"><button className="ui basic button">Back</button></Link>

            </div>
          </div>
        </div>

        <div className="ui inverted vertical footer segment" style={footerStyle}>
            <div className="ui container" style={{fontFamily: 'sans-serif'}}>
                Burn What You Eat 2016. General Assembly.<br/> 
                <a href="https://github.com/douglaswissett">Github</a><br/>
                <a href="https://uk.linkedin.com/in/douglaswissett">LinkedIn</a>
            </div>
        </div>

      </div>
    )
  }
})


module.exports = Logout;