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

  console.log('Cart:', cart);

  return (
    <View style={styles.container}>
            <View style={{flexDirection: 'row',alignItems:'center',borderBottomColor: 'darkgreen', borderBottomWidth: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
  <Icon name="back" size={35} color="darkgreen" />
</TouchableOpacity>
      <Text style={styles.heading}>My Cart</Text>
      </View>
      
        {cart.cart.length > 0 ? (
       <FlatList
       data={cart.cart}
       keyExtractor={(item) => item.id.toString()}
       renderItem={({ item }) => (
         <View style={styles.cartItem}>
           <Image source={{ uri: item.image }} style={styles.productImage} />
           <View style={styles.productInfo}>
             <Text style={styles.productTitle}>{item.title}</Text>
             <Text style={styles.productPrice}>{`$${item.price.toFixed(2)}`}</Text>
           </View>
           <TouchableOpacity 
             onPress={() => handleRemoveFromCart(item.id)}>
           <Icon name="delete" size={26} color="antiquewhite" />
         </TouchableOpacity>
         </View>
       )}
     />
      ) : (
        <View style={{alignItems:'center', justifyContent:'center', marginTop:'50%'}}>
                  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{  fontSize: 50, marginTop: 20, color: 'darkgreen' }}>
          Add to Cart
        </Text>
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
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'darkgreen',
    marginLeft:'30%'
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop:10,
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
});

export default CartScreen;
