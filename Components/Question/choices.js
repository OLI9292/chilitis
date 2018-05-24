import React from 'react';
import styled from "styled-components";
import chunk from "lodash/chunk";
import colors from '../../data/colors';

export default class Choices extends React.Component {
  constructor(props) {
    super(props);
  }  

  tappedChoice(correct, value) {
    const answer = this.props.answer.map(d => d.value.toLowerCase() === value 
      ? { value: d.value, missing: false } : d
    );      
    const done = !answer.map(d => d.missing).includes(true);      
    this.props.guessed(correct, done, answer);
  }

  render() {
    const choice = data => {
      const correct = this.props.answer
        .filter(d => d.missing)
        .map(d => d.value.toLowerCase())
        .includes(data.value.toLowerCase());

      return <Button
        key={data.value}
        underlayColor={correct ? colors.green : colors.red}
        onPress={() => this.tappedChoice(correct, data.value.toLowerCase())}>
        <Text>
          {data.value}
        </Text>
      </Button>;
    }

    const [leftChoices, rightChoices] = chunk(this.props.data, 3);
    
    return (
      <ContainerView>
        <SplitView>
          {leftChoices.map(choice)}
        </SplitView>
        <SplitView>
          {rightChoices.map(choice)}
        </SplitView>
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
  background-color: ${colors.blue};
  border-radius: 5;
`;

const Text = styled.Text`
  color: white;
  text-align: center;
`;
