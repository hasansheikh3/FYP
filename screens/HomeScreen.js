import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {React, useState, useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Firebase from '../firebase';

const auth = Firebase.auth();
const HomeScreen = () => {

 const [data,setData] = useState([{}])
 useEffect(()=> {
     fetch("http://localhost:5000/fruits").then(
         res => res.json()
     ).then(
         data => {
             setData(data)
             console.log(data)
         }
     )
 },[])
    
    

    const email = auth.currentUser.email
    const emailSplit = email.split('@')

    const navigation = useNavigation()

    const handleSignOut = async () => {
        try {
            await auth.signOut().then(()=> {
                navigation.replace("Login")
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return ( <>
        <View style={styles.container}>
            <Text style={styles.mainText}>Welcome {emailSplit[0]} to Smart Fridge, To begin click the + Button in the Middle</Text>
            <TouchableOpacity style={styles.button} onPress={handleSignOut}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>

        <View>
            {data.fruits.map((fruit,i)=> (
                <Text key={i}>{fruit}</Text>
            ))}
        </View>
      
        </>
      

   
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : "center",
        alignItems : "center"
    },
    button : {
        backgroundColor : '#0782f9',
        width : '60%',
        padding : 15,
        borderRadius : 15,
        alignItems : 'center',
        marginTop : 40,
    },
    buttonText : {
        color : 'white',
        fontWeight : '700',
        fontSize : 16,
    },
    mainText : {
        color : '#000',
        margin : 20
    }
})
