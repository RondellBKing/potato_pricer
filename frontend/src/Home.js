import React, {Component } from "react";
import {Card} from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
            <Card bg="secondary"  style={{ width: '27rem' }}>
            <Card.Header>Welcome!</Card.Header>
            <Card.Body>
                <Card.Text>
                    This is a mock application created by Rondell King.
                    This web application is the intial solution to the problem below.
                </Card.Text>
            </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Home;
