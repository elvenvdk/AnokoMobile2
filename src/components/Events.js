import React, { Component } from 'react';
import { 
    View, 
    Text, 
    ListView,
    Image,
    ScrollView,
    TouchableWithoutFeedback 
} from 'react-native';
import { connect } from 'react-redux';
import { 
    Screen_Member, 
    ScreenSection,
    Header_Top,
    Header_Mid,
    Header_Small,
    EventsMidMenu 
} from './common';
import EventsListFeat from './EventsListFeat';
import EventsListMain from './EventsListMain';

class Events extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });
        this.dataSource = ds.cloneWithRows(this.props.EventsFeat)
    }
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });
        this.dataSource = ds.cloneWithRows(this.props.EventsMain)
    }
    renderFirstRow(eventsData) {
        return (
            <EventsListFeat eventsData={eventsData} />
        );
    }
    renderSecondRow(eventsData) {
        return (
            <EventsListMain eventsData={eventsData} />
        )
    }
    render() {
        return (
            <View>
                <Screen_Member>
                    <ScreenSection>
                        <Header_Top headerText="Events" />
                    </ScreenSection>
                    <ScrollView>
                        <ScreenSection>
                            <Header_Mid headerMidText="Plans" />
                        </ScreenSection>
                        <ScreenSection>
                            <Header_Small headerText="Featured Events" />
                        </ScreenSection>
                        <ScreenSection>
                            <ListView
                                horizontal
                                dataSource={this.dataSource}
                                renderRow={this.renderFirstRow}
                            />
                        </ScreenSection>
                        <EventsMidMenu />
                        <ScreenSection>
                            <ListView
                                dataSource={this.dataSource}
                                renderRow={this.renderSecondRow}
                            />
                        </ScreenSection>
                    </ScrollView>
                </Screen_Member>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        EventsFeat: state.EventFeat,
        EventsMain: state.EventMain
    };
};


export default connect(mapStateToProps)(Events);