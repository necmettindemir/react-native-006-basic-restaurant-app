import React from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';

import {MEALS} from '../data/dummy-data';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

const MealDetailScreen = (props) => {

    const mealid = props.navigation.getParam('mealid');
    const selectedMeal = MEALS.find( m => m.id === mealid);

    return (
        <View style={styles.screen}>
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


        </View>
    );

};



MealDetailScreen.navigationOptions = (navigationData) => {


    const mealid = navigationData.navigation.getParam('mealid');
    const selectedMeal = MEALS.find( m => m.id === mealid);

    return {
        headerTitle: () => <View><Text>{selectedMeal.title}</Text></View>,
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
            
            //  <Button title=""  onPress={  () => { console.log('header right button clicked!');  } }>                    
            //      <Ionicons name="md-add" size={23} color="red" />
            //  </Button>

            // <View>
            //     <TouchableOpacity activeOpacity={0.8} onPress={ () => { console.log('header right button clicked!');  }}>
            //         <View style={styles.button}>                
            //             <Ionicons name="ios-star" size={33} color="red" />
            //         </View>                        
            //     </TouchableOpacity>
            // </View>

             //<Button title="heeyo"></Button>

    };
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    // buttonText: {
    //     color: 'white',
    //     fontSize: 'open-sans',
    //     fontSize: 18
    // },
});



export default MealDetailScreen;