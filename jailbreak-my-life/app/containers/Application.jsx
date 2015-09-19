import React from "react";
import { RouteHandler } from "react-router";
import MainMenu from "components/MainMenu";

import styles from "./Application.css";

var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        I am a Header
      </div>
    );
  }
});

var Home = React.createClass({
  render: function() {
    return (
      <div className="home">
        I am a Home
      </div>
    );
  }
});

var Healthcare = React.createClass({
  render: function() {
    return (
      <div className="healthcare">
        I am a Healthcare
      </div>
    );
  }
});

var Jobs = React.createClass({
  render: function() {
    return (
      <div className="jobs">
        I am a Jobs
      </div>
    );
  }
});

var Tutoring = React.createClass({
  render: function() {
    return (
      <div className="Tutoring">
        I am a Tutoring
      </div>
    );
  }
});

export default class Application extends React.Component {
	static getProps(stores, params) {
		var transition = stores.Router.getItem("transition");
		return {
			loading: !!transition
		};
	}
	render() {
		var { loading } = this.props;
		return <div className='maincontainer'>
			<Header />
			<Home />
			<Healthcare />
			<Jobs /> 
			<Tutoring />
		</div>;
	}
}

Application.contextTypes = {
	stores: React.PropTypes.object
};
