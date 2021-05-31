import React from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity, Platform} from 'react-native';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';


//import { Ionicons } from '@expo/vector-icons';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

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

// CategoriesScreen.navigationOptions = {
//     headerTitle: () => <Text>Meal Categories</Text>,
//     //headerTitle: () => <View><Text>Meal Categories</Text></View>,
//     headerLeft: () => 
//         <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//             <Item 
//                 title='Menu' 
//                 iconName='ios-menu' 
//                 onPress={ () => {
//                     console.log('menu clicked!');
//                 }}
//             />    
//         </HeaderButtons>
    
// };


CategoriesScreen.navigationOptions = (navigationData) => {

    return {

        headerTitle: () => <View><Text style={styles.title}>Meal Categories</Text></View>,
        
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
    title: {
        color: Platform.OS === 'android' ? 'white' : 'black' ,
        fontSize: 18
    }
    // gridItem: {
    //     flex: 1,
    //     margin: 15,
    //     height: 150
    // }
});


export default CategoriesScreen;