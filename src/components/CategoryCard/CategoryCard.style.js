import { StyleSheet } from 'react-native';

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
        width: 140,
        minHeight: 90,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        resizeMode: 'cover',
    },
    body_container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },
});