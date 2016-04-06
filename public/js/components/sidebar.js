'use strict'
const React = require('react');
import {Sidebar} from 'react-semantify';

const UISidebar = React.createClass({
  render : function() {
    return (
      <Sidebar className="ui top sidebar menu push scale down" init={true}>
        <a className="item">
          Our company
        </a>
        <a className="item">
          Dashboard
        </a>
        <a className="item">
          My recipes
        </a>
        <a href="/logout" className="item right floated">
          Logout
        </a>
      </Sidebar>
    )
  }
});

module.exports = UISidebar;