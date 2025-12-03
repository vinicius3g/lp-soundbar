import { Section } from "../Section";
import installation from "../../assets/images/installation.png";
import "./Installation.scss";

export const InstallationSection: React.FC = () => (
  <Section title="Inovador e de fácil instalação" dark={false}>
    <div className="installation-content">
      <p>
        Com o suporte, você pode pendurar a{" "}
        <span>Soundbar com Subwoofer Wireless Pulse</span> na parede da sua casa
        para otimizar espaço ou na estante.
      </p>
      <div className="installation-content__image">
        <img src={installation} alt="Instalação" />
      </div>
    </div>
  </Section>
);
