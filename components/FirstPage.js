import React, { Component, Fragment } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class FirstPage extends Component {
  render() {
    const { category } = this.props;
    return (
        <Fragment>
            <Text style={styles.titleTxt}>{category.categoryTitle}</Text>
            <View styles={styles.smallParagraph}>
                <Text style={styles.paragraphTxt}>
                <Text style={styles.boldTxt}>{category.firstPage.bold}</Text> 
                    {category.firstPage.smallParagraph}
                </Text>
            </View>
            <View style={styles.mediumParagraph}>
                <Text style={styles.paragraphTxt}>
                {category.firstPage.mediumParagraph}
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
    smallParagraph: {
       flex: 1
    },
    paragraphTxt: {
        color: '#eee',
        fontSize: 15
    },
    mediumParagraph: {
        flex: 2,
        marginTop: 50
    },
    boldTxt: {
        fontWeight: '600',
        color: '#eee',
        fontSize: 15 
    }
})

export default FirstPage