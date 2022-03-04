import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import Rooms from './pages/Rooms';
import Talk_Room from './pages/Talk_Room';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Router() {
  const [userSession, setUserSession] = useState();
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login}></Stack.Screen>
        <Stack.Screen name="SignPage" component={Sign}></Stack.Screen>
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {!userSession ? (
        <AuthStack />
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="RoomsPage"
            component={Rooms}
            options={{
              title: 'Odalar',
              headerShown: true,
              headerTitleAlign: 'center',
              headerTintColor: '#ff6f00',
              headerRight: () => (
                <Icon
                  name={'logout'}
                  size={30}
                  onPress={() => {
                    auth().signOut();
                  }}></Icon>
              ),
            }}></Stack.Screen>
          <Stack.Screen
            name="TalkRoomPage"
            component={Talk_Room}></Stack.Screen>
        </Stack.Navigator>
      )}
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
export default Router;
