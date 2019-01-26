import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import { Link } from 'react-router-native';
import { connect } from 'react-redux';

import { resetGame } from '../actions/questionActions';

import Logo from '../webquiz-logo.png';
 
class Home extends Component {
    componentDidMount() {
        this.props.resetGame();
        const keysZero = AsyncStorage._getKeys.length === 0;
        if(keysZero) {
            AsyncStorage.multiSet([['Monday', '0'], ['Tuesday', '0'], ['Wednesday', '0'], ['Thursday', '0'], ['Friday', '0'], ['Saturday', '0'], ['Sunday', '0'] ])
        } 
        console.log(keysZero)
    }
  render() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />
            <TouchableOpacity style={styles.play}>
                <Link to="questions">
                    <Text style={styles.playTxt}>Play</Text> 
                </Link> 
            </TouchableOpacity>           
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 350,
        height: 350,
        marginTop: -150
    },
    play: {
        borderWidth: 2,
        borderColor: '#37ccc9',
        minWidth: 250,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 15
    },
    playTxt: {
        color: '#37ccc9',
        fontSize: 30,
        textAlign: 'center'
    }
})


export default connect(null, { resetGame })(Home);