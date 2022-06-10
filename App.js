import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, CheckBox } from 'react-native';

export default function App() {

  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.containerTwo}>
        <View style={styles.containerThree}>
          <Text style={styles.loginText}>Login
            <hr style={{backgroundColor: '#00537D', width: 200, marginTop: 4}}></hr>
          </Text>

          <Text style={styles.textInput}>Seu e-mail: </Text>
          <TextInput placeholder="exemplo@hotmail.com"
                    keyboardType={'email-address'}
                    style={{outline: 0, width: 300, borderBottomColor: '#00537D', height: 30, borderBottomWidth: 1, marginTop:10}}
          ></TextInput>
          <Text style={styles.textInput}>Sua senha: </Text>

          <TextInput placeholder="Digite sua senha"
                    keyboardType={'visible-password'}
                    secureTextEntry={true}
                    style={{outline: 0, width: 300, borderBottomColor: '#00537D', height: 30, borderBottomWidth: 1, marginTop:10}}
          ></TextInput>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Manter-me logado</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
          >
          <Text style={{color: '#fff'}}>Login</Text>
         </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTwo: {
    backgroundColor: '#E6E2DA',
    width: 375,
    height: 400,
    alignItems: "center",
    justifyContent: 'center'
  },
  containerThree: {
    backgroundColor: '#f3f3f3',
    alignItems: "center",
    justifyContent: 'center',
    width: 350,
    height: 380,
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
    borderTopColor: '#000',
    borderTopWidth: 1,
    borderLeftColor: '#000',
    borderLeftWidth: 1,
    borderRightColor: '#000',
    borderRightWidth: 1
  },
  loginText: {
    color: '#00537D',
    fontSize: 30,
    fontWeight: '600',
    textAlign: "center",
  },
  textInput: {
    marginRight: 230,
    marginTop: 20
  },
  texts: {
    fontSize: 30,
    fontFamily: 'arial',
    marginBottom: 10,
    color: 'black',
    fontWeight: 700,
  },

  checkboxContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginRight: 150
  },

  checkbox: {
    alignSelf: "center",
  },

  label: {
    margin: 8,
  },
  button: {
    backgroundColor: '#00537D',
    width: 125,
    height: 25,
    textAlign: "center",
    justifyContent: 'center',
    marginTop: 10
  }
});
