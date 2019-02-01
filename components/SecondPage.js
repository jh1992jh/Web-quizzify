import React, { Component, Fragment } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class SecondPage extends Component {
  render() {
    const { category } = this.props;
    return (
        <Fragment>
            <View style={styles.mediumParagraph}>
                <Text style={styles.paragraphTxt}>
                    <Text style={styles.boldTxt}>{category.secondPage.bold1}</Text>
                    {category.secondPage.paragraph1} 
                </Text> 
            </View>
            <View style={styles.mediumParagraph}>
                <Text style={styles.paragraphTxt}>
                    <Text style={styles.boldTxt}>{category.secondPage.bold2}</Text>
                    {category.secondPage.paragraph2}
                </Text> 
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
        marginBottom: 50
    },
    
    paragraphTxt: {
        color: '#eee',
        fontSize: 15
    },
    mediumParagraph: {
        flex: 1,
        marginTop: 50
    },
    boldTxt: {
        fontWeight: '600',
        color: '#eee',
        fontSize: 15 
    }
})

export default SecondPage