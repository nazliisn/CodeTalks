import React from 'react';
import {SafeAreaView, Text, TextInput} from 'react-native';
import styles from './Input.styles';

function Input({title, values, onChange, isSecure}) {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder={title}
        placeholderTextColor="white"
        value={values}
        style={styles.title}
        onChangeText={onChange}
        secureTextEntry={isSecure}
      />
    </SafeAreaView>
  );
}
export default Input;
