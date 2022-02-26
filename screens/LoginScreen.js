import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { withSafeAreaInsets } from 'react-native-safe-area-context'
import Firebase from '../firebase';

const auth = Firebase.auth();

const LoginScreen = () => {

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const navigation = useNavigation()

useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
            navigation.replace("Home")
        }
    })
    return unsubscribe
},[])

// const handleSignUp = () => {
//     auth.createUserWithEmailAndPassword(email,password)
//     .then(userCredentials => {
//         const user = userCredentials.user;
//         console.log(user.email)
//     })
//     .catch(error => alert(error.message))
// }

const handleSignup = async () => {
    try {
      if (email !== '' && password !== '') {
        await auth.createUserWithEmailAndPassword(email, password);
      }
    } catch (error) {
    //   setSignupError(error.message);
    alert(error.message)
    }
  };

  const handleLogin = async () => {
      try {
          if (email !== '' && password !== '') {
              await auth.signInWithEmailAndPassword(email,password).then(userCredentials => {
                const user = userCredentials.user
                console.log("Logged In with : ", user.email)
              })
              
          }
      } catch (error) {
          alert("Invalid User, Kindly recheck Email and Password or Register")
      }
  }

    return (

        <KeyboardAvoidingView style={(styles.container)} behavior = "padding" >
            <View style={styles.inputContainer}>
                <TextInput placeholder='Email'
                value= {email}
                onChangeText = {text => setEmail(text)}
                style={styles.input}
                ></TextInput>
                 <TextInput placeholder='Pass'
                value= {password }
                onChangeText = {text => setPassword(text)}
                style={styles.input}
                secureTextEntry
                ></TextInput>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 

                style={styles.button}
                onPress = {handleLogin}
                >
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress = {handleSignup}
                style={[styles.button,styles.ButtonOutline]}
                >
                <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

    container : {
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center',

    },
    inputContainer : {
        width : '80%',
    },
    input : {
        backgroundColor: "white", 
        paddingHorizontal : 15,
        paddingVertical : 10,
        borderRadius : 10,
        marginTop : 5,
    },
    buttonContainer : {
        width : '60%',
        justifyContent:"center",
        alignItems : "center",
        marginTop : 40,
    },
    button : {
        backgroundColor : '#0782f9',
        width : '100%',
        padding : 15,
        borderRadius : 15,
        alignItems : 'center'
    },
    buttonText : {
        color : 'white',
        fontWeight : '700',
        fontSize : 16,
    },
    ButtonOutline : {
        backgroundColor : 'white',
        marginTop: 5,
        borderColor : '#0782f9',
        borderWidth : 2,
    },
    buttonOutlineText : {
        color : '#0782f9',
        fontWeight : '700',
        fontSize : 16,
    }

})
