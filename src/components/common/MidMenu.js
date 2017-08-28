import React from 'react';
import { 
    View, 
    ScrollView, 
    TouchableWithoutFeedback, 
    Image 
} from 'react-native';
import { ScreenSection } from '.';


const MidMenu = () => {
    const { 
        midMenuStyle,
        midMenuButtonStyle
    } = styles;
    return (
        <ScreenSection>
        <View style={midMenuStyle}>
            <ScrollView horizontal>
            <TouchableWithoutFeedback>
                <Image style={midMenuButtonStyle} source={require('../img/discoverArtIcon.png')} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <Image style={midMenuButtonStyle} source={require('../img/discoverCulinaryIcon.png')} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <Image style={midMenuButtonStyle} source={require('../img/discoverMusicIcon.png')} />
            </TouchableWithoutFeedback>
            </ScrollView>
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

};

export { MidMenu };