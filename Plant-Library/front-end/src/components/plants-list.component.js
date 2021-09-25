import React, { Component } from "react";
import { connect } from "react-redux";
import { retrievePlants, findPlantsByTitle, deleteAllPlants } from "../actions/plants";
import { Link } from "react-router-dom";

class PlantsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle  = this.onChangeSearchTitle .bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActivePlant = this.setActivePlant.bind(this);
    this.findByTitle= this.findByTitle.bind(this);
    this.removeAllPlants = this.removeAllPlants.bind(this);

    this.state = {
      currentPlant: null,
      currentIndex: -1,
      searchClimate: "",
    };
  }

  componentDidMount() {
    this.props.retrievePlants();
  }

  onChangeSearchTitle (e) {
    const searchTitle  = e.target.value;

    this.setState({
      searchTitle : searchTitle,
    });
  }

  refreshData() {
    this.setState({
      currentPlant: null,
      currentIndex: -1,
    });
  }

  setActivePlant(plant, index) {
    this.setState({
      currentPlant: plant,
      currentIndex: index,
    });
  }

  removeAllPlants() {
    this.props
      .deleteAllPlants()
      .then((response) => {
        console.log(response);
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  findByTitle() {
    this.refreshData();

    this.props.findPlantsByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle , currentPlant, currentIndex } = this.state;
    const { plants } = this.props;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Title"
              value={searchTitle }
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.findByTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>List of Plants</h4>

          <ul className="list-group">
            {plants &&
              plants.map((plant, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActivePlant(plant, index)}
                  key={index}
                >
                  {plant.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllPlants}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentPlant ? (
            <div>
              <h4>Plant</h4>
              <div>
                <label>
                  <strong>Common Name:</strong>
                </label>{" "}
                {currentPlant.title}
              </div>
              <div>
                <label>
                  <strong>Climate:</strong>
                </label>{" "}
                {currentPlant.climate}
              </div>

              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentPlant.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentPlant.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/plants/" + currentPlant.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Plant...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
  };
};

export default connect(mapStateToProps, { retrievePlants, findPlantsByTitle, deleteAllPlants })(PlantsList);