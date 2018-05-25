import React from 'react';
import styled from "styled-components";
import colors from '../../data/colors';
import { Animated } from "react-native";

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0)
    };
  }

  componentWillReceiveProps(nextProps) {    
    if (this.props.completion !== nextProps.completion) {
      this.animate(nextProps.completion);
    }
  }  

  animate(completion) {
    const toValue = (this.state.width || 0) * completion;
    Animated.timing(this.state.animation, { toValue: toValue, duration: 500 }).start();
  }

  render() {
    return (
      <ContainerView>
        
        <Background
          onLayout={event => this.setState({ width: event.nativeEvent.layout.width })} />
        
        <Animated.View style={[{ width: this.state.animation }]}>
          <Progress />
        </Animated.View>
        
      </ContainerView>
    );
  }
}

const ContainerView = styled.View`
  flex: 8;
  justify-content: center;
  margin: 0px 25px;
`;

const Background = styled.View`
  height: 10px;
  width: 100%;
  border-radius: 5px;
  background-color: ${colors.lightGray};
`

const Progress = styled.View`
  height: 10px;
  margin-top: -10px;
  width: 100%;
  border-radius: 5px;
  background-color: ${colors.yellow};
`
