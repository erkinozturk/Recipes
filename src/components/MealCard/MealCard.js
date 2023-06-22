import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './MealCard.style';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const MealCard = ({ meal, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <ImageBackground style={styles.image} imageStyle={{ borderRadius: 20 }} source={{ uri: meal.strMealThumb }} ><Text style={styles.title}>{meal.strMeal}</Text></ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default MealCard;