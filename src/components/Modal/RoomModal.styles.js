import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
  },
  container: {
    height: Dimensions.get('window').height / 3,
    backgroundColor: 'white',
    padding: 7,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button_container: {
    flex: 1,
  },
});
