import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

class Learn extends Component {
  render() {
    const categories = ['Html', 'CSS', 'JavaScript'];

    const outputCategories = categories.map(category => (
        <TouchableOpacity key={category}>
            <Link to={`/learn/${category.toLowerCase()}`}>
                <Text style={styles.categoryTxt}>{category}</Text>
            </Link>
        </TouchableOpacity>
    ))
    return (
      <View style={styles.container}>
        <Text style={styles.titleTxt}> Categories </Text>
        <View style={styles.categories}>
            {outputCategories}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222',
        padding: 10,
        paddingTop: 20,
        flex: 1
    },
    titleTxt: {
        fontSize: 30,
        color: '#eee',
        textAlign: 'center'
    },
    categories: {
        marginTop: 100,
        flex: 1,
        minHeight: 300,
        alignItems: 'center'
    },
    categoryTxt: {
        color: '#37ccc9',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20
    }
})

export default Learn;