import React, { Component } from "react";
import { connect } from "react-redux";
import { createPlant } from "../actions/plants";

class AddPlant extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeClimate = this.onChangeClimate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.savePlant = this.savePlant.bind(this);
    this.newPlant = this.newPlant.bind(this);

    this.state = {
      id: null,
      title: "",
      climate: "",
      description: "",
      published: false,
      submitted: false,
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeClimate(e) {
    this.setState({
      climate: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  savePlant() {
    const { title, climate, description } = this.state;

    this.props
      .createPlant(title, climate, description)
      .then((data) => {
        this.setState({
          id: data.id,
          title: data.title,
          climate: data.climate,
          description: data.description,
          published: data.published,

          submitted: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newPlant() {
    this.setState({
      id: null,
      title: "",
      climate: "",
      description: "",
      published: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newPlant}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Common Name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="climate">Climate Type</label>
              <input
                type="text"
                className="form-control"
                id="climate"
                required
                value={this.state.climate}
                onChange={this.onChangeClimate}
                name="climate"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <button onClick={this.savePlant} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}


export default connect(null, { createPlant })(AddPlant);