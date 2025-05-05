import React, {Component} from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Estilo from '../estilo'

import MegaNumero from './MegaNumero'

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: [],
        numerosV2: []
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () =>{
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)],[])
            .sort((a, b) => a - b)
        this.setState({numeros})
    }

    gerarNumerosV2 = () =>{
        const {qtdeNumeros} = this.state
        const numerosV2 = []

        for(let i = 0; i < qtdeNumeros;  i++){
            const n = this.gerarNumeroNaoContido(numerosV2)
            numerosV2.push(n)
        }

        numerosV2.sort((a, b) => a - b)
        this.setState({ numerosV2 })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num ={num} />
        })
    }

    exibirNumerosV2 = () => {
        const nums = this.state.numerosV2
        return nums.map(num => {
            return <MegaNumero key={num} num ={num} />
        })
    }
    
    render() {
        return (
            <>
                <Text style = {Estilo.txtG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style = {{borderBottomWidth: 1}}
                    placeholder="Qtde de Números"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button 
                    title = 'Gerar'
                    onPress={this.gerarNumeros}
                />
                <View style ={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginBottom: 20,
                }}>
                    {this.exibirNumeros()}
                </View>
                <Button 
                    title = 'GerarV2'
                    onPress={this.gerarNumerosV2}
                />
                <View style ={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumerosV2()}
                </View>
            </>
        )
    }
}