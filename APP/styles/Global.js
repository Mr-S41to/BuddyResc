import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E9E9E9",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Roboto-Regular",
    },

    dadosView: {
      flexDirection: "row",
      justifyContent: "space-between",
    },

    cardHome:{
      backgroundColor: "#FFFFFF",
      margin: 5,
      padding: 10,
      borderRadius: 8,
      alignItems: "center",
      width: 160,
      height: 160,
    },
    
    titleHome: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#3B2B46",
      margin: 5,
      alignContent: "center",
    }

});