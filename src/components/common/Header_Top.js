import React from 'react';
import { View, Text, Image } from 'react-native';

const Header_Top = (props) => {
    //destructure styles
    const { 
        textStyle,
        viewStyle, 
        searchIconStyle, 
        titleStyle 
    } = styles;
    return (
        <View style={viewStyle}>
            <View style={titleStyle}>
                <Image style={searchIconStyle} source={require('../img/searchIcon.png')} />
            </View>
            <View>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
        </View>
    );
};

const styles = {
    titleStyle: {
        
    },
    textStyle: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    viewStyle: {
        backgroundColor: '#5FBEB8',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#979797',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height:    2 },
        // shadowOpacity: 0.2,
        position: 'relative',
    },
    searchIconStyle: {
        marginLeft: 10,
        marginRight: 126
    }
}

export { Header_Top };