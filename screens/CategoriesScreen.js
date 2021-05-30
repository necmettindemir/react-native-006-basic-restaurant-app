import React from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../components/CustomHeaderButton';
//mport { Ionicons } from '@expo/vector-icons';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';


             {/* <Text> 12345Categories Screen</Text> */}

                 {/* <Button title="Go to category meals" onPress={ () => { 
                    props.navigation.navigate({routeName: 'CategoryMeals' });                    
                } } />  */}

const CategoriesScreen = (props) => {



        const renderGridItem = (itemData) => {
            return (
              <CategoryGridTile 
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={ () => {

                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    })

                }}
              />
            );
        };



        //console.log('props:', props);

        return (
            

                <FlatList                         
                        keyExtractor= { (item,index) => item.id }
                        data={CATEGORIES}
                        renderItem={renderGridItem}
                        numColumns={2} 
                />

            
        );

};

CategoriesScreen.navigationOptions = {
    headerTitle: () => <View><Text>Meal Categories</Text></View>,
    // headerLeft: () => 
    //     <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    //         <Item 
    //             title='Menu' 
    //             iconName='ios-menu' 
    //             onPress={ () => {
    //                 console.log('menu clicked!');
    //             }}
    //         />    
    //     </HeaderButtons>
    
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // gridItem: {
    //     flex: 1,
    //     margin: 15,
    //     height: 150
    // }
});


export default CategoriesScreen;