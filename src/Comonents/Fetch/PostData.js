import React, { Component } from "react";
import {Button} from 'react-bootstrap'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default class PostData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
      e.preventDefault()
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
       console.log(response)
      })
      .catch((errorRes) => {
        console.log(errorRes)
      });
  }

  render() {
    const { userId, title, body } = this.state;
    return (        
      <form onSubmit={this.handleSubmit}>
        <label>User Id</label>
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={this.handleChange}
        />
        <br />
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <br />
        <label>Body</label>
        <input
          type="text"
          name="body"
          value={body}
          onChange={this.handleChange}
        />
        <br />
        <Button type="submit" className="btn btn-danger">Submit</Button>
      </form>
    );
  }
}
