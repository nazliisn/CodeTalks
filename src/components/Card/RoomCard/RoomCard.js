import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View, Text} from 'react-native';
import styles from './RoomCard.styles';

function RoomCard({rooms, onRoomPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onRoomPress(rooms)}>
        <Text style={styles.text}>{rooms.roomName}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default RoomCard;
