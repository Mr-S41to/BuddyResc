import React, { Component } from 'react';
import { View, FlatList, Image, StatusBar, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

import { globalStyles } from '../styles/Global';

export default class Home extends Component {


  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: `https://buddyresc.herokuapp.com/pets`
    }
  }

  loadAnalysis = () => {
    try {
      fetch(this.state.url)
        .then(res => res.json())
        .then(res => {
          if (Array.isArray(res)) {
            this.setState({
              data: res
            })
          } else {
            this.setState({
              data: null
            })
          }
        })
    } catch (e) {
      console.log(e);
    }

  }


  componentDidMount() {
    this.loadAnalysis();
  }


  ListEmptyView() {

    return (
      <View style={globalStyles.MainContainer}>
        <Image
          source={require('../../../assets/Fundo.png')}
          style={{ width: 300, height: 380, top: 0, right: 0, bottom: 0, left: 0 }}
          resizeMode='stretch'
        >
        </Image>
        <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', position:'absolute'}}> Não há nenhuma {'\n'}análise registrada</Text>
      </View>

    );
  }

  render() {
    return (

      <SafeAreaView style={{ backgroundColor: "white", flex: 1}}>

        <StatusBar barStyle='light-content' />

        <LinearGradient
          colors={['#48A151', '#F2F8F3', 'transparent']}>
          <View>

            {/* **********FlatList********* */}

            <FlatList
              style={{
                backgroundColor: "white",
                top: 38,
                width: '90%',
                height: '87%',
                alignSelf: 'center',
                borderRadius: 5,
                marginLeft:10,
                marginRight:10
              }}

              data={this.state.data}
              nestedScrollEnabled={true}
              ListHeaderComponent={() =>

                <View
                  style={{ alignItems: 'center', top: 24.11, paddingBottom: 44, }}
                >
                  <MaterialIcons name="history" size={26} color="black" />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                  > Histórico das Análises </Text>

                </View>
              }

              renderItem={({ item }) => (
                <View>
                  <View style={globalStyles.line}>
                    <View style={globalStyles.box}>
                    <Text style={globalStyles.text}>Nome</Text>
                      <Text style={globalStyles.info}>{item.pet.name}</Text>
                      <Text style={globalStyles.text}>Idade</Text>
                      <Text style={globalStyles.info}>{item.pet.age}</Text>
                      <Text style={globalStyles.text}>Sexo</Text>
                      <Text style={globalStyles.info}>{item.pet.sex}</Text>
                      <Image
                      source={require(item.images)}
                      />
                    </View>
                  </View>
                </View>

              )}
              keyExtractor={item => item.pet.id}

              ListEmptyComponent={this.ListEmptyView()}

            />
          </View>
        </LinearGradient>

      </SafeAreaView>
    );
  }
}