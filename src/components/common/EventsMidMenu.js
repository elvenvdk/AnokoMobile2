import React from 'react';
import { 
    View, 
    Text,
    ScrollView, 
    TouchableHighlight, 
    ImageBackground
} from 'react-native';
import { ScreenSection } from '.';


const EventsMidMenu = () => {
    const { 
        midMenuStyle,
        midMenuButtonStyle,
        midMenuTextStyle,
        overlayStyle
    } = styles;
    return (
        <ScreenSection>
        <View style={midMenuStyle}>
            <TouchableHighlight>
                <View>
                    <ImageBackground style={midMenuButtonStyle} source={require('../img/eventsTodayIcon.png')}>
                        <View style={overlayStyle}>
                            <Text style={midMenuTextStyle}>Today</Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableHighlight>
            <TouchableHighlight>
                <View>
                    <ImageBackground style={midMenuButtonStyle} source={require('../img/eventsTomorrowIcon.png')}>
                        <View style={overlayStyle}>
                            <Text style={midMenuTextStyle}>Tomomorrow</Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableHighlight>
            <TouchableHighlight>
                <View>
                    <ImageBackground style={midMenuButtonStyle} source={require('../img/eventsTheweekIcon.png')}>
                        <View style={overlayStyle}>
                            <Text style={midMenuTextStyle}>The Week</Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableHighlight>
        </View>
    </ScreenSection>
    )
}


const styles = {
    midMenuStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingLeft: 5,
        // paddingRight: 5,
        paddingTop: 3,
        paddingBottom: 3
    },
    midMenuButtonStyle: {
        borderWidth: 1,
        borderColor: 'rgb(150,150,150)',
        marginLeft: 4,
        marginRight: 4,
        width: 115,
        height: 73.48
    },
    overlayStyle: {
        flex: 1,
        left: 0,
        top: 0,
        padding: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    midMenuTextStyle: {
        flex: 1,
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        marginTop: 25,
    }

};

export { EventsMidMenu };