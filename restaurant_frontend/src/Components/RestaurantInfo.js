import React, { Component } from 'react';

class RestaurantInfo extends Component {
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

export default RestaurantInfo;