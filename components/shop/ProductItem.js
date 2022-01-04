import { StyleSheet, View, Image, Text, Button } from "react-native";

const ProductItem = (props) => {
  const { title, price } = props.item;
  return (
    <View>
      <Image />
      <Text>{title}</Text>
      <Text>${price}</Text>
      <View>
        <Button title="View Details" />
        <Button title="Add to Cart" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductItem;
