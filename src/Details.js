import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_KEY } from './Constants'

const Details = ({ route }) => {
    const { name } = route.params
    const [data, setData] = useState()
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setData(res)
            })
            .catch(err => console.log(err))
    }, [])
    const Details = ({title,value}) => {
        return(
            <View>
                <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 10 }}>{title}: {value}</Text>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../ApiProject/assets/images/backImage1.jpg')} style={{ flex: 1 }} >
                {
                    data ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Details title="Country" value={data['sys']['country']}/>
                        <Details title="City" value={name}/>
                        <Details title="Lattitude" value={data['coord']['lat']}/>
                        <Details title="Longitude" value={data['coord']['lon']}/>
                        <Details title="Humidity" value={data['main']['humidity']}/>
                        <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 10 }}>Temperature {data['main']['temp'].toFixed(2)}&deg;</Text>
                    </View> : null
                }
            </ImageBackground>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({})