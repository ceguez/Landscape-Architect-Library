import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePlant, deletePlant } from "../actions/plants";
import PlantDataService from "../services/plant.service";

class Plant extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeClimate = this.onChangeClimate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getPlant = this.getPlant.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.removePlant = this.removePlant.bind(this);

    this.state = {
      currentPlant: {
        id: null,
        title: "",
        climate: "",
        description: "",
        published: false,
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getPlant(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPlant: {
          ...prevState.currentPlant,
          title: title,
        },
      };
    });
  }

  onChangeClimate(e) {
    const climate = e.target.value;

    this.setState((prevState) => ({
      currentPlant: {
        ...prevState.currentPlant,
        climate: climate,
      },
    }));
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentPlant: {
        ...prevState.currentPlant,
        description: description,
      },
    }));
  }

  getPlant(id) {
    PlantDataService.get(id)
      .then((response) => {
        this.setState({
          currentPlant: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateStatus(status) {
    var data = {
      id: this.state.currentPlant.id,
      title: this.state.currentPlant.title,
      climate: this.state.currentPlant.climate,
      description: this.state.currentPlant.description,
      published: status,
    };

    this.props
      .updatePlant(this.state.currentPlant.id, data)
      .then((reponse) => {
        console.log(reponse);

        this.setState((prevState) => ({
          currentPlant: {
            ...prevState.currentPlant,
            published: status,
          },
        }));

        this.setState({ message: "The status was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateContent() {
    this.props
      .updatePlant(this.state.currentPlant.id, this.state.currentPlant)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Plant was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  removePlant() {
    this.props
      .deletePlant(this.state.currentPlant.id)
      .then(() => {
        this.props.history.push("/plants");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentPlant } = this.state;

    return (
      <div>
        {currentPlant ? (
          <div className="edit-form">
            <h4>Plant</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Common Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentPlant.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="climate">Climate</label>
                <input
                  type="text"
                  className="form-control"
                  id="climate"
                  value={currentPlant.climate}
                  onChange={this.onChangeClimate}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentPlant.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentPlant.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentPlant.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateStatus(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateStatus(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.removePlant}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateContent}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Plant...</p>
          </div>
        )}
      </div>
    );
  }
}


export default connect(null, { updatePlant, deletePlant })(Plant);