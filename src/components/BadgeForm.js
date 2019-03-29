import React from "react";

class BadgeForm extends React.Component {
  state = {};
  handleChange = e => {
    // console.log({
    //   value: e.target.value,
    //   name: e.target.name
    // });

    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = e => {
    console.log("Button was Clicked");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="lasttName"
              value={this.state.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="email"
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.state.twitter}
            />
          </div>
          <div className="form-group">
            <label>Jop Title</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="jopTitle"
              value={this.state.jopTitle}
            />
          </div>
          <button
            type="submit"
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
