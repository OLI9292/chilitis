import React from 'react';
import styled from "styled-components";

import { colors, lighten10l } from '../../data/colors';

import {
  Button,
  Text,
  TextInput
} from "../Common/index";

const text = {
  email: {
    header: "Enter your email address",
    subheader: "If you don't have a Wordcraft account we'll get one set up",
    placeholder: "Email"
  },
  password: {
    header: "Create a password",
    subheader: "Must be 6 characters or longer",
    placeholder: "Create a password"
  },
  username: {
    header: "Create a username",
    subheader: "Must be 6 characters or longer",
    placeholder: "Create a username",
  }
}

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: text[this.props.step]
    };
  }

  continue() {
    if (nextStep) {
      this.props.navigator.showModal({
        screen: "example.SignUpScreen",
        animationType: "none",
        passProps: {
          step: nextStep
        },
        navigatorStyle: {
          navBarHidden: true
        }
      });
    } else {
      // DONE
    }
  }
  
  render() {
    return (
      <ContainerView>
        <Text.xxl>
          {this.state.text.header}
        </Text.xxl>

        <Text.m
          color={colors.gray}
          margin={"10px 0px"}>
          {this.state.text.subheader}
        </Text.m>

        <TextInput
          margin={"50px 0px 30px 0px"}
          placeholder={this.state.text.placeholder} />

        <Button
          text={"next"}
          margin={"0 auto"}
          color={colors.blue}
          onPress={this.continue.bind(this)} />
      </ContainerView>
    );
  }
}

const ContainerView = styled.View`
  flex: 1;
  width: 92.5%;
  margin: 0 auto;
  margin-top: 40px;
`;
