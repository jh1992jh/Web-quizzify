import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

import { correctAnswer, wrongAnswer, chosenAnswer } from '../actions/questionActions';

import Stats from './Stats';

class QuestionBox extends Component {
    state ={
        correct: null,
        questionIndex: 0,
        chosenOption: null
    }
    chooseAnswer = (i) => {
        const { questionIndex, correct } = this.state;
        const qAnswer = this.props.questions.questions[questionIndex].options[i].correct
        const answer = {
            question: this.props.questions.questions[questionIndex].question,
            correct: qAnswer,
            chosenOption: this.props.questions.questions[questionIndex].options[i].answer,
            id: this.props.questions.questions[questionIndex].id
        } 

        this.props.chosenAnswer(answer)
        if(qAnswer == true) {
            this.setState({correct: qAnswer }, () => {
                this.props.correctAnswer();
                if(this.props.questions.correctAnswers === this.props.questions.questions.length - 1 ) {
                    this.props.history.push('/results')
                }
            })
        } else if(qAnswer === false) {
            this.setState({correct: qAnswer })
            this.props.wrongAnswer()             
        } 
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.questions.wrongAnswers === 3) {
            this.props.history.push('/results')
        } 
    }   

    newQuestion = () => {
        const { questionIndex } = this.state;
        this.setState({ questionIndex: questionIndex + 1, correct: null});
    }
  render() {
      const { correct, questionIndex } = this.state;
      const { questions } = this.props.questions;
         
      let answerInfo = null;
    if(correct !== null && correct) {
        answerInfo = (
            <View style={styles.correctAnswerWrapper}>
                <Text style={styles.answerInfoTxt} >That's Correct!</Text>
                <TouchableOpacity style={styles.nextQuestion} onPress={this.newQuestion}>
                    <Text style={styles.nextText}>Next Question</Text>
                </TouchableOpacity>
            </View>
        )
    } else if (correct !== null && !correct) {
        answerInfo = <Text style={styles.answerInfoTxt} >That's Incorrect!</Text>
    }

      let outputOptions;
    
      if(questions[questionIndex].options === undefined) this.props.history.push('/results')
      if(questions.length > 0) {
           outputOptions = questions[questionIndex].options.map((option, i) => (
            <TouchableOpacity key={i} style={styles.option} onPress={() => this.chooseAnswer(i)}>
                <Text style={styles.optionTxt}>{option.answer}</Text>
            </TouchableOpacity>
          ))
      } else {
          outputOptions = null
      }
    return (
        <View style={styles.container}>
            <Stats />
            <View style={styles.questionWrapper}>
                <View style={styles.questionTitle}>
                    <Text style={styles.questionTitleTxt}>{questions[questionIndex].question}</Text>
                </View>
                <View style={styles.options}>
                    {outputOptions}
                </View>
                <View style={styles.answerInfoWrapper}>
                    {answerInfo}
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
    container: {
        backgroundColor: '#222',
        flex: 1
    },
    questionWrapper: {
        maxHeight: 150,
        flex: 1
    },
    questionTitle: {
        maxHeight: 100,
        alignItems: 'center',
        marginBottom: 30,
        paddingRight: 20,
        paddingLeft: 20
    },
    questionTitleTxt: {
        color: '#eee',
        fontSize: 15
    },
    options: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        minHeight: 150,
    },
    option: {
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
    },
    optionTxt: {
        color: "#37ccc9",
        textAlign: 'center'
    },
    answerInfoWrapper: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    },
    answerInfoTxt: {
        fontSize: 30,
        color: '#eee'
    },
    correctAnswerWrapper: {
        flex: 1
    },
    nextQuestion: {
        flex: 1,
        borderColor: '#37ccc9',
        borderWidth: 2,
        margin: 30,
        minHeight: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextText: {
        color: '#eee'
    }
})

export default connect(mapStateToProps, { correctAnswer, wrongAnswer, chosenAnswer })(QuestionBox)