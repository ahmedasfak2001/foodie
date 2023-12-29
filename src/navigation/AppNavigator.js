import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importing screens
import WelcomeScreen from '../screens/WelcomeScreen';
import RecipeListScreen from '../screens/RecipeListScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Welcome' component={WelcomeScreen}/>
            <Stack.Screen name='RecipeList' component={RecipeListScreen}/>
            <Stack.Screen name='RecipeDetail' component={RecipeDetailsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})