import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Screen_Member = (props) => {
const { linkBarStyle, viewStyle } = styles;
    return(
        <View style={viewStyle}>
            {props.children}
            <View style={linkBarStyle}>
                    <TouchableOpacity>
                        <Image source={require('../img/plansIcon.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../img/ANOKOThumbnail.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../img/communityIcon.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../img/profileThumbnailImg.png')} />
                    </TouchableOpacity>
                </View>
        </View>
    )
}


const styles = {
    viewStyle: {
        // borderWidth: 1,
        // borderRadius: 2,
        // borderColor: '#ddd',
        borderBottomWidth: 0,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1, 
        // shadowRadius: 2,
        elevation: 3,
        marginLeft: 0,
        marginRight: 0,
        height: 625,
        width: 375
    },
    linkBarStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        marginTop: 0,
        paddingTop: 5,
        paddingBottom: 0,
        paddingLeft: 25,
        paddingRight: 25,
        // borderWidth: 1,
        // borderColor: 'rgb(227, 227, 227)'

    }
}

export { Screen_Member };