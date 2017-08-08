import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import Pedra from './img/pedra.png';
import Papel from './img/papel.png';
import Tesoura from './img/tesoura.png';

export default class fraseDia extends Component {

  constructor(props){
    super(props);
    this.state = { opcaoUsuario : '', opcaoComp: '', resultado: '', opcaoUsuarioImg: '', opcaoCompImg:'' }
  }

  escolher(opcao){
      var opcoes = [{nome:'Pedra',img:Pedra}, {nome:'Papel',img:Papel}, {nome:'Tesoura',img:Tesoura}];
      var opcaoComp = Math.floor(Math.random() * opcoes.length);
      var resultado = '';
      var opcaoUsuarioImg = '';

      if (opcao =='Pedra') {
        opcaoUsuarioImg = Pedra;

        switch(opcaoComp) {
          case 0: resultado = 'Empate!'; break;
          case 1: resultado = 'Você Perdeu!!!'; break;
          default: resultado = 'Você Ganhou!!!';
        }
      } else if (opcao =='Papel') {
        opcaoUsuarioImg = Papel;

        switch(opcaoComp) {
          case 0: resultado = 'Você Ganhou!!!'; break;
          case 1: resultado = 'Empate!'; break;
          default: resultado = 'Você Perdeu!!!';
        }
      } else if (opcao =='Tesoura'){
        opcaoUsuarioImg = Tesoura;

        switch(opcaoComp) {
          case 0: resultado = 'Você Perdeu!!!'; break;
          case 1: resultado = 'Você Ganhou!!!'; break;
          default: resultado = 'Empate!';
        }
      }

      this.setState({ opcaoUsuario:opcao, opcaoComp:opcoes[opcaoComp].nome, resultado:resultado, opcaoUsuarioImg:opcaoUsuarioImg, opcaoCompImg:opcoes[opcaoComp].img})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
            <Image source={require('./img/jokenpo.png')}></Image>
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity onPress={() => this.escolher('Pedra')} style={styles.button}>
                  <Text>Pedra</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => this.escolher('Papel')} style={styles.button}>
                  <Text>Papel</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => this.escolher('Tesoura')} style={styles.button}>
                  <Text>Tesoura</Text>
            </TouchableOpacity >
        </View>
        <View style={styles.resultado}>
            <Text style={styles.resultadoText}>{this.state.resultado}</Text>
            <Text>Computador:{this.state.opcaoComp}</Text>
            <Image source={this.state.opcaoCompImg}></Image>
            <Text>Usuário:{this.state.opcaoUsuario}</Text>
            <Image source={this.state.opcaoUsuarioImg}></Image>
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
  resultadoText:{
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
