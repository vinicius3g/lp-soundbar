import { Section } from "../Section";
import "./Warranty.scss";
export const WarrantySection: React.FC = () => (
  <Section title="Garantia" dark={false}>
    <div className="warranty-content">
      <p>
        A Soundbar com Subwoofer Wireless conta com a alta qualidade da marca
        Pulse e disponibiliza <span>3 anos de garantia</span> contra defeitos de
        fabricação.
      </p>
    </div>
  </Section>
);
