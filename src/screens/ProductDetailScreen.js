import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const ProductDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
        <Icon name="left" size={35} color="darkgreen" />
      </TouchableOpacity>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  productImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  productTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'darkgreen',
  },
  productPrice: {
    fontSize: 22,
    color: 'darkgreen',
    marginBottom: 15,
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    lineHeight: 24,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1,
  },
});

export default ProductDetailScreen;
