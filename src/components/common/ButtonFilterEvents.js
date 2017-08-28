import React from 'react';
import Button from 'react-native-button';
import { Text, View } from 'react-native';

const ButtonFilterEvents = ({ onPress, children }) => {
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
        padding: 2,
        width: 100,
        height: 30,
        overflow: 'hidden',
        borderRadius: 4,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        backgroundColor: 'rgba(214, 214, 214, 100)',
        marginTop: 30,
        marginBottom: 60
    },
    buttonTextStyle: {
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
}

export { ButtonFilterEvents };