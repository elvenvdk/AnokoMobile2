import React, { Component } from 'react';
import { 
    View, 
    Text, 
    ImageBackground,
    TouchableWithoutFeedback 
} from 'react-native';
import { connect } from 'react-redux';
import { ScreenSection } from './common';
import * as actions from '../actions';

class EventsListFeat extends Component {
    renderDescription() {
        const { selectedEventId, eventsData } = this.props;
        const { descriptionContainerStyle, descriptionTextStyle } = styles;
        if(eventsData.id === selectedEventId) {
            return (
                <ScreenSection>
                    <View style={descriptionContainerStyle}>
                        <Text style={descriptionTextStyle}>{eventsData.description}</Text>
                    </View>
                </ScreenSection>
            )
        }
    }
    render() {
        const { id, title, image, description } = this.props.eventsData;
        const { eventTextStyle } = styles;
        console.log(image);
        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={() => this.props.selectEvent(id)}
                >
                    <View>
                        <ScreenSection>
                            <ImageBackground style={{width: 375, height: 300}} source={require('./img/partners/lacigogne.jpg')}>
                                <Text style={eventTextStyle}>{title}</Text>
                            </ImageBackground>
                        </ScreenSection>
                        {this.renderDescription()}
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = {
    eventTextStyle: {
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white' 
    },
    descriptionTextStyle: {
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'black',
        textAlign: 'center'
    },
    descriptionContainerStyle: {
        width: 375,
        height: 150
    }
};

const mapStateToProps = state => {
    return {
        selectedEventId: state.EventDetailId
    }
};

export default connect(mapStateToProps, actions)(EventsListFeat);