import React, {Component} from 'react';
import{ View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    Dimensions
  } from "react-native";

export default class ProfileScreen extends Component{
    render(){
        return(
            <View style={StyleSheet.texto}>
                <Text>
                    Tela de perfil
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    texto:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
    }
})