import {StyleSheet, Dimensions} from 'react-native';
import color from '../../../components/Color/Color.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background.backgroundColor,
  },
  header_container: {
    height: Dimensions.get('window').height / 2,
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    color: '#ba2d65',
    alignSelf: 'center',
  },
  info_container: {},
});
