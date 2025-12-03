import { ImageContent } from "../ImageContent";
import { Section } from "../Section";
import soundBar from "../../assets/images/sound01.png";

import "./Wireless.scss";

export const WirelessSection: React.FC = () => (
  <Section>
    <ImageContent
      imageUrl={soundBar}
      imageAlt="Subwoofer Wireless"
      imagePosition="right"
    >
      <h2 className="title-section">Subwoofer Wireless</h2>
      <p className="subtitle">Muito mais marcante e funcional</p>
      <p className="describe-text">
        O Subwoofer Wireless potencializa os tons mais graves amplificando as
        trilhas sonoras e os efeitos de áudio típicos dos filmes de ação,
        deixando-os ainda mais pulsantes. E por não ter fios, sua sala fica mais
        organizada. 
      </p>
    </ImageContent>
  </Section>
);
