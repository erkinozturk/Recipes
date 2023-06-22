import React from "react";
import { FlatList } from "react-native";
import Config from "react-native-config";
import DetailCard from '../../components/DetailCard/DetailCard';
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Details = ({ route }) => {
    const strMeal = `${Config.API_URL_DETAIL}${route.params}`;
    const { loading, data, error } = useFetch(strMeal);

    const renderDetails = ({ item }) => <DetailCard detail={item} />

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <FlatList style={{ backgroundColor: '#F2AE30' }} data={data.meals} renderItem={renderDetails} />
    );
}

export default Details;