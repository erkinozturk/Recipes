import React from "react";
import { FlatList } from "react-native";
import Config from 'react-native-config';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Categories = ({ navigation }) => {
    const { loading, data, error } = useFetch(Config.API_URL_CATEGORY);

    const handleCategorySelect = strCategory => {
        navigation.navigate('MealsPage', [strCategory]);
    };

    const renderCategories = ({ item }) => <CategoryCard category={item} onSelect={() => handleCategorySelect(item.strCategory)} />;

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <FlatList style={{ backgroundColor: '#F2AE30' }} data={data.categories} renderItem={renderCategories} />
    );
};

export default Categories;