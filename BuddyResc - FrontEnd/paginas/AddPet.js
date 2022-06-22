import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, Image, TouchableOpacity, View, SafeAreaView, ScrollView } from "react-native";


export default function AdicionarPets({ navigation }) {

    const [nome, setNome] = useState(null);
    const [idade, setIdade] = useState(null);
    const [meses, setMeses] = useState(null);
    const [peso, setPeso] = useState(null);
    return (
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

    );
}