import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { useNavigation } from '@react-navigation/native';

const MyCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    Alert.alert('Added successful', '', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Cart'),
      },
    ]);
  };

  const handleShowDetails = () => {
    navigation.navigate('ProductDetailScreen', { product });
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <TouchableOpacity onPress={handleShowDetails}>
      <Text style={styles.title}>{product.title}</Text>
      </TouchableOpacity>
      <View style={{ alignItems: 'center', flexDirection: 'row' }}>
        <Text style={styles.price}>{`$${product.price.toFixed(2)}`}</Text>
        <View style={{ marginLeft: 10 }}>
          <TouchableOpacity onPress={handleAddToCart}>
            <Icon name="plussquare" size={26} color="antiquewhite" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'darkgreen',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    width: '45%',
    backgroundColor: 'darkslategray',
  },
  image: {
    width: '90%',
    height: 150,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'antiquewhite',
  },
  price: {
    fontSize: 17,
    color: 'limegreen',
  },
  showDetailsText: {
    marginTop: 5,
    color: 'antiquewhite',
    textDecorationLine: 'underline',
  },
});

export default MyCard;
