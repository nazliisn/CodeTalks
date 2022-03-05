import {StyleSheet, Dimensions} from 'react-native';
import color from '../../Color/Color.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1 / 3,
    height: Dimensions.get('window').height / 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 17,
    color: color.title.color,
    fontWeight: 'bold',
    paddingBottom: 5,
  },

  context: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
