import React from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={[styles(size).radius, style]}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableHighlight>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#fff',
      borderWidth: 2,
    },
    text: {
      color: '#fff',
      fontSize: size / 3,
    },
  });
