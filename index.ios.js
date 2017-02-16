// Place code in here for ios

// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from "./src/components/header";


// create a component
const App = () => (
  <Header />
);


// const App = () => (
//     <Text>Some text</Text>
// );

// Render component to the device
AppRegistry.registerComponent('ReactNativeAlbums', () => App);
