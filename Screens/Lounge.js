import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class LoungeRoom extends React.Component {
    render() {
        return(
            <View>
                <Image source={{uri: 'https://media.tenor.com/images/3ffce1bf7bcde18c15e9f741d8ca2a1d/tenor.gif'}}/>
                <Image source={{uri: 'jeff'}}/>
            </View>
        )
    }
}