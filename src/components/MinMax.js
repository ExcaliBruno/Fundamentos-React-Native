import React from "react";
import { Text } from "react-native";
import Estilo from "./estilo"

export default props =>(
        <Text style= {Estilo.txtG}>
            O valor {props.max} e maior que o valor {props.min}!
        </Text>
)

