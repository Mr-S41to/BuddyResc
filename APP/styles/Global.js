import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E9E9E9",
      justifyContent: "center",
      fontFamily: "Roboto-Regular",
    },

    dadosView: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },

    cardHome:{
      backgroundColor: "#FFFFFF",
      margin: 5,
      padding: 10,
      borderRadius: 8,
      alignItems: "center",
      width: 164,
      height: 164,
    },
    
    titleHome: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#3B2B46",
      margin: 5,
      textAlign: "center",
    },
    
    buttonText:{
      fontSize: 18,
      fontWeight: "bold",
      color: "#3B2B46",
      margin: 5,
      textAlign: "center",
    },

    textMain: {
      marginHorizontal: 20,
      fontSize: 16,
      fontWeight: "bold",
      color: "#3B2B46",
      margin: 5,
    },

    textMainR: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#3B2B46",
      margin: 5,
    },

    textInfo: {
      fontSize: 12,
      fontWeight: "bold",
      color: "#006666",
      margin: 5,
    },

    inputTypeA: {
      margin: 20,
      marginTop: 4,
      padding: 10,
      borderColor: "#006666",
      borderWidth: 1.5,
      borderRadius: 8,
      backgroundColor: "#FFFFFF",
    },
    
    inputTypeB: {
      width: 140,
      marginStart: 20,
      marginTop: 4,
      padding: 10,
      borderColor: "#006666",
      borderWidth: 1.5,
      borderRadius: 8,
      backgroundColor: "#FFFFFF",
    },
    inputTypeC: {
      width: 140,
      marginEnd: 20,
      marginTop: 4,
      padding: 10,
      borderColor: "#006666",
      borderWidth: 1.5,
      borderRadius: 8,
      backgroundColor: "#FFFFFF",
    },

    inputTypeD: {
      height: 120,
      margin: 20,
      marginTop: 4,
      padding: 10,
      borderColor: "#006666",
      borderWidth: 1.5,
      borderRadius: 8,
      backgroundColor: "#FFFFFF",
    },

    //Douglas
    box: {
      width: '90%',
      height: 170,
      backgroundColor: 'white',
      borderRadius: 15,
      justifyContent: 'space-around',
      marginBottom: 36
    },
    text: {
      color: '#3B2B46',
      fontWeight: 'bold',
      fontSize: 15,
      left: 15
    },
    info: {
      color: '#008584',
      fontSize: 15,
      left: 15,
    },
    flatList: {
      backgroundColor: "#E9E9E9",
      width: '100%',
      height: '100%',
      top: 36,
      alignSelf: 'center',
    },
    line: {
      alignItems: 'center'
    },
    safeArea: {
      backgroundColor: "#E9E9E9",
      flex: 1
    },

});