import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent:"center"
    },
    productCard:{
        width: width * 0.80,
        height: 320,
        backgroundColor: "#252525",
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "space-around",
        padding: 5,
        marginBottom: 10,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10
    },
    imageContainer:{
        minWidth: "60%",
        height: "auto",
        borderRadius: 13,
        backgroundColor: "#f5f5f5"
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    nameAndPrice:{
        width: "100%",
        height: 80,
        flexDirection: "column",
        justifyContent: "space-evenly",
        width:"90%"
    },
    pName:{
        color: "#f5f5f5",
        fontWeight: '700',
        fontSize: 15,
    },
    pPrice:{
        color: "#FF9100",
        fontWeight: "800",
        fontSize: 15
    },
    flatlist:{
        width: "100%",
        alignItems: 'center',
    }
})

export default styles;