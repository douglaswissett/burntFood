const React = require('react');
const MyRecipes = React.createClass({

  render : function() {
    return (
      <div className="sixteen wide column" style={{border: '1px solid blue'}} id="myRecipes">
        <div className="ui segment">
          <h2 className="ui header" style={{textAlign: 'centered'}}>Added recipes</h2>


        </div>
      </div>
    )
  }
});

module.exports = MyRecipes;