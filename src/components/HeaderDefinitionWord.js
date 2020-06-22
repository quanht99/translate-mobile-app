import React, { useState } from 'react';
import { StyleSheet, Text , ToastAndroid} from "react-native"
import { Header, Left, Body, Right, Button, Icon } from 'native-base';
import {FontAwesome,AntDesign} from "@expo/vector-icons"

export default function HeaderDefinitionWord(props) {
  const { navigation, title, handleBack} = props;
  const [nameIconStar, setNameIconStar] = useState("star-o");
  
  const showToastWithGravity = () => {
    setNameIconStar("star")
    ToastAndroid.showWithGravity(
      "Đã thêm vào danh sách từ vựng của bạn",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };
  return (
    <Header style={styles.headerTab}>
      <Left>
        <Button transparent onPress={handleBack}>
          <AntDesign name='arrowleft'  size={30} color="#ffffff"/>
        </Button>
      </Left>
      <Body>
        <Text style={styles.title}>{title}</Text>
      </Body>
      <Right>
        <Button transparent onPress={() => navigation.navigate('Home')}>
          <AntDesign name='search1' size={25} color="#ffffff"/>
        </Button>
        <Button transparent onPress={showToastWithGravity}>
          <FontAwesome name={nameIconStar} color={nameIconStar === 'star' ? "#e6e600" : "#ffffff"} backgroundColor="#ffffff" size={25} />
        </Button>
      </Right>
    </Header>
  );
}
const styles = StyleSheet.create({
  boxSearch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerTab: {
    backgroundColor: "#0077b3",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#ffffff"
  }
})
