import React, {useState, useEffect, useCallback} from 'react';
import {Text,Button,View, StyleSheet, Switch, Platform} from 'react-native';
import Colors from '../constants/Colors';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/mealsAction';


const FilterSwitch = (props) => {
    return (
        <View style={styles.filterContainer}>
        <Text>{props.label}</Text>

            <Switch                         
                trackColor={{true: Colors.switchONcolor, false: 'grey'}}
                //thumbColor={ Platform.OS === 'android' ? Colors.switchONcolor : '' }
                value={props.state}  
                onValueChange={ newValue => { props.onChange(newValue); }} 
            />

        </View>
    );
};

const FilterScreen = (props) => {

        const {navigation} = props;

        const [isGlutenFree, setIsGlutenFree] = useState(false);
        const [isLactoseFree, setIsLactoseFree] = useState(false);
        const [isVegan, setIsVegan] = useState(false);
        const [isVegeterian, setIsVegeterian] = useState(false);

        const dispatch = useDispatch();

        const saveFilters = useCallback( () => {

            const appliedFilters = {
                glutenFree: isGlutenFree,
                lactoseFree: isLactoseFree,
                vegan: isVegan,
                vegeterian: isVegeterian
            };

            //console.log('appliedFilters: ', appliedFilters);
            dispatch( setFilters(appliedFilters) );
        
        }, [isGlutenFree, isLactoseFree, isVegan, isVegeterian, dispatch] );


        useEffect( () => {
            navigation.setParams({save: saveFilters});
        },[saveFilters]);

        return (
            <View style={styles.screen}>
                <Text style={styles.title}>Available Filters</Text>
               
                {/* <View style={styles.filterContainer}>
                    <Text>Gluten-Free</Text>

                    <Switch                         
                        trackColor={{true: Colors.switchONcolor, false: 'grey'}}                       
                        value={isGlutenFree}  
                        onValueChange={ newValue => { setIsGlutenFree(newValue); }} 
                    />

                </View> */}

                <FilterSwitch 
                    label='Gluten-Free'
                    state={isGlutenFree}
                    onChange={ newValue => { setIsGlutenFree(newValue); } }
                />


                <FilterSwitch 
                    label='Lactose-Free'
                    state={isLactoseFree}
                    onChange={ newValue => { setIsLactoseFree(newValue); } }
                />


                <FilterSwitch   
                    label='Vegan'
                    state={isVegan}
                    onChange={ newValue => { setIsVegan(newValue); } }
                />

                <FilterSwitch 
                    label='Vegeterian'
                    state={isVegeterian}
                    onChange={ newValue => { setIsVegeterian(newValue); } }
                />

            </View>
        );
};

// FilterScreen.navigationOptions = {
//     headerTitle: 'Filter Meals'
// };

FilterScreen.navigationOptions = (navigationData) => {

    return {

        headerTitle: () => <View><Text>Filter Meals</Text></View>,
        
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
            </HeaderButtons>,

        headerRight: () => 

            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title='Save' 
                    iconName='ios-save' 
                    onPress={ () => {
                        console.log('Save clicked!!');       

                        navigationData.navigation.getParam('save')();
                                    }
                    }
                    />                      
            </HeaderButtons>

    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,      
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'   
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',

        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth:1
    }
});

export default FilterScreen;