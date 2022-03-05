import {StyleSheet, Dimensions} from 'react-native';
import color from '../../components/Color/Color.style';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fce4ec',
    flex: 1,
  },
  createRoomText_container: {
    borderWidth: 1,
    margin: 15,
    borderColor: color.title.color,
    borderRadius: 10,
    borderStyle: 'dashed',
  },
  createRoomText: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: color.title.color,
    padding: 5,
  },
});
