import React from 'react';
import styled from "styled-components";

import { colors, lighten10l } from '../../data/colors';
import { Button } from '../Common/index';

export default class Solo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.navigator.showModal({
      screen: "example.WelcomeScreen",
      animationType: "none",
      navigatorStyle: {
        navBarHidden: true
      }
    });
  }

  startGame() {
    this.props.navigator.showModal({
      screen: "example.GameScreen",
      animationType: "none",
      navigatorStyle: {
        navBarHidden: true
      }
    });
  }
  
  render() {
    return (
      <ContainerView>
        <Button
          text={"play demo"}
          color={colors.blue}
          onPress={this.startGame.bind(this)}>
        </Button>
      </ContainerView>
    );
  }
}

const ContainerView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
