import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        borderColor: '#bdbdbd',
        borderWidth: 1,
        margin: 10,
        flexDirection: 'row',
        borderRadius: 20,
    },
    image: {
        width: 330,
        height: height / 2.5,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        borderRadius: 20,
    },
    body_container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#823E1D',
        alignSelf: 'center'
    },
    area: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#823E1D',
        alignSelf: 'center'
    },
    description: {
        fontSize: 14,
        color: 'black',
    },
    youtubeButton: {
        backgroundColor: 'red',
        flex: 1,
        height: 40,
        alignItems: 'center',
        justifyContent: "center",
        margin: 10,
        borderRadius: 20,
    },
    youtubeButtonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        margin: 6,
    },
});