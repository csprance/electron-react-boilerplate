/**
 * Name: Stage
 * Type: Component
 * Description:
 */

import React, { Component } from "react";
import styled from "styled-components";

class Stage extends Component {
  render() {
    return (
      <Container>
        This is the stage
      </Container>
    );
  }
}

const Container = styled.div`
    display: flex;
`;

export default Stage;
