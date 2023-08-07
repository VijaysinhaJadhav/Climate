import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Card = ({name, image, navigation}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
      }}
      onPress={() => navigation.navigate('Details', {name})}>
      <ImageBackground
        source={image}
        style={{height: 150, width: 150, opacity: 0.6}}
        imageStyle={{borderRadius: 10}}
      />
      <View style={{position: 'absolute'}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({});
