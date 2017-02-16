// Place code in here for ios

// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';


// create a component
const App = () => {
  return (
    <Text>Some text</Text>
  );
}

// const App = () => (
//     <Text>Some text</Text>
// );

// Render component to the device
AppRegistry.registerComponent('ReactNativeAlbums', () => App);
