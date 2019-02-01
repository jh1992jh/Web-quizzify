import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

class PageIndicator extends Component {
  render() {
    const { changePage, activePage } = this.props;
    return (
      <View style={styles.activityIndicator}>
        <TouchableOpacity style={styles.circle} onPress={() => changePage(0)}>
            {activePage === 0 ? <View style={styles.innerCircle} /> : null}
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={() => changePage(1)}>
            {activePage === 1 ? <View style={styles.innerCircle} /> : null} 
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle}  style={styles.circle} onPress={() => changePage(2)}>
            {activePage === 2 ? <View style={styles.innerCircle} /> : null} 
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={() => changePage(3)}>
            {activePage === 3 ? <View style={styles.innerCircle} /> : null} 
        </TouchableOpacity>
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
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
    },
    innerCircle: {
      height: 12,
      width: 12,
      backgroundColor: '#eee',
      borderRadius: 100  
    }
})

export default PageIndicator;