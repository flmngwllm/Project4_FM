import React, {Component} from 'react';
import {Container, Header, Tab, TabHeading, Tabs, Text} from "native-base";
import MatchesScreen from "./MatchesScreen.js";
import AppliedJobsScreen from "./AppliedJobsScreen";
import SavedJobsScreen from "./SavedJobsScreen";

class MultiTab extends Component {
    render() {
        return (

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
        );
    }
}

export default MultiTab;