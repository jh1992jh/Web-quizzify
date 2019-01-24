import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from 'react-router-native';
import { connect } from 'react-redux';

import { resetGame } from '../actions/questionActions';

class Home extends Component {
    componentDidMount() {
        this.props.resetGame();
    }
  render() {
    return (
        <View style={styles.container}>
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
    play: {
        borderWidth: 2,
        borderColor: '#37ccc9',
        width: 150,
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