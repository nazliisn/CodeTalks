import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './RoomModal.styles';
import Button from '../Button';
import Modal from 'react-native-modal';

function RoomModal({visible, onClose, onSend, textPlaceholder}) {
  const [roomText, setRoomText] = useState(null);

  const handleText = () => {
    if (!roomText) {
      return;
    } else {
      onSend(roomText);
      setRoomText('');
    }
  };

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <View style={styles.container}>
        <View style={styles.button_container}>
          <TextInput
            placeholder={textPlaceholder}
            onChangeText={setRoomText}></TextInput>
        </View>
        <Button name="Ekle" thema="primary" onButton={handleText}></Button>
      </View>
    </Modal>
  );
}
export default RoomModal;
