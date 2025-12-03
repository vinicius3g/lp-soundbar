import { cn } from "../../utils";

import "./FeatureCard.scss";

export interface FeatureCardProps {
  icon: any;
  title: string;
  description?: string;
}

export interface FeatureCardComponentProps extends FeatureCardProps {
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardComponentProps> = ({
  icon,
  title,
  description,
  className,
}) => (
  <div className={cn("feature-card", className)}>
    <div className="feature-card__icon">
      <img src={icon} alt={title} />
    </div>
    <h3 className="feature-card__title">{title}</h3>
    {description && <p className="feature-card__description">{description}</p>}
  </div>
);
