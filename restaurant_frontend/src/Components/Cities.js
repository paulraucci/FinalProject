import React, { Component } from "react";

import Restaurants from "./Resaurants";
import Axios from "axios";
// swtich case - looks at this.state.view
// view == "something" render something
// on click of something we want to change view
class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      showComponent: false,
      chosenCityRestaurants: [],
      view: "showButtons"
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  getView() {
    switch (this.state.view) {
      case "showButtons":
        return this.state.cities.map(city => {
          return (
            <div className="cities">
              <br />
              <button
                onClick={this._onButtonClick}
                key={city.id}
                data-cityid={city.id}
              >
                {city.city}
              </button>
              <br />
            </div>
          );
        });
      case "showRestaurants":
        return (
          <div>
            <Restaurants
              allRestaurants={this.state.chosenCityRestaurants}
              eateries={this.state.cities}
              cityId={this.state.chosenCityId}
            />
          </div>
        );
      default:
        return this.state.cities.map(city => {
          return (
            <div>
              <button
                className="cities"
                onClick={this._onButtonClick}
                key={city.id}
                data-cityid={city.id}
              >
                {city.city}
              </button>
            </div>
          );
        });
    }
  }
  async restaurantFetch(e) {
    const cityId = e.target.dataset.cityid;
    const res = await Axios.get(`http://localhost:3000/cities/${cityId}`);
    this.setState({
      chosenCityRestaurants: res.data.eateries,
      chosenCityId: cityId
    });
    this.setState({
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
        <main>{this.getView()}</main>
      </div>
    );
  }
}

export default Cities;
