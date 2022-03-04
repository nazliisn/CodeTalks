import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff6f00',
  },
  header_container: {
    height: Dimensions.get('window').height / 2,
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    color: '#e4d2c5',
    alignSelf: 'center',
  },
  info_container: {},
});
