import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/color';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 50,
  ...props
}) => (
  <TouchableOpacity style={[styles.radius(size), style]} {...props}>
    <Text style={[styles.text(size), textStyle]}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    radius: (size) =>({
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.borderPrimary,
      borderWidth: 2,
    }),
    text:(size) =>({
      color: colors.textPrimary,
      fontSize: size / 3,
    })
})