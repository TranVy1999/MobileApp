import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'
import Card from '../shares/card'

export default function ReviewDetails({navigation}) {
    return (
        <View style={globalStyles.container}> 
            <Card>
                <Text style={globalStyles.titleText}> {navigation.getParam('title')} </Text>
                <Text style={globalStyles.titleText}> {navigation.getParam('body')} </Text>
                <Text style={globalStyles.titleText}> {navigation.getParam('rating')} </Text>
            </Card>
        </View>
    )
}
