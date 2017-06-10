/**
 * Name: Search
 * Description: Searches through the NavTree and filters out the results
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';

class Search extends Component {
  render() {
    return (
      <Container>
        <TextField floatingLabelText={'Filter'} name={'search'}/>
      </Container>
    );
  }
}

const Container = styled.div`
    display: flex;
`;

export default Search;
