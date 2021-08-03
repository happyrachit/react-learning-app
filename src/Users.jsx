import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
    };
  }

  render() {
    return (
      <tr>
        <th scope="row">{this.state.user.id}</th>
        <td>
          <img
            src={this.state.user.avatar_url}
            width="50"
            height="60"
            alt="user"
          />
        </td>
        <td>{this.state.user.login}</td>
        <td>{this.state.user.node_id}</td>
        <td>
          <span className="pull-left hand-icon">
            <Link to={`Details/${this.state.user.login}`} target="_blank">
              <i className="fa fa-file"></i>
            </Link> | <i className="fa fa-pencil" data-toggle="modal" data-target="#exampleModal"></i> | <span
                onClick={() => {
                  this.props.onDelete(this.state.user);
                }}
              ><i className="fa fa-trash-o" ></i></span>
          </span>
        </td>
      </tr>
    );
  }
}
