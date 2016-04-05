'use strict'
const React = require('react');


const RecipeResult = React.createClass({

  componentDidMount : function() {
    $(".rating").rating();
    
    $('.button.'+this.props.index).click(() => {

      


      this.props.details.calories
    })
  },
  handleClick : function() {
    $('.ui.modal.'+this.props.index)
    .modal('show')
  },
  render : function() {
    return (

        <div className="card result" onClick={this.handleClick}>
          <div className="image">
            <img src={this.props.details.largeImage} className="recipeImg" />
          </div>
          <div className="extra">
            Rating:
            <div className="ui star rating" data-rating={this.props.details.rating}></div><br/>
            {this.props.details.recipeName}
          </div>

          <div className={"ui modal "+this.props.index}>
            <i className="close icon"></i>
            <div className="header">
              {this.props.details.recipeName}
            </div>
            <div className="image content">
              <div className="ui medium image">
                <img src={this.props.details.largeImage} />
              </div>
              <div className="description">
                <div className="ui header">Ingredients</div>
                <ul>
                  {
                    this.props.details.ingredients.map(function(el) {
                      return (<li>{el}</li>)
                    })
                  }
                </ul>
                <p>Total time: {this.props.details.totalTime}</p>
              </div>
            </div>
            <div className="actions">
              <div className="ui black deny button">Nope
                
              </div>
              <div className={"ui positive right labeled icon button "+this.props.index}>
                Cook it
                <i className="checkmark icon"></i>
              </div>
            </div>
          </div>

        </div>
    )
  }
});

module.exports = RecipeResult;