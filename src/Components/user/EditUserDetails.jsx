import React, { Component } from "react";

export class EditUserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users:[],
    };
  }

  render() {
    return (
      <div>
        <h4>Edit UserDetails</h4>
        <input
          type="text"
          value={this.state.login}
          onChange={(event) => {
            this.setState({ login: event.target.value });
          }}
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={this.onSaveClick}
        >
          Submit
        </button>
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

    //Check response body
    if (body) {
      this.setState({ login: body.login });
    }
  };

  onSaveClick = async (event) => {
    event.preventDefault();

    var user = {
        login: this.state.login,
    };

    console.log(user);

  };
}

export default EditUserDetails;
