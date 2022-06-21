import * as React from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';

export default function Home(){
  return (
    <SafeAreaView>
      <View>
        <View>
          <TouchableOpacity
          >
            <Image
              style={globalStyles.inputImage}
              source={require("../../assets/icone-maps.png")}
            />
            <Text>Adotar</Text>
          </TouchableOpacity>
          <TouchableOpacity
          >
            <Image
              style={globalStyles.inputImage}
              source={require("../../assets/icone-maps.png")}
            />
            <Text>Colocar para Adoção</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
          >
            <Image
              style={globalStyles.inputImage}
              source={require("../../assets/icone-maps.png")}
            />
            <Text>Campanhas</Text>
          </TouchableOpacity
          >
          <TouchableOpacity>
            <Image
              style={globalStyles.inputImage}
              source={require("../../assets/icone-maps.png")}
            />
            <Text>Informações</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}