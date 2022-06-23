import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto-Regular",
  },
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
  boxButton: {
    alignSelf:'center',
    alignItems:'center',
    width:150,
    height:150,
    backgroundColor:'white',
    marginRight:5,
    marginLeft:5,
    borderRadius:5
  },
  textHome: {
    textAlign:'center',
    fontWeight:'bold'
  },

});