import React, { Component, Fragment } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

class ChartLine extends Component {
    state = {
        lineStyles: null
    }
   
    componentDidMount() {
        setTimeout(() => {
            const { points, day } = this.props;
        const dayIndex = points.indexOf(day); 
        const pointIndex = dayIndex + 1;
        const lineHeight = Number(points[pointIndex]) * 15
        const styles =  {
                width: 38.8,
                margin: 2,
                backgroundColor: '#37ccc9',
                height: lineHeight === 0 ? 15 : lineHeight + 15,
                alignItems: 'center',
                justifyContent: 'center'
            }  
        this.setState({ lineStyles: styles})
        },300)
    }
    render() { 
        const { points, day } = this.props;
        const { lineStyles } = this.state;
        const dayIndex = points.indexOf(day); 
        const pointIndex = dayIndex + 1;

        let line;

        if(points === null) {
            line = null
        } else {
            line = (
                <View>
                    <TouchableOpacity style={lineStyles === null ? null : lineStyles}>
                    <Text>{points[pointIndex]}</Text>
                    </TouchableOpacity>
                    <Text style={styles.lineDayTxt}>{points[dayIndex]}</Text>
                </View>
            )
        }
        return(
            <Fragment>
                {line}
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    
    lineDayTxt: {
        color: '#888',   
        textAlign: 'center'     
    },
    lineScoreTxt: {
        color: '#eee',
        alignSelf: 'flex-start',
        marginTop: -15
    }
})

export default ChartLine;