import React, { Component } from 'react';
import {inicializar} from '../config/firebase.js'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import Pedra from '../img/pedra.png';
import Papel from '../img/papel.png';
import Tesoura from '../img/tesoura.png';
import None from '../img/none.png';
const opcoes = [{nome:'',img:None}, {nome:'Pedra',img:Pedra}, {nome:'Papel',img:Papel}, {nome:'Tesoura',img:Tesoura}];

export default class jokenpo extends Component {

  constructor(props){
    super(props);
    this.state = { opcaoUsuario : '', opcaoComp: '', resultado: '', opcaoU: 0, opcaoC: 0,
                   opcaoUsuarioImg: None, opcaoCompImg:None, partida:'partida'};

    this.alterarValor = this.alterarValor.bind(this)
  }

  alterarValor(opcao){
    this.setState({ ...this.state, opcaoC:opcao, opcaoComp:opcoes[opcao].nome, opcaoCompImg:opcoes[opcao].img });
    this.setState({ ...this.state, resultado:this.excutarRodada(this.state.opcaoU) });
  }

  componentWillMount() {
    inicializar(this.state.partida, this.alterarValor);
  }

  escolher(opcao){
      this.setState({ ...this.state, opcaoU:opcao, opcaoUsuario:opcoes[opcao].nome, resultado:this.excutarRodada(opcao), opcaoUsuarioImg:opcoes[opcao].img });
  }

  excutarRodada(opcao) {
      var resultado = '';

      if (opcao == 1) {
        switch(this.state.opcaoC) {
          case 1: resultado = 'Empate!'; break;
          case 2: resultado = 'Você Perdeu!!!'; break;
          case 3: resultado = 'Você Ganhou!!!'; break;
          default: resultado = '';
        }
      } else if (opcao == 2) {
        switch(this.state.opcaoC) {
          case 1: resultado = 'Você Ganhou!!!'; break;
          case 2: resultado = 'Empate!'; break;
          case 3: resultado = 'Você Perdeu!!!'; break;
          default: resultado = '';
        }
      } else if (opcao == 3){
        switch(this.state.opcaoC) {
          case 1: resultado = 'Você Perdeu!!!'; break;
          case 2: resultado = 'Você Ganhou!!!'; break;
          case 3: resultado = 'Empate!'; break;
          default: resultado = '';
        }
      }

      return resultado;
  }

  render() {
    let resultado;
    let escolha;

    if(this.state.opcaoU != 0){
      escolha = (<View style={styles.resultadoOponente}>
          <Text>Usuário:{this.state.opcaoUsuario}</Text>
          <Image source={this.state.opcaoUsuarioImg}></Image>
      </View>);
    }

    if(this.state.opcaoC == 0){
      resultado = <Text style={styles.resultadoText}>Oponente escolhendo...</Text>
    }else if(this.state.opcaoU == 0){
      resultado = <Text style={styles.resultadoText}>Escolha por favor...</Text>
    }else{
      resultado = (<View style={styles.resultadoOponente}>
                      <Text style={styles.resultadoText}>{this.state.resultado}</Text>
                      <Text>Computador:{this.state.opcaoComp}</Text>
                      <Image source={this.state.opcaoCompImg}></Image>
                   </View>);
    }

    return (
      <View style={styles.container}>
        <View style={styles.top}>
            <Image source={require('../img/jokenpo.png')}></Image>
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity onPress={() => this.escolher(1)} style={styles.button}>
                  <Text>Pedra</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => this.escolher(2)} style={styles.button}>
                  <Text>Papel</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => this.escolher(3)} style={styles.button}>
                  <Text>Tesoura</Text>
            </TouchableOpacity >
        </View>
        <View style={styles.resultado}>
            {resultado}
            {escolha}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  top: {
    flex: 3
  },
  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-between'},
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    height: 50,
    width: 80,
    margin: 10
  },
  resultado:{
    flex: 4,
    alignItems: 'center'
  },
  resultadoOponente:{
    alignItems: 'center'
  },
  resultadoText:{
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
