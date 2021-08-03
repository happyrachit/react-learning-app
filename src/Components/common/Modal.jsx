import React, { Component } from "react";

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props,
    };
  }

  render() {
    const { userDetails, handleOnChange } = this.state.data;
    return (
      <>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit User</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <div className="row">
                  <input
                    name="login"
                    className="form form-control"
                    value={userDetails.login}
                    onChange={(event) => {
                      handleOnChange(event.target.value);
                    }}
                  />
                  <button className="btn btn-success">Update</button>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
