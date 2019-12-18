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
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  getView() {
    switch (this.state.view) {
      case "showRestaurants":
        return this.props.allRestaurants.map(eatery => {
          return (
            <div>
              {/* className="Restaurants"> */}
              <h1
                className="Restaurants"
                onClick={this._onButtonClick}
                key={eatery.id}
                data-eateryid={eatery.id}
              >
                {eatery.name}
              </h1>
            </div>
          );
        });
      case "showRestaurantInfo":
        return (
          <RestaurantInfo
            allRestaurants={this.state.chosenRestaurant}
            restaurant={this.state.chosenRestaurant}
          />
        );
      default:
        return this.state.eateries.map(eatery => {
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
    const eateryid = e.target.dataset.eateryid;
    let cityId = this.props.cityId;
    const res = await Axios.get(
      `http://localhost:3000/cities/${cityId}/eateries/${eateryid}`
    );
    this.setState({
      chosenRestaurant: res.data,
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
