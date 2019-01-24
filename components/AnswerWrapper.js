import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class AnswerWrapper extends Component {
  render() {
    const { chosenOption, correct, question } = this.props;
    return (
      <View style={styles.AnswerWrapper}>
        <Text style={styles.answerTxt}> {question} </Text>
        <Text style={styles.answerTxt}>Your answer: {chosenOption}</Text>
        <Text style={styles.answerTxt}>
            Correct: 
            <Text style={{color: `${correct ? '#080' : '#800'}`, marginLeft: 10}}>
             {'  '+ correct.toString()}
            </Text>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    answerWrapper: {
        height: 50,
        borderBottomWidth: 2,
        borderColor: '#eee',
        padding: 10
    },
    answerTxt: {
        color: '#eee'
    }
})

export default AnswerWrapper;