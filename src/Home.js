import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import React from 'react';
import Card from './Card';
import auth from '@react-native-firebase/auth';

const Home = props => {
  const cities = [
    {
      name: 'New Delhi',
      image: require('../assets/images/newDelhi.jpg'),
    },
    {
      name: 'New York',
      image: require('../assets/images/newYork.jpg'),
    },
    {
      name: 'London',
      image: require('../assets/images/london.jpg'),
    },
    {
      name: 'New Jersey',
      image: require('../assets/images/newJersey.jpg'),
    },
  ];
  const handleLogout = () => {
    auth()
      .signOut()
      .then(response => Alert.alert('User signed out!'))
      .catch(error => {
        Alert.alert('Not able to log out');
      });
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/backImage1.jpg')}
        style={{flex: 1}}
      />
      <View style={{position: 'absolute', alignSelf:'flex-end'}}>
          <TouchableOpacity onPress={handleLogout} style={{margin:16}}>
            <Image
              source={require('../assets/images/power-off.png')}
              style={{height: 30, width:30, tintColor:'blue'}}
            />
          </TouchableOpacity>
        </View>
      <View style={{position: 'absolute', alignSelf: 'center'}}>
        {/* <Text style={{ marginBottom: 10 }}>hi</Text> */}
        <View style={{marginTop: 40}}>
          <Text>Hello</Text>
        </View>
        <FlatList
          data={cities}
          renderItem={({item}) => (
            <Card
              image={item.image}
              name={item.name}
              navigation={props.navigation}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
