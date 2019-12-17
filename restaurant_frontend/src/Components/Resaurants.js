import React, { Component } from "react";
import Axios from "axios";
import RestaurantInfo from "./RestaurantInfo";

class Resaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eateries: [],
      showComponent: false,
      chosenRestaurant: [],
      view: "showRestaurants"
    };
  }
  getView() {
    switch (this.state.view) {
      case "showRestaurants":
        return this.state.eateries.map(eatery => {
          console.log(eatery.id, "something");
          return (
            <div className="Restaurants">
              <h1
                className="Restaurants"
                onClick={this._onButtonClick}
                key={eatery.id}
                data-eateryid={eatery.id}
              >
                {eatery.eatery}
              </h1>
              <h1>from Resaurants.js</h1>
            </div>
          );
        });
      case "showRestaurantInfo":
        return <RestaurantInfo allRestaurants={this.state.chosenRestaurant} />;
      default:
        return this.state.eateries.map(eatery => {
          console.log(eatery.id, "something");
          return (
            <main>
              {this.props.allRestaurants.map(eateries => {
                return (
                  <div key={eateries.id}>
                    <h1>{eateries.name}</h1>
                    <h1> from Restaurant.js</h1>
                  </div>
                );
              })}
            </main>
          );
        });
    }
  }
  async restaurantFetch(e) {
    const cityId = e.target.dataset.eateryid;
    const res = await Axios.get(
      `http://localhost:3000/cities/${cityId}/eateries`
    );
    this.setState({
      chosenRestaurant: res.data.eateries,
      showComponent: true,
      view: "showRestaurantInfo"
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
    return <div>{this.getView()}</div>;
  }
}

export default Resaurants;
