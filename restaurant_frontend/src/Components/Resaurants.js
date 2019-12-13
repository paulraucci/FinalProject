import React, { Component } from "react";
import Axios from "axios";
import RestaurantInfo from "./RestaurantInfo";

class Resaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eateries: [],
      showComponent: false,
      chosenRestaurants: [],
      view: "showRestaurant"
    };
  }
  getView() {
    switch (this.state.view) {
      case "showRestaurants":
        return this.state.eateries.map(eatery => {
          console.log(eatery.id, "something");
          return (
            <div>
              <h1
                className="Restaurants"
                onClick={this._onButtonClick}
                key={eatery.id}
                data-eateryid={eatery.id}
              >
                {eatery.eatery}
              </h1>
            </div>
          );
        });
      case "showRestaurantInfo":
        return <RestaurantInfo allRestaurants={this.state.chosenRestaurants} />;
      default:
        return this.state.eateries.map(eatery => {
          //   console.log(city.id, "something");
          return (
            <div>
              <button
                className="Restaurants"
                onClick={this._onButtonClick}
                key={eatery.id}
                data-eateryid={eatery.id}
              >
                {eatery.eatery}
              </button>
            </div>
          );
        });
    }
  }
  async restaurantFetch(e) {
    const eateryId = e.target.dataset.eateryid;
    const res = await Axios.get(`http://localhost:3000/cities/${eateryId}`);
    this.setState({
      chosenCityRestaurants: res.data.eateries,
      showComponent: true,
      view: "showRestaurants"
    });
  }
  _onButtonClick(e) {
    this.restaurantFetch(e);
  }
  componentDidMount() {
    this.getCities();
  }
  getCities() {
    fetch("http://localhost:3000/cities")
      .then(response => response.json())
      .then(json => this.setState({ cities: json }))
      .catch(error => console.error(error));
  }
  render() {
    return (
      <div>
        <main>
          {this.props.allRestaurants.map(eateries => {
            return (
              <div key={eateries.id}>
                <h1>{eateries.name}</h1>
                {/* <h1>{eateries.location}</h1> */}
                <h1></h1>
              </div>
            );
          })}
        </main>
      </div>
    );
  }
}

export default Resaurants;
