import React from "react";
import styled from "styled-components";
import HeaderItem from "../";

export default { title: "HeaderItem" };

export const defaultHeaderItem = () => <HeaderItem titleHederItem="Default" />;

export const selectedHeaderItem = () => (
  <HeaderItem titleHederItem="Selected" selectedHederItem />
);
