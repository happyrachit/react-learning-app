import React, { Component } from "react";

export class UserDetails extends Component {
  constructor(props) {
    super(props); //calling super class's constructor

    this.state = {
      user: {},
    };
  }

  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={this.state.user.avatar_url}
          alt="user"
        />
        <div className="card-body">
          <h5 className="card-title">{this.state.user.id} - {this.state.user.login}</h5>
          <p className="card-text">{this.state.user.node_id}</p>
        </div>
      </div>
    );
  }

  componentDidMount = async () => {
    var login = this.props.match.params.login;

    //send get request
    var response = await fetch(`https://api.github.com/users/${login}`, {
      method: "GET",
    });

    //get response body
    var body = await response.json();
    console.log(body);

    //Check response body
    if (body) {
      this.setState({ user: body });
    }
  };
}

export default UserDetails;
