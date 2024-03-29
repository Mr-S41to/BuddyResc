import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, Image, TouchableOpacity, View, SafeAreaView, ScrollView } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

import { globalStyles } from "../styles/Global";

export default function AdicionarPets({ navigation }) {

    const [especie, setEspecie] = useState(null);
    const [nome, setNome] = useState(null);
    const [idade, setIdade] = useState(null);
    const [meses, setMeses] = useState(null);
    const [peso, setPeso] = useState(null);
    const [sexo, setSexo] = useState(null);
    const [descricao, setDescricao] = useState(null);

    return (
       <View style={globalStyles.container}>
        <SafeAreaView>
            <ScrollView>
                <Text style={globalStyles.textMain}>Especie</Text>
                <View style={globalStyles.inputTypeA}>
                    <RNPickerSelect
                        onValueChange={(especie) => setEspecie(especie)}
                        useNativeAndroidPickerStyle={false}
                        placeholder={{ label: "Selecione a Especie...", value: null }}
                        items={[
                            { label: "Cão", value: "C" },
                            { label: "Gato", value: "G" },
                            { label: "Aves", value: "A" },
                            { label: "Outros", value: "O" },
                        ]}
                    />
                </View>

                <Text style={globalStyles.textMain}>Nome</Text>
                <TextInput
                    style={globalStyles.inputTypeA}
                    onChangeText={(value) => setNome(value)}
                    placeholder="Nome"
                    keyboardType="default"
                    value={nome}
                    maxLength={255}
                />
                
                <Text style={globalStyles.textMain}>idade</Text>
                <View style={globalStyles.dadosView}>
                    <TextInput
                    style={globalStyles.inputTypeB}
                        onChangeText={(value) => setIdade(value)}
                        placeholder="1 Ano"
                        keyboardType="numeric"
                        value={idade}
                        maxLength={2}
                    />
                    <TextInput
                        style={globalStyles.inputTypeC}
                        onChangeText={(value) => setMeses(value)}
                        placeholder="2 Meses"
                        keyboardType="numeric"
                        value={meses}
                        maxLength={2}
                    />
                </View>

                <View style={globalStyles.dadosView}>
                    <View>
                        <Text style={globalStyles.textMain}>Peso</Text>
                        <TextInput
                            style={globalStyles.inputTypeB}
                            onChangeText={(value) => setPeso(value)}
                            placeholder="KG"
                            keyboardType="numeric"
                            value={peso}
                            maxLength={3}
                        />
                    </View>
                    <View>
                        <Text style={globalStyles.textMainR}>Sexo</Text>
                        <View style={globalStyles.inputTypeC}>
                            <RNPickerSelect
                                onValueChange={(sexo) => setSexo(sexo)}
                                useNativeAndroidPickerStyle={false}
                                placeholder={{ label: "Selecione o Sexo...", value: null }}
                                items={[
                                    { label: "Masculino", value: "M" },
                                    { label: "Feminino", value: "F" },
                                ]}
                            />
                        </View>
                    </View>
                </View>

                <Text style={globalStyles.textMain}>Descrição</Text>
                <TextInput
                    style={globalStyles.inputTypeD}
                    onChangeText={(value) => setDescricao(value)}
                    placeholder="Digite Aqui..."
                    keyboardType="default"
                    multiline={true}
                    maxLength={400}
                    value={descricao}
                />

                <TouchableOpacity
                    onPress={() => console.log(navigation.navigate("Home"))}
                >
                    <Text
                        style={globalStyles.buttonText}
                    >Disponibilizar para Adoção</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
       </View>
    );
}