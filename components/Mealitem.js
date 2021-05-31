import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import DefaultText from '../components/DefaultText';


const Mealitem = (props) => {

        return (
            <View style={styles.mealitem}>
                <TouchableOpacity onPress={ () => {props.onSelect();}}>
                    <View>

                        <View style={ {...styles.mealRow , ...styles.mealHeader} }>
                            <ImageBackground 
                                source={ {uri: props.imageUrl} } 
                                style={styles.bgImage}>

                                <View style={styles.titleContainer}>
                                    <Text style={styles.title} >{props.title}</Text> 
                                </View>
                                
                            </ImageBackground>                                                                                    
                        </View>

                        <View style={ {...styles.mealRow, ...styles.mealDetail} }>
                            <DefaultText>{props.duration} min</DefaultText>
                            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        );

};

const styles= StyleSheet.create({
    mealitem: {        
        height: 200,
        width:'100%',
        backgroundColor: '#f5f5f5',
        borderRadius:10,
        overflow: 'hidden',
        marginVertical: 10       
    },
    mealRow: {
        flexDirection: 'row',        
    },
    mealHeader: {
        height: '85%',        
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
        height:'100%',
        width:'100%',
        justifyContent: 'space-around'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        marginTop: 10,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,       
        color: 'white',        
        textAlign: 'center'
    }
});

export default Mealitem;