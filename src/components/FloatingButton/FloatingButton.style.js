import {StyleSheet} from 'react-native';
import color from '../Color/Color.style';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: color.title.color,
    borderRadius: 50,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1 / 2,
    borderColor: 'white',
  },
});
