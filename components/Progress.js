import React, { Component } from 'react'
import { Text, View, StyleSheet, AsyncStorage, TouchableOpacity, Button } from 'react-native';
import { Link } from 'react-router-native';
import { BarChart, XAxis, YAxis } from 'react-native-svg-charts';

import Chart from './Chart';

class Progress extends Component {
    state = {
      dataPoints: []
    }
    componentDidMount() {
        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, stores) => {
              this.setState({ dataPoints: stores.reduce((acc, val) => acc.concat(val))})
              stores.map((result, i, store) => {
                let key = store[i][0];
                let value = store[i][1];
              });
            });
          });
    }
  render() { 
    const { dataPoints } = this.state;
    return (
      <View style={styles.container}>

        <Chart dataPoints={dataPoints} />
        
        <TouchableOpacity style={styles.home}>
                <Link to="/">
                    <Text style={styles.homeTxt}>Home</Text> 
                </Link> 
            </TouchableOpacity> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222',
        flex: 1,
        alignItems: 'center',
        paddingTop: 50
    },
    home: {
      borderWidth: 2,
      borderColor: '#37ccc9',
      minWidth: 250,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 15,
      paddingBottom: 15,
      marginTop: 30
  },
  homeTxt: {
      color: '#37ccc9',
      fontSize: 30,
      textAlign: 'center'
  }
})

export default Progress