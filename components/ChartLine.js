import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ChartLine extends Component {
    lineStyle = () => {
        const lineHeight = this.props.points * 10;
            return {
                width: 38.8,
                margin: 2,
                backgroundColor: '#37ccc9',
                height: lineHeight,
                alignItems: 'center',
                justifyContent: 'center'
            }  
    }
 
    render() { 
        const { points, day } = this.props;
        return(
            <View style={this.lineStyle()}>
            <Text style={styles.lineDayTxt}>{day}</Text>
                    <Text>{points}</Text>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    
    lineDayTxt: {
        color: '#888',        
    },
    lineScoreTxt: {
        color: '#eee',
        marginBottom: 20
    }
})

export default ChartLine;