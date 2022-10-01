import React from "react";
import styled from "styled-components";

import { SpinnerCircularFixed } from "spinners-react";

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 266px;
  height: 400px;
`;

export function BidSpinner() {
  return (
    <SpinnerWrapper>
      <SpinnerCircularFixed
        size={200}
        thickness={100}
        speed={100}
        color="blue"
        secondaryColor="grey"
      />
    </SpinnerWrapper>
  );
}

export function SmallSpinner() {
  return (
    <SpinnerWrapper>
      <SpinnerCircularFixed
        size={100}
        thickness={100}
        speed={100}
        color="blue"
        secondaryColor="grey"
      />
    </SpinnerWrapper>
  );
}
