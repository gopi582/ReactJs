import React, { Component } from "react";
import axios from "axios";
import { Table, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class GetData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMessage: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((respose) => {
        this.setState({
          posts: respose.data,
        });
      })
      .catch((respose) => {         
        this.setState({
            errorMessage: "Error while retriving the data",
        });
      });
  }

  render() {
    const { posts, errorMessage } = this.state;
    console.log(errorMessage)
    const hasData = posts.length?posts:null;
    return (
      <div>
        <Container>
          <Row>
            <Col>
              {hasData ?
                <Table striped hover bordered variant="dark">
                  <thead>
                    <tr>
                      <td>Id</td>
                      <td>User ID</td>
                      <td>Title</td>
                      <td>Body</td>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((response) => {
                      return (
                        <tr key={response.id}>
                          <td>{response.id}</td>
                          <td>{response.userId}</td>
                          <td>{response.title}</td>
                          <td>{response.body}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              :<p>{errorMessage}</p>}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default GetData;
