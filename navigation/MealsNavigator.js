import React from 'react';
import { Text, View, Platform }  from 'react-native';

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
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
                                    
};

const MealsStackNavigator = createStackNavigator(
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
        MealDetail: {
            screen: MealDetailScreen
        }
    },
    {
        initialRouteName: 'Categories',
        mode: 'modal',
        defaultNavigationOptions: defaultStackNavOptions
    }
);


const FavStackNavigator =  createStackNavigator(
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
          screen: MealsStackNavigator,             
          navigationOptions: {
              tabBarIcon: (tabInfo) => {
                  return (
                      <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
                  );                     
              },
              tabBarColor: Colors.primaryColor,
              tabBarLabel: 
                    Platform.OS === 'android' ?
                    <Text style={{ fontFamily: 'open-sans'}}>Meals!!!</Text> :
                    'Meals'

          }
      },
      Favorites: {
          screen: FavStackNavigator,            
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
                    shifting: true,
                    barStyle: {
                        backgroundColor: Colors.primaryColor
                    }
                }
        )  
    :  createBottomTabNavigator(
                tabScreenConfig,
                {
                    tabBarOptions: {
                        labelStyle: {
                            fontFamily: 'open-sans-bold'
                        },
                        activeTintColor: Colors.accentColor
                    }
                }    
        );

const FilterStackNavigator = createStackNavigator(
    {
        Filters: FilterScreen
    },
    {
        initialRouteName: 'Filters',
        mode: 'modal',

        // navigationOptions: {
        //     drawerLabel:'Filters!!'
        // },

        defaultNavigationOptions: defaultStackNavOptions
    }
);

const MainDrawerNavigator = createDrawerNavigator(
    {
        MealsFav: MealsFavTabNavigator,
        //Filters : FilterStackNavigator
        Filters: {
            screen: FilterStackNavigator,            
            navigationOptions: {   
                title: 'Filters!'
            }
        }        
    },
    {
        contentOptions: {
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-bold',
                fontSize: 16
            }
        }
    } 
);

//export default createAppContainer(MealsNavigator);
//export default createAppContainer(MealsFavTabNavigator);
export default createAppContainer(MainDrawerNavigator);
