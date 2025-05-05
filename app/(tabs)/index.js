import React from "react"
import { SafeAreaView , StyleSheet } from "react-native"
import FlexboxV4 from '../../src/components/layout/FlexboxV4'
//import FlexboxV3 from '../../src/components/layout/FlexboxV3'
//import FlexboxV2 from '../../src/components/layout/FlexboxV2'
//import FlexboxV1 from '../../src/components/layout/FlexboxV1'
//import DigiteSeuNome from '../../src/components/DigiteSeuNome'
//import ListaProdutosV2 from '../../src/components/Produtos/ListaProdutoV2'
//import ListaProdutos from '../../src/components/Produtos/ListaProduto'
//import UsuarioLogado from '../../src/components/UsuarioLogado'
//import Familia from '../../src/components/relacao/Familia'
//import Membro from "@/src/components/relacao/Membro"
//import ParImpar from '../../src/components/ParImpar'
//import Diferenciar from '../../src/components/Diferenciar'
//import ContadorV2 from '../../src/components/Contador/ContadorV2'
//import Pai from '../../src/components/indireta/Pai'
//import PaiDir from '../../src/components/direta/PaiDir'
//import Contador from '../../src/components/Contador'
//import Botao from '../../src/components/Botao'
//import Titulo from "../../src/components/Titulo"
//import Aleatorio from '../../src/components/Aleatorio'
//import MinMax from '../../src/components/MinMax'
//import CompPadrao, { Comp1, Comp2 } from "../../src/components/Multi" 
//import Primeiro from '../../src/components/Primeiro'

export default () =>  
    <SafeAreaView style = {style.App}>
        <FlexboxV4 />
        {/*
        <FlexboxV3 />
        <FlexboxV2 />
        <FlexboxV1 />
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={{nome:'Gui', email:'gui@gui.com'}}/>
        <UsuarioLogado usuario={{nome:'Ana'}}/>
        <UsuarioLogado usuario={{nome:'carlos@empresa.com'}}/>
        <UsuarioLogado usuario={null}/>
        <UsuarioLogado usuario={{}}/>
        <Familia>
            <Membro nome ="Bia" sobrenome="Arruda"/>
            <Membro nome ="Carlos" sobrenome="Arruda"/>
        </Familia>
        <Familia>
            <Membro nome ="Ana" sobrenome="Silva"/>
            <Membro nome ="Julia" sobrenome="Silva"/>
            <Membro nome ="Gui" sobrenome="Silva"/>
            <Membro nome ="Rebeca" sobrenome="Silva"/>
        </Familia>
        <ParImpar num={3} />
        <Diferenciar/>
        <ContadorV2 />
        <Pai />
        <PaiDir />
        <Contador inicial ={100} passo={7} />
        <Contador />
        <Botao />
        <Titulo principal = "Cadastro Produto" 
            secundario = "Tela de Cadastro do Produto"/>
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <MinMax min={3} max={20} />
        <MinMax min={1} max={94} />
        <CompPadrao/>
        <Comp1/>
        <Comp2/>
        <Primeiro /> */}
    </SafeAreaView>

    const style = StyleSheet.create ({
        App: {
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20
        }

    })