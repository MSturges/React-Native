import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle} >
      <Text style={textStyle} >Albums!</Text>
    </View>
  );
};

const styles = {

  viewStyle: {
    backgroundColor: 'rgb(214, 255, 254)'
    height: 200
  },

  textStyle: {
    fontSize: 30
  }
};

export default Header;
