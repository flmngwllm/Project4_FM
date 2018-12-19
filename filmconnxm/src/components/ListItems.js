import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class ListItems extends Component {
  render() {
    return (
      <Container>
        <Header />

        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Felement_origin_min_pic%2F16%2F10%2F04%2F1957f39329a1c94.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fsmall-dog_954130.html&docid=8HlUua3rOwczLM&tbnid=XbmFv0YUjSASMM%3A&vet=10ahUKEwiX073FqazfAhUuT98KHeHIC60QMwhaKAAwAA..i&w=650&h=431&bih=705&biw=1157&q=small%20dog%20png&ved=0ahUKEwiX073FqazfAhUuT98KHeHIC60QMwhaKAAwAA&iact=mrc&uact=8' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>

    );
  }
}