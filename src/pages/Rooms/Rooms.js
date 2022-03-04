import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import RoomModal from '../../components/Modal';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import RoomCard from '../../components/Card/RoomCard';
import parseContentData from '../../components/utils/parseContentData';

function Rooms({navigation}) {
  const [visible, setVisible] = useState(false);
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    database()
      .ref('Rooms')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parse = parseContentData(contentData || {});
        setRoomList(parse);
      });
  }, []);

  const handleRoomPress = room => {
    navigation.navigate('TalkRoomPage', room);
  };

  const handlePress = () => {
    return setVisible(!visible);
  };

  const handleSend = roomText => {
    handlePress();
    sendContent(roomText);
  };
  const renderRoom = ({item}) => {
    return <RoomCard rooms={item} onRoomPress={handleRoomPress}></RoomCard>;
  };

  const sendContent = content => {
    const user = auth().currentUser.email;
    const data = {
      roomCreator: user.split('@')[0],
      room: content,
    };
    database().ref('Rooms').child(content).push(data);
  };

  return (
    <>
      <FlatList
        data={roomList}
        renderItem={renderRoom}
        numColumns={2}></FlatList>
      <RoomModal
        visible={visible}
        onClose={handlePress}
        onSend={handleSend}
        textPlaceholder="Oda Adı.."></RoomModal>
      <FloatingButton
        iconName={'plus'}
        onPressFloating={handlePress}></FloatingButton>
    </>
  );
}
export default Rooms;
