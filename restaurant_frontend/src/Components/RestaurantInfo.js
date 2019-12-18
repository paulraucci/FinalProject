import React, { Component } from "react";

class RestaurantInfo extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <main>
          {this.props.restaurant.map(eateries => {
            return (
              <div key={eateries.id}>
                <h2>{eateries.name}</h2>
                <h3>{eateries.cuisine}</h3>
                <h3>Location: {eateries.location}</h3>
                <h3>Rating: {eateries.rating}</h3>
              </div>
            );
          })}
        </main>
      </div>
    );
  }
}

export default RestaurantInfo;
