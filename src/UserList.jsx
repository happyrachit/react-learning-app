import React, { Component } from "react";
import Modal from "./Components/Modal";
import EditUserDetails from "./EditUserDetails";
import Users from "./Users";

export default class UserList extends Component {
  constructor(props) {
    super(props); //calling super class's constructor

    this.state = {
      users: [],
      modalShow: false,
    };
  }

  render() {
    return (
      <>
        <h4>User List</h4>
        {this.state.modalShow ? <EditUserDetails /> : ""}

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User</th>
              <th scope="col">Login</th>
              <th scope="col">Node ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              return (
                <Users key={user.id} user={user} onDelete={this.handleDelete} />
              );
            })}
          </tbody>
        </table>

        <Modal />
      </>
    );
  }

  componentDidMount = async () => {
    var response = await fetch("https://api.github.com/users", {
      method: "Get",
    });
    var users = await response.json();
    console.log(users);

    this.setState({ users: users });
  };

  handleDelete = (user) => {
    //get index of selected product
    let allUsers = [...this.state.users];
    let index = allUsers.indexOf(user);
    if (window.confirm("Are you sure to delete")) {
      //delete product based on index
      allUsers.splice(index, 1);

      //update the state of current component(parent component)
      this.setState({
        users: allUsers,
      });
    }
  };

  // showModal = (user) =>{
  //   this.setState({

  //   });
  // }
}
