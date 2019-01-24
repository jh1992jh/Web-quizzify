import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Stats extends Component {
    render() {
        const { questions } = this.props;
    return ( 
      <View style={styles.statsWrapper}>
        <View style={styles.statsInfo}>
            <View style={styles.correct}>
                <Text style={styles.statsTxt}>Correct: {questions.correctAnswers} / {questions.questions.length}</Text>
            </View>
            <View style={styles.wrong}>
                <Text style={styles.statsTxt}>Wrong: {questions.wrongAnswers} / 3</Text>
            </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
    questions: state.questions
})
 
const styles = StyleSheet.create({
    statsWrapper: {
        marginBottom: 30,
        marginTop: 150,
        padding: 20,
       
    },
    statsInfo: {
        borderBottomWidth: 2,
        borderColor: '#eee' ,
        flexDirection: 'row',
        flex: 1,
        minHeight:50,
        marginBottom: 30
    },
    correct: {
        borderRightWidth: 1,
        borderColor: '#eee',
        minHeight:20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    wrong: {
        borderLeftWidth: 1,
        borderColor: '#eee',
        minHeight:20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    statsTxt: {
        fontSize: 15,
        color: '#eee'
    }
})
export default connect(mapStateToProps)(Stats);