import React from 'react';
import { Platform }  from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import FilterScreen from '../screens/FilterScreen';

import Colors  from '../constants/Colors';




const defaultStackNavOptions = {

    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
                                    
};

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,

            // navigationOptions: {
            //     headerTitle: '--MEAL CATEGORIES--',
            //     // headerStyle: {
            //     //     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            //     // },
            //     // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
                                
            // }
        },
        CategoryMeals: {
            screen: CategoryMealsScreen,
            // navigationOptions: {

            //     headerStyle: {
            //         backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            //     },
            //     headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
                                
            // }
        },
        MealDetail: MealDetailScreen
    },
    {
        initialRouteName: 'Categories',
        mode: 'modal',
        defaultNavigationOptions: defaultStackNavOptions
    }
);


const FavNavigator =  createStackNavigator(
    {
        Favorites: {
            screen: FavoriteScreen
        },
        MealDetail: {
            screen: MealDetailScreen
        }
    },
    {
        initialRouteName: 'Favorites',
        mode: 'modal',
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const tabScreenConfig = {  

      Meals:   { 
          screen: MealsNavigator,             
          navigationOptions: {
              tabBarIcon: (tabInfo) => {
                  return (
                      <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
                  );                     
              },
              tabBarColor: Colors.primaryColor                        
          }
      },
      Favorites: {
          screen: FavNavigator,            
          navigationOptions: {   
              title: 'Favooo!',
              tabBarIcon: (tabInfo) => {
                  return (
                      <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
                  );     
              },
              tabBarColor: Colors.accentColor  
          }
      }
};


const MealsFavTabNavigator =  
    Platform.OS === 'android' 
    ?  createMaterialBottomTabNavigator(
                tabScreenConfig,
                {
                    activeColor : 'white',
                    shifting: true
                }
        )  
    :  createBottomTabNavigator(
                tabScreenConfig,
                {
                    tabBarOptions: {
                        activeTintColor: Colors.accentColor
                    }
                }    
        );

const FilterNavigator = createStackNavigator(
    {
        Filters: FilterScreen
    }
);

const MainNavigator = createDrawerNavigator({
    MealsFav: MealsFavTabNavigator,
    Filters: FilterNavigator
});

//export default createAppContainer(MealsNavigator);
//export default createAppContainer(MealsFavTabNavigator);
export default createAppContainer(MainNavigator);
