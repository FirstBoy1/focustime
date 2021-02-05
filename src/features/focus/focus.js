import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { RoundedButton } from '../../components/RoundedButton';
import {spacing} from '../../utils/sizes';
import {colors} from '../../utils/colors';


export const Focus = ({ addSubject }) => {
  const [text, setText] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            onSubmitEditing={({ nativeEvent }) => {
              setText(nativeEvent.text);
            }}
            style={{ flex: 1, marginRight: 20 }}
          />
          <RoundedButton onPress={() => addSubject(text)} title="+" size={50} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: spacing.lg,
  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
