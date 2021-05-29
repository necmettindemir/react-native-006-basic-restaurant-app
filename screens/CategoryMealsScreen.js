import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

import Mealitem from '../components/Mealitem';

import { CATEGORIES, MEALS } from '../data/dummy-data';


const CategoryMealsScreen = (props) => {

    const renderMealitem= (itemData) => {
        return (
            // <View>
            //      <Text>{itemData.item.title}</Text>                 
            // </View>

            <Mealitem 
                title={itemData.item.title} 
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}      
                affordability={itemData.item.affordability} 
                imageUrl={itemData.item.imageUrl}
                onSelect={ () => {
                    props.navigation.navigate(
                            { 
                                routeName: 'MealDetail',
                                params: { mealid: itemData.item.id}
                            });
                }}
            />

        );
    };

    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find( c => c.id == catId);

    const displayedMeals = MEALS.filter( 
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (

        <View style={styles.screen}>

            <FlatList 
                data={displayedMeals} 
                keyExtractor={ (item, index) => item.id }
                renderItem={renderMealitem}
                style={{width:'100%'}}
            />

        </View>
        

        // <View style={styles.screen}>
        //     <Text>CategoryMealsScreen</Text>
        //     <Text>id: {selectedCategory.id}</Text>            
        //     <Text>title: {selectedCategory.title}</Text>            

        //     <Button title="Go to categories" onPress={ () => { 
        //             props.navigation.navigate({routeName: 'Categories' });
        //             //props.navigation.push( 'CategoryMeals' );
        //     }} />


        //     <Button title="Go details" onPress={ () => { 
        //             props.navigation.navigate({routeName: 'MealDetail' });                    
        //         } } />

        //     <Button title="Go Back" onPress={ () => {
        //         props.navigation.goBack();
        //     }} />

        // </View>
    );

};

// CategoryMealsScreen.navigationOptions = {
//     headerTitle = ''
// };

CategoryMealsScreen.navigationOptions = (navigationData) => {
    //console.log('navigationData: ',navigationData);

    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find( c => c.id == catId);

    return {
        headerTitle: selectedCategory.title

    };
};

//-----

//-----


const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default CategoryMealsScreen;