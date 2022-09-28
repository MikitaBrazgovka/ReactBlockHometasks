import React from "react";
import styled from "styled-components";

import { SpinnerCircularFixed } from "spinners-react";

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function BidSpinner() {
  return (
    <SpinnerWrapper>
      <SpinnerCircularFixed
        size={200}
        thickness={100}
        speed={100}
        color="#36ad47"
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
        color="#36ad47"
        secondaryColor="grey"
      />
    </SpinnerWrapper>
  );
}
