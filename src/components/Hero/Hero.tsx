import "./Hero.scss";
import banner from "../../assets/images/soundbar-product.png";
import { ImageContent } from "../ImageContent";

export interface HeroProps {
  title?: string;
  subtitle?: string;
  model?: string;
  imageUrl?: string;
  imageAlt?: string;
  description?: string;
}

export const HERO_CONTENT = {
  title: "SOUNDBAR",
  subtitle: "COM SUBWOOFER WIRELESS PULSE",
  model: "SP604",
  imageUrl: banner,
  imageAlt: "Soundbar SP804",
};

export const Hero: React.FC<HeroProps> = ({
  title = HERO_CONTENT.title,
  subtitle = HERO_CONTENT.subtitle,
  model = HERO_CONTENT.model,
  imageUrl = HERO_CONTENT.imageUrl,
  imageAlt = HERO_CONTENT.imageAlt,
}) => (
  <section className="hero">
    <div className="hero__container">
      <div className="hero__text-container">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <p className="hero__model">{model}</p>
      </div>

      <div className="hero__image">
        <ImageContent
          className="hero__product-image"
          imageAlt={imageAlt}
          imageUrl={imageUrl}
          isBannerFull
        />
      </div>
    </div>
  </section>
);
