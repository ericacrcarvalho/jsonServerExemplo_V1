import React, { useState } from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import { URL } from '../server/constants';

const Register = ({ navigation }) => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (name != "" && password != "") {
      const newUser = {
        name,
        password
      }
      fetch(`${URL}/users`, {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      .then((response) => {
        if (response.ok) {
          navigation.popToTop();
          alert("Cadastro realizado com sucesso");
        } 
        else {
          alert("Ocorreu uma falha no cadastro");
        }
      })
    }
    else {
      alert("Insira todos os dados");
    }
  }

  return (
    <View>
       <View>
        <Text>Insira seu nome</Text>
        <TextInput
          placeholder="Seu nome"
          textAlign="center"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View>
        <Text>Insira uma senha</Text>
        <TextInput
          placeholder="Sua senha"
          textAlign="center"
          value={password}
          onChangeText={setPassword}
          autoComplete="password"
          secureTextEntry={true}
        />
      </View>
      <Button
          title="Cadastrar"
          onPress={handleRegister}
        />
      <Button
          title="Voltar"
          onPress={() => navigation.popToTop()}
        />
    </View>
  );
}
export default Register;