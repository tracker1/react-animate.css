import * as React from "react";
import { AnimatedProps } from "./interfaces";

const defaultProps: Partial<AnimatedProps> = {
  animateOnMount: true,
  isVisible: true,
  animationIn: "fadeIn",
  animationOut: "fadeOut",
  animationInDelay: 0,
  animationOutDelay: 0,
  animationInDuration: 1000,
  animationOutDuration: 1000,
  className: "",
  style: {}
};

const getState = ({
  isVisible,
  animationIn,
  animationOut,
  animationInDuration,
  animationOutDuration,
  animationInDelay,
  animationOutDelay
}) =>
  isVisible
    ? {
        animation: animationIn,
        duration: animationInDuration,
        delay: animationInDelay
      }
    : {
        animation: animationOut,
        duration: animationOutDuration,
        delay: animationOutDelay
      };

export const Animate: React.FunctionComponent<AnimatedProps> = ({
  children
}: AnimatedProps) => (
  <div>
    <h1>ANIMATE TODO:</h1>
    <div>{children}</div>
  </div>
);

Animate.displayName = "Animate";
Animate.defaultProps = defaultProps;
