import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        borderRadius: 20,
    },
    image: {
        height: height / 4,
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding: 5,
        backgroundColor: '#00000080',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
});