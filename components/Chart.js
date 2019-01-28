import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';

import ChartLine from './ChartLine';

class Chart extends Component {
  render() {
    const { dataPoints } = this.props;
    return (
      <View style={styles.container}>
        <ChartLine points={dataPoints} day="Mon" />
        <ChartLine points={dataPoints} day="Tue" />
        <ChartLine points={dataPoints} day="Wed"/>
        <ChartLine points={dataPoints} day="Thu" />
        <ChartLine points={dataPoints} day="Fri" />
        <ChartLine points={dataPoints} day="Sat" />
        <ChartLine points={dataPoints} day="Sun" />
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
        maxHeight: 450
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