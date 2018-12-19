import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native'
import {
    Container,
    Header,
    Item,
    Input,
    Icon,
    Button,
    Text,
    List,
    ListItem,
    Left,
    Body,
    Right,
    Thumbnail,
    Content, Tabs, Tab, TabHeading
} from 'native-base';
import {Box} from 'react-native-design-utility'

import Expo from "expo";
import MatchesScreen from "./MatchesScreen";
import AppliedJobsScreen from "./AppliedJobsScreen";
import SavedJobsScreen from "./SavedJobsScreen";
import ListItems from "./ListItems";

export default class SearchBar extends Component {


constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>


           <Tabs>
                     <Tab heading={<TabHeading><Text>Matches</Text></TabHeading>}>
                         <MatchesScreen/>
                     </Tab>
                     <Tab heading={<TabHeading><Text>Applied</Text></TabHeading>}>
                         <AppliedJobsScreen/>
                     </Tab>
                     <Tab heading={<TabHeading><Text>Saved</Text></TabHeading>}>
                         <SavedJobsScreen/>
                     </Tab>
                 </Tabs>
      </Container>





    );
  }
}