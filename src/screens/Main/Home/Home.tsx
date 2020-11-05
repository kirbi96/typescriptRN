import React, {FC} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {stylesCommon, stylesHome, stylesText, stylesUi} from "../../../static/styles";
import {useNavigation} from '@react-navigation/native';

const pizzaData = [
    {
        id: 1,
        img: "https://cdn.dodostatic.net/static/Img/Products/1e414bf6663645f592d166329e1fec83_292x292.jpeg",
        price: 13,
        name: "Карбонара",
        des: "Бекон, сыры чеддер и пармезан, моцарелла, томаты черри, лук, чеснок, сливочный соус, итальянские травы"
    },
    {
        id: 2,
        img: "https://cdn.dodostatic.net/static/Img/Products/04dff3cf16144112aabdd5f79182f663_292x292.jpeg",
        price: 33,
        name: "Деревенская",
        des: "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус"
    },
    {
        id: 3,
        img: "https://cdn.dodostatic.net/static/Img/Products/6289691b5edd41b6ad280fdc340c4e59_292x292.jpeg",
        price: 23,
        name: "Запеченное яблоко",
        des: "Яблоки, черная смородина, соус пломбир, лепестки миндаля, корица"
    },

]

const Home: FC = () => {
    const navigation = useNavigation()

    return (
        <View style={stylesCommon.mainContainer}>

            <View style={{width: "100%", height: 150}}>
                <Image
                    style={[stylesCommon.imgFill, {borderRadius: 10}]}
                    source={{
                        uri: "https://i.pinimg.com/originals/8e/01/11/8e0111077bc105b14e7284cee7d2abe3.jpg"
                    }}
                />
            </View>


            <View style={stylesCommon.mt10}>
                {pizzaData.map((i, index) => (
                    <TouchableOpacity key={index} style={[stylesCommon.mt15, {flexDirection: "row"}]} >
                        <View style={stylesHome.imageCardContainer}>
                            <Image
                                style={[stylesCommon.imgFill, {borderRadius: 10}]}
                                source={{
                                    uri: i.img
                                }}
                            />
                        </View>
                        <View style={[stylesCommon.ml10, ]}>
                            <Text style={stylesText.h5}>{i.name}</Text>
                            <Text style={[stylesCommon.mt5, stylesText.textGray, {maxWidth: "85%"}]}>{i.des}</Text>
                            <Text style={[stylesCommon.mt5, stylesText.textRed]}>{i.price} $</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Combo")} style={[stylesUi.btnRed,stylesCommon.mt10]}>
                <Text style={stylesUi.btnWhiteText}>Заказать комбо пиццу</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home
