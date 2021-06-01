import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';


import MealList from '../components/MealList';
import {useSelector} from 'react-redux';

import DefaultText from '../components/DefaultText';

const FavoriteScreen = (props) => {

    // const favMEALS = useSelector(state => state.meals.meals);    
    // const favMeals = favMEALS.filter( m => m.id === 'm1' || m.id==='m2');

    const favMeals = useSelector(state => state.meals.favoriteMeals);        

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.content}>
                <DefaultText>
                    No favorite meals found.. Start adding some!
               </DefaultText>
            </View>
        );
    }

    return (
        <MealList 
            listData={favMeals} 
            navigation={props.navigation} 
        />
    );
};


FavoriteScreen.navigationOptions = (navigationData) => {

    return {

        headerTitle: () => <View><Text>Four Favorites</Text></View>,
        
        headerLeft: () => 

            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item 
                        title='Menu' 
                        iconName='ios-menu' 
                        onPress={ () => {
                            console.log('Menu clicked!!');

                            navigationData.navigation.toggleDrawer();
                        }}
                        />                      
            </HeaderButtons>

    };
};





const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        margin:5,
        padding: 10
    }
});



export default FavoriteScreen;