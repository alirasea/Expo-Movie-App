import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import {colors} from '../colors/colors'


const Home = ()=> {
    return(
    <View> 
        <Text style = {styles.text}>
           Open up App.js to start working on your app! 
        </Text>
    </View>
    )
}

export default Home;


const styles = StyleSheet.create({
 text :{
    color: colors.red,
    backgroundColor: colors.yellow,
 }
})