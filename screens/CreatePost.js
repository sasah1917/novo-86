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

export default class CreatePost extends Component{
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false,
          previewImage: "image_1",
          light_theme: true,
          dropdownHeight: 40
        };
      }


    render() {
        if (!this.state.fontsLoaded) {
          return <AppLoading />;
        } else {
          let preview_images = {
            image_1: require("../assets/post_image_1.png"),
            image_2: require("../assets/post_image_2.png"),
            image_3: require("../assets/post_image_3.png"),
            image_4: require("../assets/post_image_4.png"),
            image_5: require("../assets/post_image_5.png")
          };
          return (
            <View
              style={
                this.state.light_theme ? styles.containerLight : styles.container
              }
            >
              <SafeAreaView style={styles.droidSafeArea} />
              <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                  <Image
                    source={require("../assets/icon.png")}
                    style={styles.iconImage}
                  ></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                  <Text
                    style={
                      this.state.light_theme
                        ? styles.appTitleTextLight
                        : styles.appTitleText
                    }
                  >
                    novo post
                  </Text>
                </View>
              </View>
              <View style={styles.fieldsContainer}>
                <ScrollView>
                  <Image
                    source={preview_images[this.state.previewImage]}
                    style={styles.previewImage}
                  ></Image>
    
                  <View style={{ height: RFValue(this.state.dropdownHeight) }}>
                    <DropDownPicker
                      items={[
                        { label: "Imagem 1", value: "image_1" },
                        { label: "Imagem 2", value: "image_2" },
                        { label: "Imagem 3", value: "image_3" },
                        { label: "Imagem 4", value: "image_4" },
                        { label: "Imagem 5", value: "image_5" }
                      ]}
                      defaultValue={this.state.previewImage}
                      containerStyle={{
                        height: 40,
                        borderRadius: RFValue(20),
                        marginBottom: RFValue(20),
                        marginHorizontal: RFValue(10)
                      }}
                      onOpen={() => {
                        this.setState({ dropdownHeight: 170 });
                      }}
                      onClose={() => {
                        this.setState({ dropdownHeight: 40 });
                      }}
                      style={{ backgroundColor: "transparent" }}
                      itemStyle={{
                        justifyContent: "flex-start"
                      }}
                      dropDownStyle={{
                        backgroundColor: this.state.light_theme ? "#eee" : "#2f345d"
                      }}
                      labelStyle={
                        this.state.light_theme
                          ? styles.dropdownLabelLight
                          : styles.dropdownLabel
                      }
                      arrowStyle={
                        this.state.light_theme
                          ? styles.dropdownLabelLight
                          : styles.dropdownLabel
                      }
                      onChangeItem={item =>
                        this.setState({
                          previewImage: item.value
                        })
                      }
                    />
                  </View>
                  <View style={{ marginHorizontal: RFValue(10) }}>
                    <TextInput
                      style={
                        this.state.light_theme
                          ? styles.inputFontLight
                          : styles.inputFont
                      }
                      onChangeText={title => this.setState({ title })}
                      placeholder={"Title"}
                      placeholderTextColor={
                        this.state.light_theme ? "black" : "white"
                      }
                    />
                    <TextInput
                      style={[
                        this.state.light_theme
                          ? styles.inputFontLight
                          : styles.inputFont,
                        styles.inputFontExtra,
                        styles.inputTextBig
                      ]}
                      onChangeText={description => this.setState({ description })}
                      placeholder={"Descrição"}
                      multiline={true}
                      numberOfLines={4}
                      placeholderTextColor={
                        this.state.light_theme ? "black" : "white"
                      }
                    />
                    <TextInput
                      style={[
                        this.state.light_theme
                          ? styles.inputFontLight
                          : styles.inputFont,
                        styles.inputFontExtra,
                        styles.inputTextBig
                      ]}
                      onChangeText={story => this.setState({ story })}
                      placeholder={"História"}
                      multiline={true}
                      numberOfLines={20}
                      placeholderTextColor={
                        this.state.light_theme ? "black" : "white"
                      }
                    />
                    <TextInput
                      style={[
                        this.state.light_theme
                          ? styles.inputFontLight
                          : styles.inputFont,
                        styles.inputFontExtra,
                        styles.inputTextBig
                      ]}
                      onChangeText={moral => this.setState({ moral })}
                      placeholder={"Moral da História"}
                      multiline={true}
                      numberOfLines={4}
                      placeholderTextColor={
                        this.state.light_theme ? "black" : "white"
                      }
                    />
                  </View>
                </ScrollView>
              </View>
              <View style={{ flex: 0.08 }} />
            </View>
          );
        }
      }
    }
    


const styles = StyleSheet.create({
    texto:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
    }
})