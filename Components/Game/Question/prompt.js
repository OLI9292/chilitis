import React from 'react';
import styled from "styled-components";
import colors from '../../../data/colors';
import eq from "lodash/eq";

const HIGHLIGHT_IMMEDIATELY = [
  "defToOneRoot",
  "defToAllRoots",
  "rootInWordToDef"
];

export default class Prompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: false,
      promptType: "normal"
    }
  } 
  
  componentDidMount() {
    this.checkForHint(this.props.questionType);
  }

  componentWillReceiveProps(nextProps) {
    if (!eq(this.props.data, nextProps.data)) {
      this.setState({ promptType: "normal" });
      this.checkForHint(nextProps.questionType);
    }
  }

  checkForHint(questionType) {
    const highlight = HIGHLIGHT_IMMEDIATELY.includes(questionType);
    this.highlightPrompt(highlight);
  }

  easyPrompt() {
    this.setState({ highlight: true, promptType: "easy" });
  }

  highlightPrompt(highlight = true) {
    this.setState({ highlight });
  }

  render() {
    const {
      highlight,
      promptType
    } = this.state;

    const text = (data, i) => <Text
      key={i}
      highlight={highlight && data.highlight}>
      {data.value === "<br />" ? "\n" : data.value}
    </Text>;

    return (
      <ContainerView>
        <Text>
          {this.props.data[promptType].map((d, i) => text(d, i))}
        </Text>
      </ContainerView>
    );
  }
}

const ContainerView = styled.View`
  flex: 2;
  justify-content: center;
`;

const Text = styled.Text`
  text-align: center;
  color: ${props => props.highlight ? colors.yellow : "black"};
`;
