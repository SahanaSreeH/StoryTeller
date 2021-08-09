import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>     
            <View style = {styles.cardContainer}>
                <Image source= {require("../assets/story_image_1.png")}></Image>
                <View>
                  <Text style = {styles.storyTitleText}>{this.props.story.title}</Text>
                  <Text style = {styles.storyAuthorText}>{this.props.story.author}</Text>
                  <Text style = {styles.storyDescriptionText}>{this.props.story.description}</Text>
                </View>
                <View>
                  <View>
                    <ionicons name = {"heart"}></ionicons>
                  </View>
                </View>
            </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }, 
  storyTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  storyAuthorText: {
    color: "white",
    fontSize: RFValue(18),
    fontFamily: "Bubblegum-Sans"
  },
  storyDescriptionText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
    paddingTop: RFValue(10)
  },
  likeButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: RFValue(150),
    height: RFValue(40)
  },
  likeText: {
    color: "white",
    fontSize: RFValue(18),
    fontFamily: "Bubblegum-Sans",
    marginLeft: RFValue(10)
  }
});
