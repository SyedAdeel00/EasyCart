import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import MyCard from '../components/MyCard';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        // console.error('Error fetching data:', error.message);
        Alert.alert('Error', error.message);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row',justifyContent:'space-between',alignItems:'center',borderBottomColor: 'darkgreen', borderBottomWidth: 1}}>
      <Text style={{fontSize:50, color:"darkgreen"}}>Our Products</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
  <Icon name="shopping-cart" size={30} color="darkgreen" />
</TouchableOpacity>

    </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MyCard product={item} />}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;
