import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/login';
import Registro from '../screens/auth/register';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }} // Oculta el encabezado si lo deseas
      />
      <Stack.Screen 
        name="Registro" 
        component={Registro} 
        options={{ title: 'Registro' }} // Puedes personalizar el título
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
