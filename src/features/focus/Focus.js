import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacingSizes } from '../../utils/sizes';
import { colors } from '../../utils/color';
export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.title}>
          What would you like to focus on?
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={subject}
            onChangeText={(text) => {
              setSubject(text);
            }}
          />
          <RoundedButton
            size={50}
            title="+"
            onPress={() => {
              addSubject(subject);
              setSubject(null);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
  },
  innerContainer: {
    flex: 0.5,
    padding: spacingSizes.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: spacingSizes.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: { flex: 1, marginRight: spacingSizes.md },
});
