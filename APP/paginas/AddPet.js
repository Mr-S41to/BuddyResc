import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, Image, TouchableOpacity, View, SafeAreaView, ScrollView } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

export default function AdicionarPets({ navigation }) {

    const [especie, setEspecie] = useState(null);
    const [nome, setNome] = useState(null);
    const [idade, setIdade] = useState(null);
    const [meses, setMeses] = useState(null);
    const [peso, setPeso] = useState(null);
    const [sexo, setSexo] = useState(null);
    const [descricao, setDescricao] = useState(null);

    return (
       <View>
        <SafeAreaView>
            <ScrollView>
                <Text>Especie</Text>
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

                <Text>Nome</Text>
                <TextInput
                    onChangeText={(value) => setNome(value)}
                    placeholder="Nome"
                    keyboardType="default"
                    value={nome}
                    maxLength={255}
                />
                
                <Text>idade</Text>
                <View>
                    <TextInput
                        onChangeText={(value) => setIdade(value)}
                        placeholder="1 Ano"
                        keyboardType="numeric"
                        value={idade}
                        maxLength={2}
                    />
                    <TextInput
                        onChangeText={(value) => setMeses(value)}
                        placeholder="2 Meses"
                        keyboardType="numeric"
                        value={meses}
                        maxLength={2}
                    />
                </View>

                <View>
                    <View>
                        <Text>Peso</Text>
                        <TextInput
                        onChangeText={(value) => setPeso(value)}
                        placeholder="KG"
                        keyboardType="numeric"
                        value={peso}
                        maxLength={3}
                    />
                    </View>
                    <View>
                        <Text>Sexo</Text>
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

                <Text>Descrição</Text>
                <TextInput
                    style={globalStyles.inputTypeD}
                    onChangeText={(value) => setDescricao(value)}
                    placeholder="Digite Aqui..."
                    keyboardType="default"
                    multiline={true}
                    maxLength={400}
                    value={descricao}
                />
        <View>
            <Text>Especie</Text>

            <Text>Nome</Text>
            <TextInput
                onChangeText={(value) => setNome(value)}
                placeholder="Nome"
                keyboardType="default"
                value={nome}
                maxLength={255}
            />

            <Text>idade</Text>
            <View>
                <TextInput
                    onChangeText={(value) => setIdade(value)}
                    placeholder="1 Ano"
                    keyboardType="numeric"
                    value={idade}
                    maxLength={2}
                />
                <TextInput
                    onChangeText={(value) => setMeses(value)}
                    placeholder="2 Meses"
                    keyboardType="numeric"
                    value={meses}
                    maxLength={2}
                />
            </View>

            <View>
                <View>
                    <Text>Peso</Text>
                    <TextInput
                        onChangeText={(value) => setPeso(value)}
                        placeholder="KG"
                        keyboardType="numeric"
                        value={peso}
                        maxLength={3}
                    />
                </View>
                <View>
                    <Text>Sexo</Text>
                </View>
            </View>
        </View>

                <TouchableOpacity>
                    <Text>Disponibilizar para Adoção</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
       </View>
    );
}