import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class fraseDia extends Component {

  constructor(props){
    super(props);
    this.state = { opcaoUsuario : '', opcaoComp: '', resultado: ''}
  }

  escolher(opcao){
      var opcoes = ['Pedra', 'Papel', 'Tesoura'];
      var opcaoComp = Math.floor(Math.random() * opcoes.length);
      var resultado = '';

      if (opcao =='Pedra') {
        switch(opcaoComp) {
          case 0: resultado = 'Empate!'; break;
          case 1: resultado = 'Você Perdeu!!!'; break;
          default: resultado = 'Você Ganhou!!!';
        }
      } else if (opcao =='Papel') {
        switch(opcaoComp) {
          case 0: resultado = 'Você Ganhou!!!'; break;
          case 1: resultado = 'Empate!'; break;
          default: resultado = 'Você Perdeu!!!';
        }
      } else if (opcao =='Tesoura'){
        switch(opcaoComp) {
          case 0: resultado = 'Você Perdeu!!!'; break;
          case 1: resultado = 'Você Ganhou!!!'; break;
          default: resultado = 'Empate!';
        }
      }

      this.setState({ opcaoUsuario:opcao, opcaoComp:opcoes[opcaoComp], resultado:resultado})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
            <Text>Escolha Usuário:{this.state.opcaoUsuario}</Text>
            <Text>Escolha Computador:{this.state.opcaoComp}</Text>
            <Text>Resultado:{this.state.resultado}</Text>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  text:{alignItems: 'center'},
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
  }
});
