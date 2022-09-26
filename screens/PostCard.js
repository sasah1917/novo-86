import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";


export default class PostCard extends Component{
    render(){
        return(
            <View style={styles.container}>
               <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image
                                source={require("../assets/profile_im.png")}
                                style={styles.profileImage}
                            ></Image>
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}> {this.props.post.author}</Text>
                        </View>
                    </View>
                    <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
                    <View style={styles.captionContainer}>
                        <Text styles={styles.capitionText}>
                            {this.props.post.capition}
                        </Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButtom}>
                            <Ionicons name={"heart" } size={RFValue(38)} color={"white"}/>
                            <Text style={styles.likeText}>12K</Text>
                        </View>
                    </View>
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.container({
    texto:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
    }
})