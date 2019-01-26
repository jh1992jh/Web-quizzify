import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import AnswerWrapper from './AnswerWrapper';
 
class Results extends Component {
    componentDidMount() {
        const { correctAnswers } = this.props.questions;
       /* const num = new Date().getDay();

        let day;
        switch(num) {
            case 1:
                day = 'Monday'
                break;
            case 2: 
                day = 'Tuesday'
                break;
            case 3:
                day = 'Wednesday'
                break;
            case 4: 
                day = 'Thursday'
                break;
            case 5:
                day = 'Friday'
                break;
            case 6: 
                day = 'Saturday'
                break;
            case 7: 
                day = 'Sunday'
                break;
        }

        storeScore = async () => {
            try {
                await AsyncStorage.setItem(day.toString(), num.toString())
            } catch (err) {
                console.log(err)
            }
        }

        /* removeScore = async () => {
            try {
                await AsyncStorage.removeItem('Friday')
            } catch (err) {
                console.log(err)
            }
        } */
       // AsyncStorage.clear()
       // storeScore()
       // removeScore() 
    }

    _keyExtractor = (item, index) => index.toString();
  render() {
    const { answers, correctAnswers } = this.props.questions;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTxt}>
                Results
            </Text>
        </View>
        <FlatList 
        style={styles.resultsList}
        data={answers}
        keyExtractor={this._keyExtractor}
        ItemSeparatorComponent={({highlighted}) => (
            <View style={{ minHeight: 2, backgroundColor: '#888', marginTop: 5 }} />
          )}
        renderItem={({ item}) => (
            <AnswerWrapper chosenOption={item.chosenOption} correct={item.correct} question={item.question} />
        )}        
        /> 
        <View style={styles.correctAmount}>
            <Text style={styles.correctAmountTxt}>Correct Answers: {' ' + `${correctAnswers + 1}`}</Text>
        </View>
        <TouchableOpacity style={styles.next} onPress={() => this.props.history.push('/progress')}>
        <Text style={styles.nextTxt}>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        borderBottomWidth: 2,
        borderColor: '#eee',
        alignItems: 'center',
        padding: 10,
        marginTop: 30,
        minHeight: 50,
    },
    headerTxt: {
        color: '#eee',
        fontSize: 30
    },
    resultsList: {
        minHeight: 100,
        flex: 1,    
    },
    next: {
        minWidth: 150,
        maxWidth: 150,
        borderColor: '#37ccc9',
        borderWidth: 2,
        margin: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'center'
    },
    nextTxt: {
        color: "#37ccc9",
        textAlign: 'center'
    },
    correctAmount: {
        marginTop: 20,
        marginBottom: 20
    },
    correctAmountTxt: {
        color: '#eee'
    }
})

const mapStateToProps = state => ({
    questions: state.questions
})

export default connect(mapStateToProps)(Results);