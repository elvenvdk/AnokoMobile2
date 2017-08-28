import React from 'react';
import Button from 'react-native-button';
import { Text, View, TouchableOpacity } from 'react-native';

const ButtonLogin = ({ onPress, children }) => {
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
        borderColor: '#000000',
        backgroundColor: '#5FBEB8',
        marginTop: 130,
        marginBottom: 5
    },
    buttonTextStyle: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
}

export { ButtonLogin };