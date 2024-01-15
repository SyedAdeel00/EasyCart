import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
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
});

export default MyCard;
