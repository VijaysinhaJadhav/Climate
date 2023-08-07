import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import Details from './src/Details';
import Test from './src/Test';
import Scanner from './src/Scanner';
import SignUpScreen from './src/SignUpScreen';
import LoginScreen from './src/LoginScreen';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState();
  console.log('user :', user);
  const onAuthStateChanged = user => {
    setUser(user);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* {user ? ( */}
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="Home" component={Home} />
          {/* ) : ( */}
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          {/* )} */}
          <Stack.Screen name="Details" component={Details} />
          {/* <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>  */}

          {/* <Stack.Screen name='Test' component={Test}/>  */}
          {/*<Stack.Screen name='Scanner' component={Scanner}/>  */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
