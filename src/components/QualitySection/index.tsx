import { Section } from "../Section";
import "./Quality.scss";

export const QualitySection: React.FC = () => (
  <Section
    className="quality-content-section"
    title="Maior qualidade sonora que estimula os seus sentidos"
    dark={false}
  >
    <div className="quality-content">
      <p>
        A soundbar trabalha com uma impressionante saída de som com potência de{" "}
        <strong>300 W RMS</strong>, com 2.1 canais. São dois alto-falantes
        integrados e som e possibilidade de configurar três modos de áudio:
        música, cinema e notícias. Além disso, você pode emparelhar na sua banda
        preferida com mais realismo e emoção.
      </p>
      <p>
        E quer aprimorar ainda mais os efeitos sonoros, anexe este dispositivo à
        sua TV e transforme a sua sala de estar em uma sala que se adequa em
        distintas realidades e, assim, cria um som virtual aprovado que garante
        maior nível de imersão.
      </p>
    </div>
  </Section>
);
