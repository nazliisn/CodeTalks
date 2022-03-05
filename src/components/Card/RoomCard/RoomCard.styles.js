import {StyleSheet, Dimensions} from 'react-native';
import color from '../../Color/Color.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    padding: 5,
    borderRadius: 20,
    borderWidth: 1 / 3,
    height: Dimensions.get('window').height / 5,
    justifyContent: 'center',
    borderColor: color.title.color,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 25,
    alignSelf: 'center',
    color: color.title.color,
    fontWeight: 'bold',
  },
});
