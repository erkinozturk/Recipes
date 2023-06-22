import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({ detail }) => {
    return (
        <View style={styles.container}>
            <View style={styles.body_container}>
                <Image style={styles.image} source={{ uri: detail.strMealThumb }} />
                <Text style={styles.title}>{detail.strMeal}</Text>
                <Text style={styles.area}>({detail.strArea})</Text>
                <View style={styles.line} />
                <Text style={styles.description}>{detail.strInstructions}</Text>
                <TouchableOpacity style={styles.youtubeButton} onPress={() => Linking.openURL(detail.strYoutube)}>
                    <Text style={styles.youtubeButtonText} >Watch on Youtube</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default DetailCard;