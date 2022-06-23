import * as React from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';

import { globalStyles } from '../styles/Global';

export default function Home({navigation}){
  return (
    <SafeAreaView>
      <View>
        <View>
          <TouchableOpacity
          onPress={() => console.log(navigation.navigate("AdotarPets"))}
          >
            <Image
              style={globalStyles.inputImage}
              source={require("../assets/cat.png")}
            />
            <Text>Adotar</Text>
          </TouchableOpacity>
          <TouchableOpacity
          >
            <Image
              style={globalStyles.inputImage}
              source={require("../assets/kitten.png")}
            />
            <Text>Colocar para Adoção</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
          >
            <Image
              style={globalStyles.inputImage}
              source={require("../assets/license.png")}
            />
            <Text>Campanhas</Text>
          </TouchableOpacity
          >
          <TouchableOpacity>
            <Image
              style={globalStyles.inputImage}
              source={require("../assets/owner.png")}
            />
            <Text>Informações</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}