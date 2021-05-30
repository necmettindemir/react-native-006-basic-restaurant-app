import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Mealitem from '../components/Mealitem';

const MealList = (props) => {


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


    return (
        
        <View style={styles.list}>
            <FlatList 
                data={props.listData} 
                keyExtractor={ (item, index) => item.id }
                renderItem={renderMealitem}
                style={{width:'100%'}}
            />
        </View>

    );

};

const styles = StyleSheet.create({
    list: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealList;



