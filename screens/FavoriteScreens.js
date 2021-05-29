import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const FavoriteScreens = (props) => {

    return (
        <View style={styles.screen}>
            <Text>FavoriteScreens</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});



export default FavoriteScreens;