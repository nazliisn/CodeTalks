import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styles from './Button.styles';

function Button({name, onButton, thema = 'primary'}) {
  return (
    <SafeAreaView style={styles[thema].container}>
      <TouchableOpacity onPress={onButton}>
        <Text style={styles[thema].name}>{name}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default Button;
