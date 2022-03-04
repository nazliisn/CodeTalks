import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View, Text} from 'react-native';
import styles from './TalkRoomCard.styles';
import {formatDistance, parseISO} from 'date-fns';
function TalkRoomCard({data, roomName}) {
  /*  const formatedData = formatDistance(parseISO(data.date), new Date(), {
    addSuffix: true,
  });*/
  return !!data.context ? (
    <View style={styles.container}>
      <View style={styles.info_container}>
        <Text style={styles.username}>{data.username}</Text>
        <Text style={styles.context}>{data.context}</Text>
      </View>

      <View>
        <Text>{data.date}</Text>
      </View>
    </View>
  ) : (
    <View></View>
  );
}
export default TalkRoomCard;
