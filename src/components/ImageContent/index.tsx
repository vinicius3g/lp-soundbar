import { cn } from "../../utils";

export interface ImageContentProps {
  imageUrl: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  children?: React.ReactNode;
  className?: string;
  isBannerFull?: boolean;
}

export const ImageContent: React.FC<ImageContentProps> = ({
  imageUrl,
  imageAlt,
  imagePosition = "right",
  children,
  className,
  isBannerFull = false,
}) => {
  const contentClass =
    imagePosition === "right" ? "wireless-content" : "connectivity-content";

  return (
    <div className={cn(contentClass, className)}>
      {imagePosition === "left" && (
        <div className={`${contentClass}__image`}>
          <img src={imageUrl} alt={imageAlt} />
        </div>
      )}
      {!isBannerFull && (
        <div className={`${contentClass}__text`}>{children}</div>
      )}
      {imagePosition === "right" && (
        <div className={`${contentClass}__image`}>
          <img src={imageUrl} alt={imageAlt} />
        </div>
      )}
    </div>
  );
};
