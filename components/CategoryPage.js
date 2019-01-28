import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { chooseCategory } from '../actions/learnActions';

import PageIndicator from './PageIndicator';

class CategoryPage extends Component {
    componentDidMount() {
        const category = this.props.match.params.category;
        const uppercasedCategory = category => category.charAt(0).toUpperCase() + category.slice(1)
        this.props.chooseCategory(uppercasedCategory(category))
    }
  render() {
    const { learn } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleTxt}> {learn.category !== null ? learn.category : null} </Text>
        <PageIndicator />
      </View>
    )
  }
}

const mapStateToProps = state => ({
    learn: state.learn
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222',
        padding: 10,
        paddingTop: 20,
        flex: 1
    },
    titleTxt: {
        fontSize: 30,
        color: '#eee',
        textAlign: 'center'
    }
})

export default connect(mapStateToProps, { chooseCategory })(CategoryPage);