import React from 'react';
import {Text, View, ScrollView, Image, Button, TouchableOpacity, StyleSheet} from 'react-native';

import {MEALS} from '../data/dummy-data';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

import DefaultText from '../components/DefaultText';


const Listitem = (props) => {
    return (
        <View style={styles.listitem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
};

const MealDetailScreen = (props) => {

    const mealid = props.navigation.getParam('mealid');
    const selectedMeal = MEALS.find( m => m.id === mealid);

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


    const mealid = navigationData.navigation.getParam('mealid');
    const selectedMeal = MEALS.find( m => m.id === mealid);

    return {
        headerTitle: () => <View><Text style={styles.title}>{selectedMeal.title}</Text></View>,
        headerRight: () => 

            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item 
                        title='Favorite' 
                        iconName='ios-star' 
                        onPress={ () => {
                            console.log('Marked as fav!');
                        }}
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