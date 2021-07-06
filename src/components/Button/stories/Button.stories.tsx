import React from "react";
import styled from "styled-components";
import Button from "../";

const CustomButton = styled(Button).attrs({
  style: {
    backgroundColor: "lightblue",
  },
})``;

export default { title: "Button" };

export const defaultButton = () => (
  <Button text="Click Me" arrowRight={true} onClick={() => {}} />
);

export const customButton = () => (
  <CustomButton text="Click Me" onClick={() => {}} />
);

export const arrowRightButton = () => (
  <Button arrowRight={true} onClick={() => {}} />
);

export const arrowLeftButton = () => (
  <Button arrowLeft={true} onClick={() => {}} />
);

export const withIconButton = () => (
  <Button text="Click Me" arrowRight={true} onClick={() => {}} />
);
