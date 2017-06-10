/**
 * Name: Section
 * Type: Component
 * Description:
 */

import React, { Component } from "react";
import styled from "styled-components";

class Section extends Component {
  render() {
    return (
      <Container>
        {this.props.name}
      </Container>
    );
  }
}

const Container = styled.div`
    display: flex;
`;

export default Section;
