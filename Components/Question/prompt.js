import React from 'react';
import styled from "styled-components";
import colors from '../../data/colors';

export default class Prompt extends React.Component {
  constructor(props) {
    super(props);
  }  
  render() {
    const text = (data, i) => <Text
      key={i}
      highlight={data.highlight}>
      {data.value}
    </Text>;

    return (
      <ContainerView>
        <Text>
          {this.props.data.map((d, i) => text(d, i))}
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
