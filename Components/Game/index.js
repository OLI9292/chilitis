import React from 'react';
import styled from "styled-components";

import { colors, lighten10l } from '../../data/colors';
import data from './Question/data';
import Question from './Question/index';
import ProgressBar from './progressBar';
import Alert from './alert';
import { hintChecker } from "../../lib/helpers";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: data,
      hintCount: 0,
      questionIndex: 0
    };

    this.questionComponent = React.createRef();
  }

  questionDone() {
    this.setState({ questionDone: true });
  }

  nextQuestion() {
    this.setState({
      questionIndex: this.state.questionIndex + 1,
      hintCount: 0,
      questionDone: false
    });
  }

  exitGame() {
    this.props.navigator.dismissModal({
      animationType: "none"
    });
  }

  tappedHint() {
    const { hintCount, questions, questionIndex } = this.state;
    const questionType = questions[questionIndex].type;
    const hint = hintChecker(hintCount, questionType);
    this.questionComponent.current.hint(hint);
    this.setState({ hintCount: hintCount + 1 });
  }

  render() {
    const {
      questions,
      questionIndex,
      questionDone
    } = this.state;

    return (
      <ContainerView>

        <TopContainerView>

          <ExitButton
            underlayColor={"white"}
            onPress={this.exitGame.bind(this)}>
            <Image
              source={require("../../data/images/exit-gray.png")} />
          </ExitButton>

          <ProgressBar
            completion={questionIndex / questions.length} />

          <Alert />
            
        </TopContainerView>

        <Question
          ref={this.questionComponent}
          questionDone={this.questionDone.bind(this)}
          question={questions[questionIndex]} />

        <BottomContainerView>
          
          <Button
            color={questionDone ? colors.green : colors.red}
            underlayColor={colors.red10l}
            onPress={() => questionDone ? this.nextQuestion() : this.tappedHint()}>
            <Text>
              {questionDone ? "CONTINUE" : "HINT"}
            </Text>
          </Button>

        </BottomContainerView>

       </ContainerView>
    );
  }
}

const Button = styled.TouchableHighlight`
  width: 100px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${props => props.color};
`;

const Text = styled.Text`
  color: white;
  font-family: BrandonGrotesque-Bold;
`;

const ExitButton = styled.TouchableHighlight`
  flex: 1;
  height: 25px;
  width: 25px;
`;

const ContainerView = styled.View`
  flex: 1;
  align-self: stretch;
  margin: 20px 20px 0px 20px;
`;

const TopContainerView = styled.View`
  flex: 1;
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const BottomContainerView = styled.View`  
  flex: 1;
  align-items: flex-end;
`

const Image = styled.Image`
  height: 25px;
  width: 25px;
`
