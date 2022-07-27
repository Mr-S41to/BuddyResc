import * as React from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';

import { globalStyles } from '../styles/Global';

export default function Home({navigation}){
  return (
      
    <View style={globalStyles.container}>
      <SafeAreaView>
        <View style={globalStyles.dadosView}>
          <TouchableOpacity
            style={globalStyles.cardHome}
            onPress={() => console.log(navigation.navigate("AdotarPets"))}
          >
            <Image
              style={globalStyles.inputImage}
              source={require("../assets/owner.png")}
            />
            <Text 
              style={globalStyles.titleHome}
            > Adotar </Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={globalStyles.cardHome}
              onPress={() => console.log(navigation.navigate("AdicionarPets"))}
          >
            <Image
              style={globalStyles.inputImage}
              source={require("../assets/kitten.png")}
            />
            <Text
              style={globalStyles.titleHome}
            >Colocar para Adoção </Text>
          </TouchableOpacity>
        </View>
        <View style={globalStyles.dadosView}>
          <TouchableOpacity
              style={globalStyles.cardHome}
              onPress={() => console.log(navigation.navigate("AdicionarPets"))}
          >
            <Image
              style={globalStyles.inputImage}
              source={require("../assets/cat.png")}
            />
            <Text
              style={globalStyles.titleHome}
            >Campanhas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalStyles.cardHome}
            onPress={() => console.log(navigation.navigate("AdotarPets"))}
          >
            <Image
              style={globalStyles.inputImage}
              source={require("../assets/license.png")}
            />
            <Text
              style={globalStyles.titleHome}
            >Informações</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}