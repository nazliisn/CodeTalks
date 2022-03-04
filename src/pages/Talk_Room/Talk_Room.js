import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './Talk_Room.styles';
import TalkRoomModal from '../../components/Modal';
import FloatingButton from '../../components/FloatingButton';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import TalkRoomCard from '../../components/Card/TalkRoomCard';
import parseContentTextData from '../../components/utils/parseContentTextData';

function Talk_Room({route}) {
  const {roomName} = route.params;
  const [visible, setVisible] = useState(false);
  const [userText, setUserText] = useState([]);

  useEffect(() => {
    database()
      .ref('Rooms')
      .child(roomName)
      .on('value', snapshot => {
        const contextData = snapshot.val();
        const parse = parseContentTextData(contextData || {});
        setUserText(parse);
      });
  }, []);

  const handlePress = () => {
    return setVisible(!visible);
  };
  const handleData = content => {
    const user = auth().currentUser.email;
    const data = {
      username: user.split('@')[0],
      context: content,
      date: new Date().toISOString(),
    };
    database().ref('Rooms').child(roomName).push(data);
  };

  const renderUserText = ({item}) => {
    return <TalkRoomCard data={item} roomName={roomName}></TalkRoomCard>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={userText}
        renderItem={renderUserText}
        ListHeaderComponent={
          <View style={styles.createRoomText_container}>
            <Text style={styles.createRoomText}>{roomName} Odası Kuruldu!</Text>
          </View>
        }></FlatList>
      <TalkRoomModal
        visible={visible}
        onClose={handlePress}
        onSend={handleData}
        textPlaceholder=" Mesajın.."></TalkRoomModal>
      <FloatingButton
        iconName={'plus'}
        onPressFloating={handlePress}></FloatingButton>
    </View>
  );
}
export default Talk_Room;
