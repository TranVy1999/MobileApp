import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Button, WhiteSpace, WingBlank, TabBar  } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'

export default class About extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: true,
        };
    }
    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
            <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
            <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                onClick={(e) => {
                e.preventDefault();
                this.setState({
                    hidden: !this.state.hidden,
                });
                }}
            >
                Click to show/hide tab-bar
            </a>
            <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
                onClick={(e) => {
                e.preventDefault();
                this.setState({
                    fullScreen: !this.state.fullScreen,
                });
                }}
            >
                Click to switch fullscreen
            </a>
            </div>
        );
    }
    
    render(){
        return (
            <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
                this.setState({
                selectedTab: 'yellowTab',
                });
            }}
            >
            {this.renderContent('My')}
            </TabBar.Item>
        )
    }

}