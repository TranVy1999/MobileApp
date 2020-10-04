import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Button, WhiteSpace, WingBlank, TabBar  } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'

export default class CreateTabs extends Component{
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
            icon={
                <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                />
            }
            selectedIcon={
                <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                />
            }
            title="Friend"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
                this.setState({
                selectedTab: 'greenTab',
                });
            }}
            >
            {this.renderContent('Friend')}
            </TabBar.Item>
        )
    }

}