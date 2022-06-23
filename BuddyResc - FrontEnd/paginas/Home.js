import * as React from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';

import { globalStyles } from '../styles/Global';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{ flexWrap: 'wrap', alignSelf:'center',flex:1, justifyContent:'center' }}>

        <View style={{ flexDirection: 'row', marginBottom:30 }}>
          <View style={globalStyles.boxButton}>
            <TouchableOpacity
              onPress={() => console.log(navigation.navigate("AdotarPets"))}
            >
              <Image
                style={globalStyles.inputImage}
                source={require("../assets/owner.png")}
              />
              <Text style={globalStyles.textHome}>Adotar</Text>

            </TouchableOpacity>
          </View>

          <View style={globalStyles.boxButton}>
            <TouchableOpacity
            >
              <Image
                style={globalStyles.inputImage}
                source={require("../assets/kitten.png")}
              />
              <Text style={globalStyles.textHome}>Colocar para {'\n'} Adoção</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* /////////////////////////////////////// */}

        <View style={{flexDirection:'row'}}>
          <View style={globalStyles.boxButton}>
            <TouchableOpacity
            >
              <Image
                style={globalStyles.inputImage}
                source={require("../assets/cat.png")}
              />
              <Text style={globalStyles.textHome}>Campanhas</Text>
            </TouchableOpacity>
          </View>

          <View style={globalStyles.boxButton}>
            <TouchableOpacity>
              <Image
                style={globalStyles.inputImage}
                source={require("../assets/license.png")}
              />
              <Text style={globalStyles.textHome}>Informações</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
}