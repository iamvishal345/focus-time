import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

import { colors } from '../../utils/color';
import { fontSizes, spacingSizes } from '../../utils/sizes';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={50} title="10" onPress={() => onChangeTime(10)} />
        <RoundedButton size={50} title="20" onPress={() => onChangeTime(20)} />
        <RoundedButton size={50} title="30" onPress={() => onChangeTime(30)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 0.5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
  },
});
