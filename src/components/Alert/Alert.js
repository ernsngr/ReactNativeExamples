import { 
    Alert, 
    Text 
} from "react-native";

const OneButtonAlert = (title, message,) => {
    Alert.alert({title}, {message}, [
        {
            text: "Cancel",
            onPress: () => console.log('cancel clikced'),
            style: "cancel"
        }
    ])
}

export default OneButtonAlert;