import React from 'react';
import { View } from 'react-native';
import BoxSwitchLanguage from "../components/BoxSwitchLanguage"
import ListRecentWords from "../components/ListRecentWords"

export default function HomeScreen(props) {
  const {navigation} = props;
  console.log("Goto home screen");
  return (
    <View>
      <BoxSwitchLanguage nav={navigation}/>
      <ListRecentWords navigation={navigation} />
    </View>
  );
}
