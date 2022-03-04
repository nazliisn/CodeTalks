import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import styles from '../Login/Login.styles';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import authErrorMessage from '../../../components/utils/authErrorMessage';
import {showMessage} from 'react-native-flash-message';

function Sign({navigation}) {
  const initialFormValue = {
    username: '',
    password: '',
    repassword: '',
  };
  const handleBackButton = () => {
    return navigation.navigate('LoginPage');
  };

  const handleFormSubmit = async formValue => {
    try {
      if (!formValue.username || !formValue.password || !formValue.repassword) {
        showMessage({
          message: 'Lütfen Bilgilerinizin Hepsini Doldurun!',
          type: 'danger',
        });
        return;
      }
      if (formValue.repassword !== formValue.password) {
        showMessage({
          message: 'Şifreler Eşleşmiyor',
          type: 'danger',
        });
        return;
      } else {
        await auth().createUserWithEmailAndPassword(
          formValue.username,
          formValue.password,
          formValue.repassword,
        );
      }
    } catch (error) {
      showMessage({
        message: authErrorMessage(error),
        type: 'danger',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.title}>CodeTalks</Text>
      </View>

      <Formik initialValues={initialFormValue} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <View style={styles.info_container}>
            <Input
              title={'E-postanızı Giriniz'}
              values={values.username}
              onChange={handleChange('username')}
            />
            <Input
              title={'Şifrenizi Giriniz'}
              values={values.password}
              onChange={handleChange('password')}
              isSecure={true}
            />
            <Input
              title={'Şifrenizi Tekrar Giriniz'}
              values={values.repassword}
              onChange={handleChange('repassword')}
              isSecure={true}
            />

            <Button name={'Kayıt Ol'} onButton={handleSubmit} />
            <Button
              name={'Geri'}
              onButton={handleBackButton}
              thema={'secondary'}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}
export default Sign;
