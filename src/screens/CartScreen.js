import React from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const CartScreen = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // Function to count occurrences of each product in the cart
  const getProductCount = (productId) => {
    return cart.cart.filter(item => item.id === productId).length;
  };

  // Function to get unique products with count
  const getUniqueProducts = () => {
    const uniqueProducts = [];
    cart.cart.forEach(item => {
      const existingProduct = uniqueProducts.find(p => p.id === item.id);
      if (!existingProduct) {
        uniqueProducts.push({ ...item, count: getProductCount(item.id) });
      }
    });
    return uniqueProducts;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="back" size={35} color="darkgreen" />
        </TouchableOpacity>
        <Text style={styles.heading}>My Cart</Text>
      </View>

      {cart.cart.length > 0 ? (
        <FlatList
          data={getUniqueProducts()}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>
                  {item.count > 1 ? `${item.title} (${item.count})` : item.title}
                </Text>
                <Text style={styles.productPrice}>{`$${item.price.toFixed(2)}`}</Text>
              </View>
              <TouchableOpacity onPress={() => handleRemoveFromCart(item.id)}>
                <Icon name="delete" size={26} color="antiquewhite" />
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <View style={styles.emptyCartContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.emptyCartText}>Add to Cart</Text>
            <Icon name="shoppingcart" size={230} color="darkgreen" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'cream',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'darkgreen',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'darkgreen',
    marginLeft: '30%',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'darkgreen',
    backgroundColor: 'darkslategray',
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 4,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'antiquewhite',
  },
  productPrice: {
    fontSize: 16,
    color: 'limegreen',
  },
  emptyCartContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%',
  },
  emptyCartText: {
    fontSize: 50,
    marginTop: 20,
    color: 'darkgreen',
  },
});

export default CartScreen;
