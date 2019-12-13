import React, { Component } from "react";
// import axios from "axios";

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      city: {}
    };
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
          {this.state.cities.map(city => {
            return (
              <div>
                <button className="cities" key={city._id}>
                  {city.city}
                </button>
                {/* <h2>{city.location}</h2> */}
              </div>
            );
          })} 
        </main>
      </div>
    );
  }
}

export default Cities;
