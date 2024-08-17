import { Text, View, ActivityIndicator, Image } from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import styles from "./Details.styles";

const Details = ({route}) => {
    
    const {id} = route.params;

    const {loading, data, error} = useFetch(`https://fakestoreapi.com/products/${id}`)
    
    if(loading){
         return <ActivityIndicator size='large' />
    }
    if(error){
        return <Text>{error.message}</Text>
    }


        return(
            <View style={styles.DetailsContainer}>
                <View style={styles.DetailsImageContainer} >
                    <Image
                        source={{uri: data.image}}
                        style={styles.DetailsImage}
                    />
                </View>
                <View style={styles.DetailContent}>
                    <Text style={styles.DetailsTitle} >
                        {data.title}
                    </Text>
                    <Text style={styles.DetailsDesc} >
                        {data.description}
                    </Text>
                    <Text style={styles.DetailsPrice} >
                        {data.price}$
                    </Text>
                </View>
            </View>
        )
};

export default Details;