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
import { RFValue } from "react-native-responsive-fontsize";
import PostCard from "../screens/CreatePost";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";

let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
  };
  

export default class FeedScreen extends Component{
    constructor(props){
    super(props);
    this.state = {
      fontsLoaded: false,
      light_theme: true
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    this.fetchUser();
  }

  
  renderItem = ({ item: story }) => {
    return <StoryCard story={story} navigation={this.props.navigation} />;
  };

  keyExtractor = (item, index) => index.toString();

    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                            source={require("../assets/icon.png")}
                        >
                        </Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Espectograma</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <FileList
                        keyStractor={this.keyExtractor}
                        data={posts}
                        renderItem={this.renderItem}
                    />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
       backfaceVisibility:"black",
       flex:1
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle:{
        flexDirection:"row",
        flex:0.07
    },
    appIcon:{
        justifyContent:"center",
        alignItems:"center",
        flex:0.2
    },
    iconImage:{
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    },
    appTitleTextContainer:{
        justifyContent:"center",
        flex:0.08
    },
    appTitleText:{
        color:"white",
        fontSize: RFValue(28)
    },
    cardContainer:{
        flex:0.85
    },
})

