import React, {useEffect, useCallback} from 'react';
import {Text, View, ScrollView, Image, Button, TouchableOpacity, StyleSheet} from 'react-native';

//import {MEALS} from '../data/dummy-data';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

import DefaultText from '../components/DefaultText';
import { toggleFavorite } from '../store/actions/mealsAction';

const Listitem = (props) => {
    return (
        <View style={styles.listitem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
};

const MealDetailScreen = (props) => {

    const mealId = props.navigation.getParam('mealId');

    const availableMEALS = useSelector(state => state.meals.meals);

    const currentMealisFavorite = useSelector(state => 
        state.meals.favoriteMeals.some(meal => meal.id === mealId)
    );

    const selectedMeal = availableMEALS.find( m => m.id === mealId);

    //const selectedMeal = MEALS.find( m => m.id === mealid);    
    

    //-------------------------------------
    /*    
    //1) when selectedMeal change run this method

    //2) because this way works as ComponentDidMount 
    //   this way has latency.. so we should find a better way
    
    useEffect( () => {
        props.navigation.setParams({ mealTitle: selectedMeal.title});    
    },[selectedMeal]);
     */

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(

        () => {            
            dispatch( toggleFavorite(mealId) );
        },
        [dispatch, mealId]

    );

    useEffect( () => {
        props.navigation.setParams({ toggleFav: toggleFavoriteHandler});
    },[toggleFavoriteHandler]);
    //-------------------------------------

    useEffect( () => {
        props.navigation.setParams({ isFav: currentMealisFavorite});
    },[currentMealisFavorite]);

    //-------------------------------------


    return (

        <ScrollView>

            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={ styles.details }>
                            <DefaultText>{selectedMeal.duration} min</DefaultText>
                            <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                            <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>

            <Text style={styles.title}>Ingredients</Text>
            {
                selectedMeal.ingredients.map( m => { 
                    return <Listitem key={m} >{m}</Listitem>
                 })            
            }

            <Text style={styles.title}>Steps</Text>            
            {
                selectedMeal.steps.map( m => { 
                    return <Listitem key={m} >{m}</Listitem>
                 })            
            }


            {/* <View style={styles.screen}>

                <Text>MealDetailScreen</Text>
                <Text>id: {mealid}</Text>
                <Text>title: {selectedMeal.title}</Text>
                
                <Button title="Go Back with Pop" onPress={ () => {
                    props.navigation.pop();
                }} /> 


                <Button title="Go Back with PopTop" onPress={ () => {
                    props.navigation.popToTop();
                }} />

                
                <TouchableOpacity activeOpacity={0.8} onPress={ () => { console.log('header right button clicked!');  }}>
                    <View style={styles.button}>                
                        <Ionicons name="ios-star" size={23} color="grey" />
                    </View>                        
                </TouchableOpacity> 

            </View> */}
            
        </ScrollView>
    );

};



MealDetailScreen.navigationOptions = (navigationData) => {

    //both the followings are sent from Mealitem in MealList
    const mealId = navigationData.navigation.getParam('mealId');    
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFav = navigationData.navigation.getParam('toggleFav');

    const isFav = navigationData.navigation.getParam('isFav');

    //const selectedMeal = MEALS.find( m => m.id === mealid);

    // const availableMEALS = useSelector(state => state.meals.meals);
    // const selectedMeal = availableMEALS.find( m => m.id === mealid);

    return {
       // headerTitle: () => <View><Text style={styles.title}>{selectedMeal.title}</Text></View>,
       headerTitle: () => <View><Text style={styles.title}>{mealTitle}</Text></View>,
       headerRight: () => 

            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item 
                        title='Favorite' 
                        //iconName='ios-star' 
                        iconName={ isFav === true ? 'ios-star' : 'ios-star-outline' }
                        onPress={ () => {
                             console.log('Marked as fav!');  
                             toggleFav();                          
                             }                            
                        }
                        //onPress={toggleFav}
                        />                      
            </HeaderButtons>        

    };
};

const styles = StyleSheet.create({
    // screen: {
    //     flex:1,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 14,
        textAlign: 'center',
        color: Platform.OS === 'android' ? 'white' : 'black' 
    },
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
    },
    listitem: {
        marginVertical: 2,
        marginHorizontal: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 5
    }
    // buttonText: {
    //     color: 'white',
    //     fontSize: 'open-sans',
    //     fontSize: 18
    // },
});



export default MealDetailScreen;