import React, { Component, Fragment } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class ThirdPage extends Component {
  render() {
    const { category } = this.props;

    const outputContent = category.map((item, i) => (
        <Text key={i} style={styles.cheatSheetTxt}>
            <Text style={styles.boldTxt}>{item.bold}</Text>
            {item.text}
        </Text>
    ))
    return (
      <Fragment>
        <Text style={styles.titleTxt}>CheatSheet</Text>
        <View style={styles.cheatSheet}>
           {outputContent}
        </View>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
    titleTxt: {
        fontSize: 30,
        color: '#eee',
        textAlign: 'center',
        marginBottom: 30
    },
    cheatSheet: {
        flex: 1,
    },
    cheatSheetTxt: {
        marginTop: 10,
        color: '#eee'
    },
    boldTxt: {
        fontWeight: '600',
        color: '#eee',
        fontSize: 15 
    }
})

export default ThirdPage;