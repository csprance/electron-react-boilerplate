/**
 * Name: Search
 * Description: Searches through the NavTree and filters out the results
 */
import React, { Component } from 'react';
import styled from 'styled-components';

import Section from './Section';

class Tree extends Component {
  render() {
    return (
      <Container>
        <Section name="Weapons" />
        <Section name="Clothing" />
        <Section name="Spawners" />
        <Section name="Recipes" />
      </Container>
    );
  }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export default Tree;
