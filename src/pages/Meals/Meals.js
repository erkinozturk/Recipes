import React from "react";
import { FlatList } from "react-native";
import Config from "react-native-config";
import MealCard from '../../components/MealCard/MealCard';
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Meals = ({ route, navigation }) => {
    const strCategory = `${Config.API_URL_MEAL}${route.params}`;
    const { loading, data, error } = useFetch(strCategory);

    const handleMealSelect = idMeal => {
        navigation.navigate('DetailsPage', [idMeal]);
    };

    const renderMeals = ({ item }) => <MealCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />;

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <FlatList style={{ backgroundColor: '#F2AE30' }} data={data.meals} renderItem={renderMeals} />
    );
}

export default Meals;