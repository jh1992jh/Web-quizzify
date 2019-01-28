import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import { Link } from 'react-router-native';
import { connect } from 'react-redux';

import { resetGame } from '../actions/questionActions';

import Logo from '../webquiz-logo.png';
 
class Home extends Component {
    componentDidMount() {
        this.props.resetGame();
        // HERE FOR CLEAR SCORE FUNCTION THAT I MIGHT IMPLIMENT LATER
       /*clearAsyncStorage = async() => {
        AsyncStorage.clear();
    }
    clearAsyncStorage() */
    
        AsyncStorage.getItem('Mon', (err, result) => {
            if(result === null) {
                AsyncStorage.multiSet([['Mon', '0'], ['Tue', '0'], ['Wed', '0'], ['Thu', '0'], ['Fri', '0'], ['Sat', '0'], ['Sun', '0'] ])
            }
        }) 
    }
  render() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />
            <TouchableOpacity style={styles.play}>
                <Link to="/questions">
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