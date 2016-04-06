const React = require('react');
const auth    = require('../auth');


const MyRecipes = React.createClass({

  // getInitialState : function() {
  //   return {
  //     savedData: {},
  //   }
  // },
  // componentDidMount : function() {
  //   let that = this;

  //   $.ajax({
  //     url: '/api/recipes/saved',
  //     beforeSend: function( xhr ) {
  //       xhr.setRequestHeader("Authorization", 'Bearer ' + auth.getToken() );
  //     }
  //   })
  //   .done((data) => {

  //     data.forEach((el) => {
  //       this.state.savedData[el.recipe_id] = el;
  //       this.setState({savedData: this.state.savedData});
  //     })
  //   })
  // },
  renderSavedData : function(key) {
    return (
      <UserData key={key} index={key} details={this.props.savedData[key]} />
    )
  },
  render : function() {
    return (
      <div className="sixteen wide column" style={{border: '1px solid blue', position: 'absolute', top: '905px', left: '0', paddingTop: '120px'}} id="myRecipes">
        <div className="ui segment">
          <h2 className="ui header" style={{textAlign: 'centered'}}>The Burn Zone</h2>

          <div className="ui two cards" style={{border: '2px solid lime'}}>

            {
              Object.keys(this.props.savedData).map(this.renderSavedData)
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
        <div className="card">
          <div className="content">
            <img className="right floated mini ui image" src={this.props.details.img_url} />
            <div className="header">
              {this.props.details.recipe}
            </div>
            <div className="description">
              {"This contains: " + this.props.details.calories + ' calories.'}<br/>
              {this.props.details.exercise + " for " + this.props.details.duration + ' minutes'}
            </div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button">Win</div>
              <div className="ui basic red button">Fail</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})


module.exports = MyRecipes;