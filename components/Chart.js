import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';

import ChartLine from './ChartLine';

class Chart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ChartLine points="5" day="Mon" />
        <ChartLine points="7" day="Tue" />
        <ChartLine points="18" day="Wed"/>
        <ChartLine points="3" day="Thu" />
        <ChartLine points="22" day="Fri" />
        <ChartLine points="15" day="Sat" />
        <ChartLine points="28" day="Sun" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',  
        width: 300,
        maxHeight: 300
    },
    bar: {
        width: 42.8,
        margin: 2,
        backgroundColor: '#37ccc9',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default Chart;