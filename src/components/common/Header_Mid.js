import React from 'react';
import { 
    View, 
    Text, 
    Image, 
    TouchableHighlight 
} from 'react-native';
import { ButtonFilterEvents } from '.'

const Header_Mid = (props) => {
    //destructure styles
    const { 
        textStyle,
        viewStyle, 
        searchIconStyle, 
        titleStyle,
        filterButtonPosition,
        favesLinkStyle
    } = styles;
    return (
        <View style={viewStyle}>
            <View>
                <TouchableHighlight>
                    <Text style={textStyle}>Main</Text>
                </TouchableHighlight>
            </View>
            <View>
                <TouchableHighlight style={favesLinkStyle}>
                    <Text style={textStyle}>{props.headerMidText}</Text>
                </TouchableHighlight>
            </View>
            <View style={filterButtonPosition}>
                <ButtonFilterEvents>Filter Events</ButtonFilterEvents>
            </View>
        </View>
    );
};

const styles = {
    titleStyle: {
        
    },
    textStyle: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
    },
    viewStyle: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingTop: 0,
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#979797',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height:    2 },
        // shadowOpacity: 0.2,
        position: 'relative',
    },
    filterButtonPosition: {
        paddingTop: 30
    },
    favesLinkStyle: {
        paddingLeft: 46
    }
}

export { Header_Mid };