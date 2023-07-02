import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const Home = (props) => {
    const cities = [
        {
            name: 'New Delhi',
            image: require('../../ApiProject/assets/images/newDelhi.jpg')
        },
        {
            name: 'New York',
            image: require('../../ApiProject/assets/images/newYork.jpg')
        },
        {
            name: 'London',
            image: require('../../ApiProject/assets/images/london.jpg')
        },
        {
            name: 'New Jersey',
            image: require('../../ApiProject/assets/images/newJersey.jpg')
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../ApiProject/assets/images/backImage1.jpg')} style={{ flex: 1 }} />
            <View style={{ position: 'absolute' }}>
                <Text style={{ marginBottom: 10 }}>Hello</Text>
                <FlatList
                    horizontal
                    data={cities}
                    renderItem={({ item }) => (
                        <Card image={item.image} name={item.name} navigation={props.navigation} />
                    )}
                />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({

})