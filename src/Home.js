import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const Home = (props) => {
    const cities = [
        {
            name: 'New Delhi', 
            image: require('../assets/images/newDelhi.jpg')
        },
        {
            name: 'New York',
            image: require('../assets/images/newYork.jpg')
        },
        {
            name: 'London',
            image: require('../assets/images/london.jpg')
        },
        {
            name: 'New Jersey',
            image: require('../assets/images/newJersey.jpg')
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/images/backImage1.jpg')} style={{ flex: 1 }} />
            <View style={{ position: 'absolute',alignSelf:'center'}}>
                {/* <Text style={{ marginBottom: 10 }}>hi</Text> */}
                <View style={{marginTop:40}}>
                    {/* <Text>Hello</Text> */}
                </View>
                <FlatList
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

