import React, { Component } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ButtonLogin, ButtonLearnMore } from './common';

class Landing extends Component {
    render() {
        const { textMottoStyle, imageStyle, logoStyle, textNotaMemberStyle } = styles;
        return (
                <ImageBackground source={require('./img/landingImg.png')}>
                    <Image source={require('./img/ANOKOLogoWords.png')} style={logoStyle}/>
                    <Text style={textMottoStyle}>Curating | Cultural | Connections</Text>
                    <ButtonLogin>Login</ButtonLogin>
                    <Text style={textNotaMemberStyle}>Not a Member?</Text>
                    <ButtonLearnMore 
                        title="Learn more 1" 
                        onPress={() => Actions.LearnMore1({})}
                    >
                    Learn More
                    </ButtonLearnMore>
                </ImageBackground>                
        )
    }
}


const styles = {
    textMottoStyle: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50,
        justifyContent: 'space-around',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white'
    },
    textNotaMemberStyle: {
        fontSize: 10,
        textAlign: 'center',        
        marginTop: 50,
        marginBottom: 5,
        justifyContent: 'space-around',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white'
    },
    logoStyle: {
        width: 110,
        height: 150,
        marginTop: 45,
        marginLeft: 130
    }
};


export default Landing;