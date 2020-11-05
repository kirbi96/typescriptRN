import React from "react"
import {TouchableOpacity} from "react-native"
import PropType from "prop-types"
import IconBack from "../../static/imgs/icon/IconBack"

import {stylesCommon} from "../../static/styles"
import {useNavigation} from "@react-navigation/native";


const HeaderBack = () =>{
    const navigation = useNavigation()

    return(
        <TouchableOpacity onPress={() => navigation.goBack()} style={[stylesCommon.flexRow, stylesCommon.mt5, stylesCommon.pb15]}>
            <IconBack/>
        </TouchableOpacity>
    )
}

HeaderBack.propTypes = {
    navigation: PropType.object,
}

export default HeaderBack
