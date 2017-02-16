import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle} >
      <Text style={textStyle} >{props.headerText}</Text>
    </View>
  );
};

const styles = {

  viewStyle: {
    backgroundColor: 'rgb(214, 255, 254)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    position: 'relative',
    elevation: 2


  },
  textStyle: {
    fontSize: 30
  }
};

export default Header;
