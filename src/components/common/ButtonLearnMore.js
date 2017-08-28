import React from 'react';
import Button from 'react-native-button';
import { Text, View, TouchableOpacity } from 'react-native';

const ButtonLearnMore = ({ onPress, children }) => {
    const { buttonStyle, buttonTextStyle } = styles;
    return(
        <Button containerStyle={buttonStyle} onPress={onPress}>
            <Text style={buttonTextStyle}>{children}</Text>
        </Button>
    )
}

const styles = {
    buttonStyle: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 10,
        width: 200,
        height: 40,
        overflow: 'hidden',
        borderRadius: 4,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        marginTop: 30,
        marginBottom: 60
    },
    buttonTextStyle: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
}

export { ButtonLearnMore };