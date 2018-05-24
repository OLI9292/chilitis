import React from 'react';
import styled from "styled-components";
import data from '../Question/data';
import Question from '../Question/index';
import ProgressBar from './progressBar';
import Alert from './alert';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: data,
      questionIndex: 0
    };
  }

  nextQuestion() {
    this.setState({ questionIndex: this.state.questionIndex + 1 });
  }
  
  render() {
    const {
      questions,
      questionIndex
    } = this.state;

    return (
      <ContainerView>

        <TopContainerView>

          <Image
            source={require("../../data/images/exit-gray.png")} />

          <ProgressBar
            completion={questionIndex / questions.length} />

          <Alert />
            
        </TopContainerView>

        <Question
          nextQuestion={this.nextQuestion.bind(this)}
          question={questions[questionIndex]} />

       </ContainerView>
    );
  }
}

const ContainerView = styled.View`
  flex: 1;
  align-self: stretch;
  margin: 60px 20px;
`;

const TopContainerView = styled.View`
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Image = styled.Image`
  flex: 1;
  height: 25px;
  width: 25px;
`