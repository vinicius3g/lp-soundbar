import { FeatureCard } from "../FeatureCard";
import { Feature } from "../../types";
import { cn, PRODUCT_FEATURES } from "../../utils";

import './Features.scss';

export interface FeaturesGridProps {
  features: Feature[];
  className?: string;
}


export const FeaturesGrid: React.FC<FeaturesGridProps> = ({
  features = PRODUCT_FEATURES,
  className,
}) => (
  <section className={cn("features-grid", className)}>
    <div className="features-grid__container">
      {features.map((feature, index) => (
        <FeatureCard
          key={`${feature.title}-${index}`}
          icon={feature.icon}
          title={feature.title}
          description={feature.description || undefined}
        />
      ))}
    </div>
  </section>
);
