import React, {Component} from 'react';
import { Text, View } from 'react-native';
import 'antd-mobile/dist/antd-mobile.css'
import { Tabs, WhiteSpace } from 'antd-mobile';

const tabs = [
    { title: ' HOTTEST ' },
    { title: ' UPDATE ' },
    { title: ' ACTION ' },
    { title: ' FANTASY ' },
    { title: ' HORROR ' },
];

export default class TypesTabs extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: true,
        };
    }
    
    render(){
        return (
            <div>
                <WhiteSpace style={{marginTop:'-9px'}}/>
                    <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40rem', backgroundColor: '#fff' }}>
                            Content of first tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40rem', backgroundColor: '#fff' }}>
                            Content of second tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40rem', backgroundColor: '#fff' }}>
                            Content of third tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40rem', backgroundColor: '#fff' }}>
                            Content of four tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40rem', backgroundColor: '#fff' }}>
                            Content of five tab
                        </div>
                      
                    </Tabs>
                <WhiteSpace />
            </div>
        )
    }

}