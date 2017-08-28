import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image,
    TouchableWithoutFeedback 
} from 'react-native';
import { ScreenSection } from './common';



class PartnerListMain extends Component {
    render() {
        const { title, image, description } = this.props.partnerData;
        console.log(image);
        return (
            <View>
                <TouchableWithoutFeedback>
                    <Image style={{width: 375, height: 300}} source={require('./img/partners/lacigogne.jpg')} />
                </TouchableWithoutFeedback>
            </View>
        );
    }
}




export default PartnerListMain;