import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <ProductItem item={itemData.item} />}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  title: "All Products",
};

export default ProductsOverviewScreen;
