import React from 'react';
import styled from "styled-components";
import chunk from "lodash/chunk";
import { Animated } from "react-native";
import findIndex from "lodash/findIndex";
import find from "lodash/find";
import shuffle from "lodash/shuffle";

import { colors, lighten10l } from '../../../data/colors';

export default class Choices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHint: false,
      hintAnimation: new Animated.Value(0)
    }
  }  

  componentDidMount() {
    this.setupButtonLayout(this.props.data.length);
    this.setupAutoHint();
  }

  componentWillUnmount() {
    clearTimeout(this.autohintTimeout);
    clearTimeout(this.glowAnswerTimeout);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setupButtonLayout(nextProps.data.length);
      this.setupAutoHint();
    }
  }

  glowAnswer(giveAnswer = false) {
    const answer = find(shuffle(this.props.answer), d => d.missing).value.toLowerCase();
    this.setState({ glowAnswer: answer });
    this.glowAnswerTimeout = setTimeout(() => this.setState({ glowAnswer: null }), 1000);
    if (giveAnswer) { this.tappedChoice(true, answer); }
  }

  giveAnswer() {
    this.glowAnswer(true);
  }

  isCorrect(value) {
    return this.props.answer
      .filter(d => d.missing)
      .map(d => d.value.toLowerCase())
      .includes(value.toLowerCase());
  }

  setupButtonLayout(buttonCount) {
    const isSpellQuestion = [9, 12].includes(buttonCount);
    this.setState({ isSpellQuestion });
  }

  setupAutoHint() {
    this.autohintTimeout = setTimeout(() => {
      Animated.timing(this.state.hintAnimation, { toValue: 1, duration: 250 }).start();
    }, 2000);
  }

  tappedChoice(correct, value) {
    const answer = this.props.answer;  
    const index = findIndex(answer, d => d.value === value.toLowerCase() && d.missing);
    if (index > -1) { answer[index].missing = false; }
    const done = !answer.map(d => d.missing).includes(true);      
    this.props.guessed(correct, done, answer);
  }

  render() {
    const {
      glowAnswer,
      hintAnimation,
      isSpellQuestion
    } = this.state;

    const choice = data => {
      const correct = this.isCorrect(data.value);
      const color = glowAnswer === data.value.toLowerCase() ? colors.green : colors.blue;

      return <Button
        isSpellQuestion={isSpellQuestion}
        color={color}
        key={data.value}
        underlayColor={correct ? colors.green : colors.red}
        onPress={() => this.tappedChoice(correct, data.value)}>
        <TextContainer>
          <Text>
            {data.value}
          </Text>
          {
            data.hint &&
            <Animated.Text style={[{ opacity: hintAnimation, color: "white", textAlign: "center" }]}>
              {data.hint}
            </Animated.Text>
          }
        </TextContainer>
      </Button>;
    }

    return (
      <ContainerView>
        {
          chunk(this.props.data, 3)
            .map((group, i) => <SplitView key={i}>{group.map((d, i) => choice(d, i))}</SplitView>)
        }
      </ContainerView>
    );
  }
}

const ContainerView = styled.View`
  flex: 3;
  flex-direction: row;
  align-items: center;
`;

const SplitView = styled.View`
  flex: 1;  
  flex-direction: column;
`;

const Button = styled.TouchableHighlight`
  margin: 10px;
  padding: 10px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  border-radius: ${props => props.isSpellQuestion ? 10 : 50};
`;

const TextContainer = styled.View`
`;

const Text = styled.Text`
  color: white;
  text-align: center;
  font-family: BrandonGrotesque-Bold;
`;
