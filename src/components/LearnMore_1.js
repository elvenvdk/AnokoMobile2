import React from 'react';
import { Image, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const LearnMore_1 = () => {
    const { 
        containerStyle, 
        navButtonRightStyle,
        navButtonLeftStyle,
        textAboutStyle,
        textAboutStyle2, 
        textHeaderStyle, 
        textContainerStyle, 
        logoStyle } = styles;
    return (
        <ImageBackground source={require('./img/aboutImg.png')}> 
            <Image source={require('./img/ANOKOLogo.png')} style={logoStyle}/>               
            <Text style={textHeaderStyle}>ABOUT ANOKO</Text>
            <TouchableOpacity onPress={() => Actions.LearnMore2({})} style={navButtonRightStyle}>
                <Image source={require('./img/rightChevron.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.Landing({})} style={navButtonLeftStyle}>
                <Image source={require('./img/leftChevron.png')} />
            </TouchableOpacity>
            <View style={containerStyle}>
                <View style={textContainerStyle}>
                    <Text style={textAboutStyle}>
                        We are an art social club connecting
                        our members with arts, culture and 
                        culinary experiences
                    </Text>
                    <Text style={textAboutStyle2}>
                        Your membership
                        gets you access to a thoughtfully
                        curated art ecosystem and a 
                        community of like-minded spirits.
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );    
}

const styles = {
    textHeaderStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 65,
        marginBottom: 5,
        justifyContent: 'space-around',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white'
    },
    textAboutStyle: {
        fontSize: 13,
        lineHeight: 20,
        textAlign: 'center',        
        marginTop: 50,
        marginBottom: 5,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white'
    },
    textAboutStyle2: {
        fontSize: 13,
        lineHeight: 20,
        textAlign: 'center',        
        marginTop: 20,
        marginBottom: 5,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white'
    },
    textContainerStyle: {
        width: 200,
        flex: 1,
        flexDirection: 'column',
    },
    containerStyle: {
        flex: 1,
        alignItems: 'center'
    },
    logoStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 126,
        marginTop: 46
    },
    navButtonRightStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 5
    },
    navButtonLeftStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 5
    }
};

export default LearnMore_1;

