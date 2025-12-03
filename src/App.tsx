import "./styles/main.scss";
import { Hero } from "./components/Hero/Hero";
import { Section } from "./components/Section";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { QualitySection } from "./components/QualitySection";
import { WirelessSection } from "./components/WirelessSection";
import { WarrantySection } from "./components/WarrantySection";
import { PRODUCT_FEATURES } from "./utils";
import { ConnectivitySection } from "./components/ConnectivitySection";
import { InstallationSection } from "./components/InstallationSection";

import soundbar from "./assets/images/soundbar-waves.png";
import { ImageContent } from "./components/ImageContent";

const App = () => {
  return (
    <div className="app">
      <Hero />
      <Section>
        <p className="intro-text">
          Com a Soundbar com <span className="emphasis-text">Subwoofer Wireless Pulse</span> Subwoofer
          Wireless Pulse, você vai levar para a sua sala o impactante som do
          cinema de forma prática, sem ocupar espaço e sem cabos. Reúna a
          família e amigos e desfrute!
        </p>
      </Section>

      <Section title="Soundbar com Subwoofer Wireless Pulse" dark={true}>
        <p className="wireless-text">Transforme um simples som em uma potência.</p>
      </Section>

      <Section>
        <p className="section-text-third">
          A Soundbar e o Subwoofer Wireless Pulse oferecem, juntos, uma
          experiência de áudio profunda e poderosa. Um efeito que envolve todo o
          ambiente!
        </p>

        <p className="section-text-third__subtext">
          Sem complicações! Conecte sua Soundbar com Subwoofer Wireless Pulse,
          por meio das conexões bluetooth, auxiliar, coaxial, óptica e HDMI ARC,
          para assistir filmes, séries e outros tipos de entretenimento ou
          escute suas músicas preferidas pela porta USB. A Soundbar com
          Subwoofer Wireless Pulse é discreta, moderna e combina com qualquer
          decoração. Pulse"
        </p>
      </Section>

      <FeaturesGrid features={PRODUCT_FEATURES} />
      <QualitySection />

      <section className="middle_banner_section">
        <ImageContent
          className="middle_banner"
          imageAlt="spund-bar image"
          imageUrl={soundbar}
          isBannerFull
        />
      </section>

      <WirelessSection />
      <ConnectivitySection />
      <InstallationSection />
      <WarrantySection />
    </div>
  );
};

export default App;
