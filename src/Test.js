import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Test = ({ navigation }) => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Scanner')}>
                <Text>Test</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Test

const styles = StyleSheet.create({})