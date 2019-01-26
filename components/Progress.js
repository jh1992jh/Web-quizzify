import React, { Component } from 'react'
import { Text, View, StyleSheet, AsyncStorage } from 'react-native';
import { BarChart, XAxis, YAxis } from 'react-native-svg-charts';

import Chart from './Chart';

class Progress extends Component {
    componentDidMount() {
        console.log(AsyncStorage._getKeys)
               
        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, stores) => {
              stores.map((result, i, store) => {
                // get at each store's key/value so you can work with it
                let key = store[i][0];
                let value = store[i][1];
                console.log(key, value)
              });
            });
          });
    
    }
  render() {
      const data = [2,3,1,4,5,6,7];
      const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return (
      <View style={styles.container}>
        <Chart />
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
    }
})


/* 
<BarChart 
        data={data}
        gridMin={0}
        contentInset={{ top: 10, bottom: 10 }}
        style={{flex: 1, width: 300}}
        svg={{ fill: '#37ccc9' }}
        />
        
        <XAxis 
        data={days}
        formatLabel={ (value, i) => `${days[i]}` }
        style={{flex: 1, width: 300}}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: '#eee' }}
        />
*/

export default Progress