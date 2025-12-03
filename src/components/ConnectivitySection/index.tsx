import { ImageContent } from "../ImageContent";
import { Section } from "../Section";
import connective from "../../assets/images/connective.png";

import "./Connective.scss";

export const ConnectivitySection: React.FC = () => (
  <Section>
    <ImageContent
      imageUrl={connective}
      imageAlt="Conectividade"
      imagePosition="left"
    >
      <h2 className="title-section">Alta conectividade</h2>
      <p className="subtitle__middle">
        Apresenta muitas possibilidades de conexões como auxiliar, coaxial,
        óptica, HDMI ARC ou porta USB. Use seu aparelho de CD, DVD, videogame,
        entre outros e aproveite o seu momento.
      </p>
      <p className="subtitle__bottom">
        Por meio da conexão Bluetooth 5.0, curta um som intenso direto do seu
        celular, tablet e outros equipamentos de forma rápida.
      </p>
    </ImageContent>
  </Section>
);
