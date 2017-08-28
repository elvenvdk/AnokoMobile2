import React from 'react';
import { 
    View, 
    ScrollView, 
    TouchableHighlight, 
    Image 
} from 'react-native';
import { ScreenSection } from '.';


const EventsMidMenu = () => {
    const { 
        midMenuStyle,
        midMenuButtonStyle,
        overlayStyle
    } = styles;
    return (
        <ScreenSection>
        <View style={midMenuStyle}>
            <TouchableHighlight>
                <View style={overlayStyle}>
                    <Image style={midMenuButtonStyle} source={require('../img/discoverArtIcon.png')} />
                </View>
            </TouchableHighlight>
            <TouchableHighlight>
                <View>
                    <Image style={midMenuButtonStyle} source={require('../img/discoverCulinaryIcon.png')} />
                </View>
            </TouchableHighlight>
            <TouchableHighlight>
                <View>
                    <Image style={midMenuButtonStyle} source={require('../img/discoverMusicIcon.png')} />
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
        borderColor: 'rgb(150, 150, 150)',
        marginLeft: 4,
        marginRight: 4
    },
    overlayStyle: {
        // flex: 1,
        // position: 'absolute',
        left: 0,
        top: 0,
        // opacity: 1,
        backgroundColor: 'black',
        // width: 375,
        // height: 440
    },

};

export { EventsMidMenu };