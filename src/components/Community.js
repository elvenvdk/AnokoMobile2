import React, { Component } from 'react';
import { 
    View, 
    Text, 
    ListView 
} from 'react-native';
import {
    Header_Top,
    Screen_Member,
    ScreenSection,
    Input
} from './common';


class Community extends Component {
    render() {
        return (
            <Screen_Member>
                <Header_Top headerText="Community" />
                <ScreenSection>
                    <View>
                        <Input placeholder="Search Members" />
                    </View>
                </ScreenSection>
            </Screen_Member>
        );
    }
}


export default Community;