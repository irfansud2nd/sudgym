import { ReactNode } from "react";

type HorizontalScrollCardProps = {
  itemId: string;
  title: string;
  children: ReactNode;
  className: string;
};

const HorizontalScrollCard = ({
  itemId,
  title,
  children,
  className,
}: HorizontalScrollCardProps) => {
  return (
    <div className={`${className}`} tabIndex={0}>
      {children}
    </div>
  );
};
export default HorizontalScrollCard;
