import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './FloatingButton.style';

function FloatingButton({iconName, onPressFloating}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressFloating}>
      <Icon name={iconName} size={30} color={'white'}></Icon>
    </TouchableOpacity>
  );
}
export default FloatingButton;
