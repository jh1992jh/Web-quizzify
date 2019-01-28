import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

class PageIndicator extends Component {
  render() {
    return (
      <View style={styles.activityIndicator}>
        <TouchableOpacity style={styles.circle}>
            <Text>T</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle}/>
        <TouchableOpacity style={styles.circle}/>
        <TouchableOpacity style={styles.circle}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        maxHeight: 50,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    circle: {     
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 100,
    height: 20,
    width: 20,
    margin: 10
    }
})

export default PageIndicator;