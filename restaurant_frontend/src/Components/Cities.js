import React, { Component } from "react";

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
    };
  }

  async componentDidMount() {
    const response = await axios(url);
    const data = response.data;
    this.setState({
        title: data.title
    })
  }

  render() {
    return <div></div>;
  }
}

export default Cities;
