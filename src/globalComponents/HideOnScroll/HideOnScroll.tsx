import { useScrollTrigger, Slide } from "@mui/material";
import { ReactElement } from "react";

interface IHideOnScrollProps {
  children: ReactElement<any, any>;
  threshold?: number;
  direction?: "down" | "left" | "right" | "up" | undefined;
}

const HideOnScroll = (props: IHideOnScrollProps) => {
  const { children, threshold = 0, direction = "down" } = props;
  const trigger = useScrollTrigger({
    threshold,
  });

  return (
    <Slide appear={false} direction={direction} in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
