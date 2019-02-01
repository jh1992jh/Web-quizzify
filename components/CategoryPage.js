import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { chooseCategory } from '../actions/learnActions';

import PageIndicator from './PageIndicator';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';

class CategoryPage extends Component {
    state = {
        activePage: 0
    }

    componentDidMount() {
        const category = this.props.match.params.category;
        const uppercasedCategory = category => category.charAt(0).toUpperCase() + category.slice(1)
        this.props.chooseCategory(uppercasedCategory(category))
    }

    changePage = (num) => {
        this.setState({activePage: num})
    }
  render() {
    const { activePage } = this.state;
    const { learn } = this.props;

    let outputPage;

    if(activePage === 0 && learn.category !== null) {
        outputPage = <FirstPage category={learn.category[0]} />
    } else if (activePage === 1 && learn.category !== null) {
        outputPage = <SecondPage category={learn.category[0]} />
    } else if (activePage === 2 && learn.category !== null) {
        const partOneArr = learn.category[0].thirdPage.map((item, i) => {
            if(i < 9 ) {
                return item
            } 
        })
        const partOne = partOneArr.filter(item => item !== undefined)
        outputPage = <ThirdPage category={partOne} />
    } else if (activePage === 3 && learn.category !== null) {
        const partTwoArr = learn.category[0].thirdPage.map((item, i) => {
            if(i >= 9) {
                return item
            }
        })
        const partTwo = partTwoArr.filter(item => item !== undefined)
        outputPage = <ThirdPage category={partTwo} />
    } 
    else {
        return <Text>Loading</Text>
    }
    return (
      <View style={styles.container}>
             {outputPage}
        <PageIndicator changePage={this.changePage} activePage={activePage}/>
      </View>
    )
  }
}

const mapStateToProps = state => ({
    learn: state.learn
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222',
        padding: 10,
        paddingTop: 20,
        flex: 1
    }
})

export default connect(mapStateToProps, { chooseCategory })(CategoryPage);