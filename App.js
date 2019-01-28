import React, { Component, Fragment } from 'react';

import { Provider } from 'react-redux';
import { NativeRouter, Route } from 'react-router-native';

import store from './store';
import Home from './components/Home';
import QuestionBox from './components/QuestionBox';
import Results from './components/Results';
import Progress from './components/Progress';
import Learn from './components/Learn';
import CategoryPage from './components/CategoryPage';


class App extends Component {
  render() {
     

    const mins = new Date().getMinutes();
    /*<Stats />
    <QuestionBox />*/
      
    return (
      <Provider store={store}>
        <NativeRouter>
          <Fragment>
            <Route exact path="/" component={Home} />
            <Route exact path="/questions" component={QuestionBox} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/progress" component={Progress} />
            <Route exact path="/learn" component={Learn} />
            <Route exact path="/learn/:category" component={CategoryPage} />
          </Fragment>
        </NativeRouter>
      </Provider>
    );
  }
}


export default App;