import React from 'react';
import styled from "styled-components";
import extend from "lodash/extend";
import { Animated } from "react-native";

import data from './data';
import Prompt from './prompt';
import Answer from './answer';
import Choices from './choices';
import Interlude from '../Interlude/index';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      opacityAnimation: new Animated.Value(1)
    };

    this.promptComponent = React.createRef();
    this.choicesComponent = React.createRef();
  }

  componentDidMount() {
    this.reset(this.props.question);
  }

  componentWillUnmount() {
    
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.question !== nextProps.question) {
      Animated.timing(this.state.opacityAnimation, { toValue: 0, duration: 500 }).start();
      this.nextQuestionTimeout = setTimeout(() => {  
        this.reset(nextProps.question);
        Animated.timing(this.state.opacityAnimation, { toValue: 1, duration: 500 }).start();
      }, 500);
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
        this.props.questionDone();
      }
    }     
  }

  hint(hint) {
    switch (hint) {
      case "highlightPrompt": 
        return this.promptComponent.current.highlightPrompt()
      case "easyPrompt": 
        return this.promptComponent.current.easyPrompt()
      case "glowAnswer": 
        return this.choicesComponent.current.glowAnswer();
      case "giveAnswer": 
        return this.choicesComponent.current.giveAnswer();        
    }
  }
  
  render() {
    if (!this.state.question) { 
      return null;
    }

    const {
      prompt,
      answer,
      choices,
      type
    } = this.state.question;

    return (
      <Animated.View style={[{ opacity: this.state.opacityAnimation, flex: 8, alignSelf: "stretch" }]}>
        <Prompt
          ref={this.promptComponent}
          questionType={type}
          data={prompt} />
        
        <Answer
          data={answer}
          done={this.state.done} />

        {
          this.state.done
          ?
          <Interlude />
          :
          <Choices
            ref={this.choicesComponent}
            data={choices}
            answer={answer}
            guessed={this.guessed.bind(this)} />
        }
       </Animated.View>
    );
  }
}
