import { 
    FlatList, 
    SafeAreaView, 
    ActivityIndicator
} from "react-native";
import styles from "../../styles";

//Hooks

// Components
import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";



const Products = ({navigation}) => {

    const {loading, data, error} = useFetch('https://fakestoreapi.com/products?limit=10')


    const handleProductSelect = (id) => {
        navigation.navigate('Details', {id})
    }


    if(loading){
        return <ActivityIndicator size='large' />
    }

    if(error){
        return <Text>{error}</Text>
    }

    


    const RenderProduct = ({item}) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)}  />
    

    return(
        <SafeAreaView style={styles.container}>

            <FlatList
                style={{
                    width: '100%',
                }}
                contentContainerStyle={styles.flatlist}
                data={data}
                renderItem={RenderProduct}
                showsVerticalScrollIndicator={false}
            />

        </SafeAreaView>
    )
}

export default Products;