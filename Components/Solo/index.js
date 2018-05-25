import React from 'react';
import styled from "styled-components";

import colors from '../../data/colors';

export default class Solo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          underlayColor={colors.blue10l}
          onPress={this.startGame.bind(this)}>
          <Text>
            PLAY DEMO
          </Text>
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

const Text = styled.Text`
  color: white;
`;

const Button = styled.TouchableHighlight`
  margin: 10px;
  padding: 10px;
  background-color: ${colors.blue};
  border-radius: 30px;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
