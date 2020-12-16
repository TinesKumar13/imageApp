import React, { useState } from 'react'

import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import DiceOne from "./assets/dice1.png"
import DiceTwo from "./assets/dice2.png"
import DiceThree from "./assets/dice3.png"
import DiceFour from "./assets/dice4.png"
import DiceFive from "./assets/dice5.png"
import DiceSix from "./assets/dice6.png"

const App = () => {


  const [dice , setDice] = useState()
  const [dice2 , setDice2] = useState()
 


  const handleImage = () => {

   var n = Math.floor((Math.random() * 6) + 1);
   var o = Math.floor((Math.random() * 6) + 1);



  switch (n) {
    case 1:
      setDice(DiceOne)
      break;

      case 2:
        setDice(DiceTwo)
        break;

        case 3:
          setDice(DiceThree)
          break;

          case 4:
            setDice(DiceFour)
            break;

            case 5:
              setDice(DiceFive)
              break;

              case 6:
                setDice(DiceSix)
                break;
  
    default:
      break;
  }

  switch (o) {
    case 1:
      setDice2(DiceOne)
      break;

      case 2:
        setDice2(DiceTwo)
        break;

        case 3:
          setDice2(DiceThree)
          break;

          case 4:
            setDice2(DiceFour)
            break;

            case 5:
              setDice2(DiceFive)
              break;

              case 6:
                setDice2(DiceSix)
                break;
  
    default:
      break;
  }

  }

  return (
    <>
    <View style = {styles.container}>

      <Image source= {dice} style = {styles.image}/>
      <Image source= {dice2} style = {styles.image}/>
      <TouchableOpacity onPress={handleImage}>
      <Text style= {styles.text}>Roll Me</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}

export default App


const styles = StyleSheet.create({
 
  container : {
    flex : 1 ,
    backgroundColor : "#222831" ,
    alignItems: "center",
    justifyContent: "center"
  },

  image : {
    height : 200,
    width: 200
  },

  text: {
    backgroundColor: "transparent",
    fontSize: 25,
    marginTop: 30,
    color: '#F2A365',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 3,
    textAlign:"center"
  }
})