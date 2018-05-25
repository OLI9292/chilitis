import React from 'react';
import styled from "styled-components";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <ContainerView>
        <Text>
          Coming soon!
        </Text>
      </ContainerView>
    );
  }
}

const ContainerView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  text-align: center;
`;
