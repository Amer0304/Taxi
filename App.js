import React from 'react';
import {StatusBar} from 'react-native';

import SearchResults from './src/screens/SearchResults';
import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <DestinationSearch />
    </>
  );
};

export default App;
