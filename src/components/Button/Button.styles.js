import {StyleSheet} from 'react-native';

const base_styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
  },
});

export default StyleSheet.create({
  ...base_styles,
  primary: {
    container: {
      ...base_styles.container,
      backgroundColor: '#ffa040',
    },
    name: {
      ...base_styles.name,
      color: 'white',
    },
  },
  secondary: {
    container: {
      ...base_styles.container,
      backgroundColor: 'white',
    },
    name: {
      ...base_styles.name,

      color: '#ffa040',
    },
  },
});
