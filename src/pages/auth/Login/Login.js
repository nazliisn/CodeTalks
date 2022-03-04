import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import styles from './Login.styles';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import authErrorMessage from '../../../components/utils/authErrorMessage';
import {showMessage} from 'react-native-flash-message';

function Login({navigation}) {
  const initialFormValue = {
    username: '',
    password: '',
  };

  const handleLoginButton = async formValue => {
    try {
      if (!formValue.username || !formValue.password) {
        showMessage({
          message: 'Lütfen E-posta ve Şifrenizi giriniz',
          type: 'danger',
        });
        return;
      }
      await auth().signInWithEmailAndPassword(
        formValue.username,
        formValue.password,
      );
      navigation.navigate('RoomsPage');
    } catch (error) {
      showMessage({
        message: authErrorMessage(error),
        type: 'danger',
      });
    }
  };
  const handleSignButton = () => {
    return navigation.navigate('SignPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.title}>CodeTalks</Text>
      </View>
      <Formik initialValues={initialFormValue} onSubmit={handleLoginButton}>
        {({values, handleChange, handleSubmit}) => (
          <View style={styles.info_container}>
            <Input
              title={'E-postanızı Giriniz'}
              onChange={handleChange('username')}
              values={values.username}
            />
            <Input
              title={'Şifrenizi Giriniz'}
              isSecure={true}
              onChange={handleChange('password')}
              values={values.password}
            />
            <Button name={'Giriş yap'} onButton={handleSubmit} />
            <Button
              name={'Kayıt ol'}
              onButton={handleSignButton}
              thema={'secondary'}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}
export default Login;
