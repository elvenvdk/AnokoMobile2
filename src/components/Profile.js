import React, { Component } from 'react';
import { 
    Text, 
    View, 
    Image, 
    ImageBackground, 
    TouchableOpacity,
    ScrollView 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { 
    Screen, 
    ScreenSection, 
    Button, 
    Screen_Member 
} from './common';


class Profile extends Component {
    render() {
        const { 
            chatIconPosition, 
            linkStripStyle,
            linkStripTextStyle,
            bioStripPosition,
            plansStripPosition,
            favStripPosition,
            profileTopToolbarStyle, 
            profileImgStyle, 
            profileTextStyle,
            profileImgContainerStyle,
            profileTextUpperPosition,
            profileTextLowerPosition,
            profileConnectionPosition,
            overlayStyle 
        } = styles;
        return (
            <Screen_Member>
                <ScrollView>
                    <ScreenSection>
                        <View style={overlayStyle}>
                            <ImageBackground source={require('./img/Brooklyn_Bridge_at_Night.png')}>                    
                                <View style={profileTopToolbarStyle}>
                                    <TouchableOpacity>
                                        <Image source={require('./img/digitalCardIcon.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={require('./img/chatIcon.png')} style={chatIconPosition} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={require('./img/settingsIcon.png')} />
                                    </TouchableOpacity>                        
                                </View>
                                <View style={profileTextUpperPosition}>                                
                                    <Text style={profileTextStyle}>Shimite Obialo</Text>
                                </View>
                                <View style={profileImgContainerStyle}>                                
                                    <Image source={require('./img/shimiteProfile.jpg')} style={profileImgStyle}/>                                 
                                </View>
                                <View style={profileTextLowerPosition}>
                                    <Text style={profileTextStyle}>New York City</Text>
                                    <Text style={profileTextStyle}>Lawyer | Entrepreneur | Singer</Text>
                                </View>                               
                                <View style={profileConnectionPosition}>
                                    <Text style={profileTextStyle}>100 Connections</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </ScreenSection>
                    <ScreenSection>
                        <TouchableOpacity>
                            <View style={bioStripPosition}>
                                <View style={linkStripStyle}>
                                    <Image source={require('./img/bioIcon.png')} />
                                    <Text style={linkStripTextStyle}>Bio</Text>
                                    <Image source={require('./img/chevronProfileIcon.png')} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScreenSection>
                    <ScreenSection>
                        <TouchableOpacity>
                            <View style={plansStripPosition}>
                                <View style={linkStripStyle}>
                                    <Image source={require('./img/plansIcon.png')} />
                                    <Text style={linkStripTextStyle}>Plans</Text>
                                    <Image source={require('./img/chevronProfileIcon.png')} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScreenSection>
                    <ScreenSection>
                        <TouchableOpacity>
                            <View style={favStripPosition}>
                                <View style={linkStripStyle}>
                                    <Image source={require('./img/favoritesIcon.png')} />
                                    <Text style={linkStripTextStyle}>Favorites</Text>
                                    <Image source={require('./img/chevronProfileIcon.png')} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScreenSection>
                </ScrollView>
            </Screen_Member>
        );
    }
}


const styles = {
    profileTopToolbarStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        marginTop: 25,
        marginLeft: 10,
        marginRight: 10
    },
    chatIconPosition: {
        marginLeft: 210
    },
    overlayStyle: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 1,
        backgroundColor: 'black',
        width: 375,
        height: 440
    },
    profileImgStyle: {
        width: 140,
        height: 140,
        borderRadius: 70
    },
    profileImgContainerStyle: {
        // flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 11
        
    },
    profileTextStyle: {
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 15,
        textAlign: 'center',
        lineHeight: 25
    },
    profileTextUpperPosition: {
        marginTop: 35
    },
    profileTextLowerPosition: {
        marginTop: 5
    },
    profileConnectionPosition: {
        marginTop: 40
    },
    linkStripTextStyle: {
        backgroundColor: 'white'
    },
    linkStripStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 25,
        borderBottomWidth: 1
    },
    bioStripPosition: {
        marginTop: 470
    },
    plansStripPosition: {
        marginTop: 520
    },
    favStripPosition: {
        marginTop: 570
    }

    
};


export default Profile;