import React from "react";
import DetailWord from "../components/DetailWord";
import {Text} from "react-native"

export default function DefinitionScreen({ navigation, route }) {
  return (
    // <DetailWord navigation={navigation} route={route} />
    <Text>
      {route.params.wordMeaning}
    </Text>
  )
}
