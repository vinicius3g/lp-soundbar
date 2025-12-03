import { cn } from "../../utils";
import "./Section.scss";

export interface SectionProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  dark?: boolean;
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  dark = false,
  id,
  className,
}) => (
  <section
    className={cn("section", dark && "section--dark", className)}
    id={id}
  >
    <div className="section__container">
      {title && <h2 className="section__title">{title}</h2>}
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
      {children}
    </div>
  </section>
);
