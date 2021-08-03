import React, { Component } from "react";
import Modal from "../common/Modal";
import TableHeader from "../common/TableHeader";
import UserList from "../user/UserList";

export default class Users extends Component {
  constructor(props) {
    super(props); //calling super class's constructor

    this.state = {
      tableHeader: ["#", "User", "Login", "Node ID","Action"],
      users: [],
      editUserDetails: {},
    };
  }

  render() {
    const {tableHeader,users,editUserDetails} = this.state;
    return (
      <>
        <h4>Users</h4>
        <table className="table">
          <TableHeader tableHeader={tableHeader}></TableHeader>

          <tbody>
            {users.map((user) => {
              return (
                <UserList
                  key={user.id}
                  user={user}
                  onDelete={this.handleDelete}
                  onEdit={this.handleEdit}
                />
              );
            })}
          </tbody>
        </table>

        <Modal userDetails={editUserDetails} handleOnChange={this.handleOnChange} />
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

  handleEdit = (user) => {
    this.setState({
      editUserDetails : user,
    })
  };

  handleOnChange(login){
    console.log(login);
  }

}
