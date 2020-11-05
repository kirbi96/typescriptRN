import * as React from "react"
import Svg, {Path} from "react-native-svg"
import {RFValue} from "../../../utils/responsiveFontSize"

const IconBottomHome = (props) => {
    return (
        <Svg width={RFValue(20)} height={RFValue(20)} viewBox="0 0 79.031 76" {...props}>
            <Path
                d="M78.108 34.96L45.949 2.5a5.001 5.001 0 00-.128-.12 9.22 9.22 0 00-12.343-.03l-.127.12L.899 34.95a3.094 3.094 0 004.36 4.39l2.449-2.46v26.73a12.375 12.375 0 0012.348 12.38h11.111a3.086 3.086 0 003.087-3.09V47.67h10.8V72.9a3.086 3.086 0 003.087 3.09h10.8a12.375 12.375 0 0012.346-12.38 3.087 3.087 0 10-6.173 0 6.184 6.184 0 01-6.173 6.19h-7.716V44.57a3.092 3.092 0 00-3.086-3.09H31.165a3.092 3.092 0 00-3.086 3.09V69.8h-8.023a6.184 6.184 0 01-6.173-6.19V30.8v-.09L37.641 6.93a3.072 3.072 0 014 0l23.473 23.7v17.5a3.087 3.087 0 106.173 0V36.86l2.44 2.47a3.084 3.084 0 004.365.01 3.105 3.105 0 00.016-4.38z"
                fill="#f5671a"
                fillRule="evenodd"
            />
        </Svg>
    )
}

export default IconBottomHome
