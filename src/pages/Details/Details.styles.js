import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    DetailsContainer:{
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    DetailsImageContainer:{
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d0d0d0',
        marginTop: 30,
        marginBottom: 30,
    },
    DetailsImage:{
        width: '50%',
        height: '90%',
        objectFit: 'contain',
        borderRadius: 20,
        backgroundColor: '#f5f5f5'
    },
    DetailContent:{
        width: '90%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    DetailsTitle:{
        width: '90%',
        height: 'auto',
        fontSize: 16,
        color: '#151515',
        padding: 10,
    },
    DetailsDesc:{
        width: '90%',
        height: 'auto',
        fontSize: 14,
        padding: 10,
        color: '#252525',
        textAlign: 'justify'
    },
    DetailsPrice:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FF9100',
        letterSpacing: 2,
        marginBottom: 10
    },
})

export default styles