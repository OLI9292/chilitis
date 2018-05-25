import React from 'react';
import styled from "styled-components";
import colors from '../../../data/colors';

export default class Interlude extends React.Component {
  constructor(props) {
    super(props);
  }  

  render() {
    return (
      <ContainerView>
      </ContainerView>
    );
  }
}

const ContainerView = styled.View`
  flex: 3;
  flex-direction: row;
  align-items: center;
`;
