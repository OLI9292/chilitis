import React, { Component } from 'react';
import styled from "styled-components";
import { colors, lighten10l } from '../../data/colors';

//
// BUTTON
//

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-family: BrandonGrotesque-Bold;
`;

const StyledButton = styled.TouchableHighlight`
  margin: ${props => props._margin || "0px"};
  padding: 10px;
  background-color: ${props => props.color};
  border-radius: 30px;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Button extends Component {
  render() {
    return (
      <StyledButton
        _margin={this.props.margin}
        color={this.props.color}
        underlayColor={lighten10l(this.props.color)}
        onPress={this.props.onPress.bind(this)}>
        <ButtonText>
          {this.props.text.toUpperCase()}
        </ButtonText>
      </StyledButton>
    );
  }
}

exports.Button = Button;

//
// TEXT
//

const Text = styled.Text`
  font-family: BrandonGrotesque-Regular;
  font-size: 16px;
  margin: ${props => props.margin || "0px"};
  color: ${props => props.color || "black"};
`;

const LText = Text.extend`
  font-size: 18px;
`;

const XLText = Text.extend`
  font-size: 20px;
`;

const XXLText = Text.extend`
  font-size: 24px;
`;

exports.Text = {  
  m: Text,
  l: LText,
  xl: XLText,
  xxl: XXLText
}

//
// TEXTINPUT
//

const StyledTextInput = styled.TextInput`
  height: 40;
  borderBottomColor: black;
  borderBottomWidth: 1;
  margin: ${props => props._margin || "0px"};
  font-family: BrandonGrotesque-Regular;
  font-size: 16px;
`;

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledTextInput
        autoFocus={true}
        _margin={this.props.margin}
        placeholder={this.props.placeholder}
        placeholderTextColor={colors.lightGray}
        onChangeText={text => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

exports.TextInput = TextInput;
