import { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";

const URL =
  "https://api.openweathermap.org/data/2.5/weather?q=ancona&appid=d04847d0ccf1f732058eb7980085731e";

class MeteoAncona extends Component {
  state = {
    previsioni: {},
  };

  getPrevisioni = () => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("previsioni non recuperate");
        }
      })
      .then((data) => {
        console.log("DATA", data);
        this.setState({
          previsioni: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.getPrevisioni();
  };

  render() {
    return (
      <div className="bg-custom p-3 me-5 mt-5 text-black text-center">
        <div className="text-center m-3">
          <h3>{this.state.previsioni.name}</h3>

          <h3 className="m-2">
            {(this.state.previsioni.main?.temp - 273).toFixed(2)}°
          </h3>

          <p className="mt-2">
            MAX:{(this.state.previsioni.main?.temp_max - 273).toFixed(2)}° -
            MIN:
            {(this.state.previsioni.main?.temp_min - 273).toFixed(2)}°
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="m-2 border border-1 border-white detail align-content-center text-center">
            <h5>Umidità</h5>
            <h6>{this.state.previsioni.main?.humidity}</h6>
          </div>
          <div className="m-2 border border-1 border-white detail align-content-center text-center">
            <h5>Pressione</h5>
            <h6>{this.state.previsioni.main?.pressure}</h6>
          </div>
          <div className="m-2 border border-1 border-white detail align-content-center text-center">
            <h5>Visibilità</h5>
            <h6>{this.state.previsioni.visibility}</h6>
          </div>
          <div className="m-2 border border-1 border-white detail align-content-center text-center">
            <h5>Vento</h5>
            <h6>{this.state.previsioni.wind?.speed}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default MeteoAncona;
