import { 
    View,
    Text,
    Image,
    TouchableWithoutFeedback, 
} from "react-native";
import styles from "../../styles";

const ProductCard = ({product, onSelect}) => {


    return(
    <TouchableWithoutFeedback  onPress={onSelect}>
        
        <View style={styles.productCard}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{uri: product.image}}
                />
            </View>

            <View style={styles.nameAndPrice}>
                <Text style={styles.pName}>
                    {product.title}
                </Text>
                <Text style={styles.pPrice}>
                    {product.price}$
                </Text>
            </View>
        </View>

    </TouchableWithoutFeedback>
    );
};

export default ProductCard;