import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoriteScreen = (props) => {

    const favMeals = MEALS.filter( m => m.id === 'm1' || m.id==='m2');

    return (
        <MealList 
            listData={favMeals} 
            navigation={props.navigation} 
        />
    );

};


FavoriteScreen.navigationOptions = (navigationData) => {
    
    // const catId = navigationData.navigation.getParam('categoryId');
    // const selectedCategory = CATEGORIES.find( c => c.id == catId);

    return {
        headerTitle: "Your Favorites"

    };
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});



export default FavoriteScreen;