import React, { Component } from 'react';
import { View, FlatList, Image, StatusBar, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { globalStyles } from '../styles/Global';

export default class List extends Component {


  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: `https://buddyresc.herokuapp.com/pets/`,
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
        <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', position: 'absolute' }}> Não há nenhum {'\n'}pet registrado</Text>
      </View>

    );
  }

  render() {
    return (

      <SafeAreaView style={globalStyles.safeArea}>

        <StatusBar barStyle='light-content' />

        {/* **********FlatList********* */}

        <FlatList
          style={globalStyles.flatList}

          data={this.state.data}
          nestedScrollEnabled={true}

          renderItem={({ item }) => (
            <View>
              <View style={globalStyles.line}>
                <View style={globalStyles.box}>
                  <Text style={globalStyles.text}>Nome</Text>
                  <Text style={globalStyles.info}>{item.name}</Text>
                  <Text style={globalStyles.text}>Idade</Text>
                  <Text style={globalStyles.info}>{item.age}</Text>
                  <Text style={globalStyles.text}>Sexo</Text>
                  <Text style={globalStyles.info}>{item.sex}</Text>
                </View>
              </View>
            </View>

          )}
          keyExtractor={item => item.id}

          ListEmptyComponent={this.ListEmptyView()}

        />

      </SafeAreaView>
    );



  }
}