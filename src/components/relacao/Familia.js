import React from 'react'
import { Text } from 'react-native'

export default props => {
    return(
        <>
            <Text>[Inicio]Membro da Família: </Text>
            {props.children}
            <Text>[Fim]Membro da Família: </Text>
        </>
   )
}