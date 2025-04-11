import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import SingleCard from "./SingleCard";
import Meteo from "./Meteo";
import MeteoMilan from "./MeteoMilan";
import MeteoGenova from "./MeteoGenova";
import MeteoCagliari from "./MeteoCagliari";
import MeteoBari from "./MeteoBari";
import MeteoNapoli from "./MeteoNapoli";
import MeteoPalermo from "./MeteoPalermo";
import MeteoAncona from "./MeteoAncona";
import MeteoTorino from "./MeteoTorino";

class NewCard extends Component {
  render() {
    return (
      <Row className=" d-flex justify-content-center mb-2  mt-2">
        <SingleCard
          città="Roma"
          img="https://media.istockphoto.com/id/539115110/it/foto/colosseo-di-roma-e-sole-mattutino-italia.jpg?s=612x612&w=0&k=20&c=ngbBMGVEkJxHsnt4SN7ZuncEnRenq2tFI8V0-zCg4pw="
          meteo={<Meteo />}
        />
        <SingleCard
          città="Milano"
          img="https://www.travelfeliz.com/wp-content/uploads/2023/06/duomo-di-milano.jpeg"
          meteo={<MeteoMilan />}
        />
        <SingleCard
          città="Genova"
          img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/da/c5/20/genova-piazza-de-ferrari.jpg?w=1200&h=-1&s=1"
          meteo={<MeteoGenova />}
        />
        <SingleCard
          città="Cagliari"
          img="https://images.ctfassets.net/oz9qk43ly6yk/3WGIt0Fe4ixO0qSYTjQTNl/2549e35ed0c23377be0ba6ac59ae7db4/cagliari-sas.jpg?w=800&h=500&fit=fill&q=50&fm=jpg&fl=progressive"
          meteo={<MeteoCagliari />}
        />
        <SingleCard
          città="Bari"
          img="https://media.istockphoto.com/id/1475569995/it/foto/vista-panoramica-sul-lungomare-e-sul-porto-di-bari-al-tramonto-puglia-italia.jpg?s=612x612&w=0&k=20&c=A3WaAuDf_vvkyjhdAnvkmdMdUAEfpcaOI8NEtSRYZSY="
          meteo={<MeteoBari />}
        />
        <SingleCard
          città="Napoli"
          img="https://tourismmedia.italia.it/is/image/mitur/20220128135345-napoli-veduta-aerea-campania-gettyimages-1097360124-2?wid=400&hei=400&fit=vfit,1&fmt=webp"
          meteo={<MeteoNapoli />}
        />
        <SingleCard
          città="Palermo"
          img="https://www.italia.it/content/dam/tdh/it/interests/sicilia/palermo/palermo-in-48-ore/media/1600X1000_cosa_vedere_a_palermo_hero.jpg"
          meteo={<MeteoPalermo />}
        />
        <SingleCard
          città="Ancona"
          img="https://upload.wikimedia.org/wikipedia/commons/4/44/Ancona_veduta_14.jpg"
          meteo={<MeteoAncona />}
        />
        <SingleCard
          città="Torino"
          img="https://blog.italotreno.com/wp-content/uploads/2022/03/Torino-iStock-940619078-1140x660.jpg"
          meteo={<MeteoTorino />}
        />
      </Row>
    );
  }
}

export default NewCard;
