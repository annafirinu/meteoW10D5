import { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import Meteo from "./Meteo";

class SingleCard extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col xs={12} md={6} className="m-4">
        <Card className="d-flex justify-content-center">
          <img
            variant="top"
            src={this.props.img}
            alt={this.props.città}
            className="card-img-top card-img-fixed card-img-top"
          />
          <Card.Body className="d-flex flex-column fixed-card-body">
            <Card.Title className="text-center">{this.props.città}</Card.Title>

            <Button
              className="mt-2"
              variant="primary"
              onClick={() => {
                this.setState({
                  selected: !this.state.selected,
                });
              }}
            >
              Meteo
            </Button>
            <div>{this.state.selected === true && this.props.meteo}</div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleCard;
