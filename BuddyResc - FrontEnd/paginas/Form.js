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

    //Get the Pets from api
  
  loadPets = () => {
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
    this.loadPets();
  }

  //Case for the list empty

  ListEmptyView() {

    return (
      <View style={globalStyles.MainContainer}>
        <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', position:'absolute'}}> Não há nenhum {'\n'}pet registrado</Text>
      </View>

    );
  }

  render() {
    return (

      <SafeAreaView style={{ backgroundColor: "white", flex: 1}}>

        <StatusBar barStyle='light-content' />

            {/* **********FlatList********* */}

            <FlatList
              style={{
                backgroundColor: "white",
                top: 36,
                width: '90%',
                height: 260,
                alignSelf: 'center',
                borderRadius: 32,
                marginLeft:10,
                marginRight:10
              }}

              data={this.state.data}
              nestedScrollEnabled={true}

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

      </SafeAreaView>
    );



  }
}