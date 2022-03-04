import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    padding: 5,
    borderRadius: 20,
    borderWidth: 1 / 3,
    height: Dimensions.get('window').height / 5,
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    alignSelf: 'center',
    color: '#ff6f00',
    fontWeight: 'bold',
  },
});
