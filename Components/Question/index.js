import React from 'react';
import styled from "styled-components";
import extend from "lodash/";

import data from './data';
import Prompt from './prompt';
import Answer from './answer';
import Choices from './choices';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      promptType: "normal"
    };
  }

  componentDidMount() {
    this.reset(this.props.question);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.question !== nextProps.question) {
      this.reset(nextProps.question);
    }
  }

  reset(question) {
    this.setState({
      question: question,
      done: false
    });
  }

  guessed(correct, done, answer) {  
    if (correct) {
      
      const question = this.state.question
      question.answer = answer;
      this.setState({ question: question, done: done });
      
      if (done) {
        this.nextQuestionTimeout = setTimeout(() => this.props.nextQuestion(), 500);
      }
    }     
  }
  
  render() {
    if (!this.state.question) { 
      return null;
    }

    const {
      prompt,
      answer,
      choices
    } = this.state.question;

    return (
      <ContainerView>
        <Prompt
          data={prompt[this.state.promptType]} />
        
        <Answer
          data={answer}
          done={this.state.done} />

        <Choices
          data={choices}
          answer={answer}
          guessed={this.guessed.bind(this)} />
       </ContainerView>
    );
  }
}

const ContainerView = styled.View`
  flex: 8;
  align-self: stretch;
`;
