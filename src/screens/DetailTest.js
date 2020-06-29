import React, { useEffect, useState } from "react"
import { View, StyleSheet , YellowBox, } from "react-native"
import { Text } from "native-base"
import { HOST } from "../constants/host_port"
import Axios from "axios"

import CheckBoxQuestion from "../components/TypeQuestion/checkBoxQuestion"
import RadioQuestion from "../components/TypeQuestion/radioQuestion"
import InputTextQuestion from "../components/TypeQuestion/inputTextQuestion"
import { MaterialIcons } from "@expo/vector-icons"
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler"

export default function DetailTest(props) {
  const { id_test } = props.route.params;
  const [list, setList] = useState([])
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0);

  function updateCount(tmp){
    if(tmp === 1){
      console.log("true");
    }else{
      console.log("false");
    }
    setCount(count+tmp);
  }

  useEffect(() => {
    YellowBox.ignoreWarnings(["VirtualizedLists should never be"]);
    Axios.get(`http://${HOST}:3000/tests/${id_test}/questions`)
      .then(res => {
        setList(res.data.data.questions)
      })
      .catch(err => console.log("err: ", err))
  }, [])
  return (
    list.length !== 0 && index + 1 <= list.length ? (
      <View style={styles.boxQuestion}>
        <ScrollView style={styles.body}>
        {
          (list[index].type) === "check-box" ? (
            <CheckBoxQuestion key={list[index].id_question} item={list[index]} idx={index + 1} updateCount={updateCount}/>
          ) : (list[index].type === "radio") ? (
            <RadioQuestion key={list[index].id_question} item={list[index]} idx={index + 1} updateCount={updateCount}/>
          ) : (list[index].type === "text-input") ? (
            <InputTextQuestion key={list[index].id_question} item={list[index]} idx={index + 1} updateCount={updateCount}/>
          ) : (
            <Text>aaa</Text>
          )
        }
        </ScrollView>
        <View style={styles.bottom}>
        {
              <TouchableOpacity onPress={() => setIndex(index + 1)} >
                <View style={styles.footer} >
                  <Text style={{ color: "#0077b3", fontSize: 18   }}>{(index + 1 === list.length) ? "End" : "Next"}</Text>
                  <MaterialIcons name="keyboard-arrow-right" color="#0077b3" size={25} />
                </View>
              </TouchableOpacity>
        }
        </View>
      </View>) : <Text>Screen Noti Count {count}</Text>
  )
}
const styles = StyleSheet.create({
  boxQuestion: {
    flex: 1,
    backgroundColor: "#ffffff",
    
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    maxHeight: "95%",
    minWidth: "95%"
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: "2%"
  }
})