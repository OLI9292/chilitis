import React from 'react';
import styled from "styled-components";
import { colors, lighten10l } from '../../../data/colors';
import { Animated } from "react-native";

export default class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promptType: "normal",
      animation: new Animated.Value(5)
    };
  }

  componentWillReceiveProps(nextProps) {    
    if (this.props.done !== nextProps.done) {
      this.animateAnswerSpaces(nextProps.done);
    }
  }

  animateAnswerSpaces(done) {
    const [toValue, duration] = done ? [0, 100] : [5, 0];
    Animated.timing(this.state.animation, { toValue: toValue, duration: duration }).start();
  }
    
  render() {
    const answerSpace = (data, i) => <Animated.View 
      style={[{ paddingLeft: this.state.animation, paddingRight: this.state.animation }]}
      key={i}>
      <Text
        missing={data.missing}>
        {data.value.toUpperCase()}
      </Text>
      <WhiteLine
        missing={data.missing} />
    </Animated.View>;
    
    return (
      <ContainerView>
        {this.props.data.map((d, i) => answerSpace(d, i))}
      </ContainerView>
    );
  }
}

const ContainerView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 24;
  font-family: BrandonGrotesque-Bold;
  opacity: ${props => props.missing ? 0 : 1};
`;

const WhiteLine = styled.View`
  background-color: ${props => props.missing ? "black" : colors.green};
  height: 4px;
  border-radius: 2px;
  margin: 0px -2px;
`;
