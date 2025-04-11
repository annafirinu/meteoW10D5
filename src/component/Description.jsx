import { Alert } from "react-bootstrap";

const Description = function () {
  return (
    <>
      {["primary"].map((variant) => (
        <Alert key={variant} variant={variant} className="text-center m-3">
          <p>Benvenuto in EpiMeteo!</p>
          <p>
            Qui potrai informarti sulle condizioni meteo delle principali città
            italiane
          </p>
        </Alert>
      ))}

      <h4 className="text-center">
        Clicca sulla città e scopri tutto sul meteo!
      </h4>
    </>
  );
};

export default Description;
