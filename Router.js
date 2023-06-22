import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './src/pages/Categories/Categories';
import Meals from './src/pages/Meals/Meals';
import Details from './src/pages/Details/Details';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesPage" component={Categories} options={{
          title: 'Categories',
          headerStyle: { backgroundColor: '#F2AE30' },
          headerTitleStyle: { color: 'white' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="MealsPage" component={Meals} options={{
          title: 'Meals',
          headerStyle: { backgroundColor: '#F2AE30' },
          headerTitleStyle: { color: 'white' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="DetailsPage" component={Details} options={{
          title: 'Details',
          headerStyle: { backgroundColor: '#F2AE30' },
          headerTitleStyle: { color: 'white' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
