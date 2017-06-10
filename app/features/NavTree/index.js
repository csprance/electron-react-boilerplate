/**
 * Name: index
 * Type: Component
 * Description:
 */

import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import Search from './components/Search';
import Tree from './components/Tree';

@connect(store => ({
  navTree: store.navTree
}))
class NavTree extends Component {
  componentDidMount() {
    console.log(this.props.navTree);
  }

  render() {
    return (
      <Container>
        <Search />
        <Tree />
      </Container>
    );
  }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export default NavTree;
