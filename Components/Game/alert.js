import React from 'react';
import styled from "styled-components";
import { colors, lighten10l } from '../../data/colors';
import { Animated } from "react-native";

export default class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0)
    };
  }

  componentWillReceiveProps(nextProps) {    
    if (this.props !== nextProps) {
    }
  }  

  render() {
    return (
      <ContainerView>

      </ContainerView>
    );
  }
}

const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
`;
