import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Landing from './components/Landing';
import LearnMore_1 from './components/LearnMore_1';
import LearnMore_2 from './components/LearnMore_2';
import LearnMore_3 from './components/LearnMore_3';
import LearnMore_4 from './components/LearnMore_4';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Discover from './components/Discover';
import Events from './components/Events';
import Community from './components/Community';

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene 
                        key="Landing" 
                        component={Landing} 
                    />
                    <Scene 
                        key="LearnMore1" 

                        component={LearnMore_1}                         
                        title="About Anoko"
                        onRight={() => Actions.LearnMore2()}  
                        rightTitle="Next"
                        onLeft={() => Actions.Landing()} 
                        swipeEnabled
                    />
                    <Scene 
                        key="LearnMore2" 
                        component={LearnMore_2} 
                        title="Exclusive"
                        onRight={() => Actions.LearnMore3()}
                        rightTitle="Next"
                        onLeft={() => Actions.LearnMore1()}
                        swipeEnabled
                        
                    />
                    <Scene 
                        key="LearnMore3" 
                        component={LearnMore_3} 
                        title="Community"
                        onRight={() => Actions.LearnMore4()}
                        rightTitle="Next"
                        onLeft={() => Actions.LearnMore2()}
                        swipeEnabled
                    />
                    <Scene 
                        key="LearnMore4" 
                        component={LearnMore_4} 
                        title="Events"
                        onRight={() => Actions.SignUp()}
                        rightTitle="Next"
                        onLeft={() => Actions.LearnMore3()}
                        swipeEnabled
                    />
                    <Scene 
                        key="SignUp" 
                        component={SignUp} 
                        title="SignUp"
                        onLeft={() => Actions.LearnMore4()}
                        swipeEnabled
                    />
                    <Scene 
                        key="MemberProfile" 
                        component={Profile} 
                        title="Profile"
                        
                    />
                    <Scene 
                        key="Discover" 
                        component={Discover} 
                        title="Discover"
                    />
                    <Scene 
                        key="Events" 
                        component={Events} 
                        title="Events"
                    />
                    <Scene 
                        key="Community" 
                        component={Community} 
                        title="Community"
                        initial
                    />
                </Scene>
            </Router>
        );
    }
    
}

export default RouterComponent;