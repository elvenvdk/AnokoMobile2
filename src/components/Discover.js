import React, { Component } from 'react';
import { 
    View, 
    Text, 
    ListView,
    Image,
    ScrollView,
    TouchableWithoutFeedback 
} from 'react-native';
import { connect } from 'react-redux';
import { 
    Screen_Member, 
    ScreenSection,
    Header_Top,
    Header_Mid,
    Header_Small,
    MidMenu 
} from './common';
import PartnerListFeat from './PartnerListFeat';
import PartnerListMain from './PartnerListMain';


class Discover extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.partnerLib);
    }
    renderFirstRow(partnerData) {
        return <PartnerListFeat partnerData={partnerData} />
    }
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });
        this.dataSource = ds.cloneWithRows(this.props.partnerMainLib)
    }
    renderSecondRow(partnerData) {
        return <PartnerListMain partnerData={partnerData} />
    }
    render() {
        
        return (
            <View>
                <Screen_Member>                    
                    <ScreenSection>
                        <Header_Top headerText="Discover" />
                    </ScreenSection>
                    <ScrollView>
                        <ScreenSection>
                            <Header_Mid headerMidText="Faves" />
                        </ScreenSection>
                        <ScreenSection>
                            <Header_Small headerText="Featured Partners" />
                        </ScreenSection>
                        <ScreenSection>
                            <ListView
                                horizontal
                                dataSource={this.dataSource}
                                renderRow={this.renderFirstRow}
                            />
                        </ScreenSection>
                        <MidMenu />
                        <ScreenSection>
                            <ListView
                                dataSource={this.dataSource}
                                renderRow={this.renderSecondRow}
                            />
                        </ScreenSection>
                    </ScrollView>
                </Screen_Member>
            </View>
        );
    }
}



const mapStateToProps = state => {
    return { 
        partnerLib: state.partners,
        partnerMainLib: state.partnersMain 
    };
};

export default connect(mapStateToProps)(Discover);