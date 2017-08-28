import React from 'react';
import { View, Text } from 'react-native';

const Header_Small = (props) => {
    //destructure styles
    const { textStyle, viewStyle } = styles;
    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#979797',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        position: 'relative'
    }
}

export { Header_Small };