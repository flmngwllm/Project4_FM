import React, {Component} from 'react';
import {Container, Header, Tab, TabHeading, Tabs, Text, StyleProvider} from "native-base";
import MatchesScreen from "./MatchesScreen.js";
import AppliedJobsScreen from "./AppliedJobsScreen";
import SavedJobsScreen from "./SavedJobsScreen";
import material from "../../native-base-theme/variables/material"
import getTheme from '../../native-base-theme/components';






class MultiTab extends Component {
    render() {
        return (
    <StyleProvider style={getTheme(material)}>
        <Container>
                 <Header hasTabs/>
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
        </StyleProvider>
        );
    }
}



export default MultiTab;