import {StyleSheet} from 'react-native';
import color from '../Color/Color.style';

const base_styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    borderRadius: 10,
    borderWidth: 1 / 4,
    borderColor: color.title.color,
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
      backgroundColor: color.background.backgroundColor,
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

      color: color.title.color,
    },
  },
});
