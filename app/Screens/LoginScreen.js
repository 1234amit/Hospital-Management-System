import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Screen from '../components/Screen'
import colors from '../config/colors'
import Form from '../components/forms/Form'
import ErrorMessage from '../components/forms/ErrorMessage'
import FormField from '../components/forms/FormField'
import SubmitButton from '../components/forms/SubmitButton'


const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-hospital.png")} />
        
        <Form
            initialValues={{
              email:'',
              password:''
            }}
        
            // onSubmit={handleSubmit}
            // validationSchema={validationSchema}
        >
              <ErrorMessage error="Invalid Email/password" />
                <FormField
                  maxLength={255}
                  name="email"
                  placeholder="Your Email"
                />
                <FormField
                  
                  name="password"
                  placeholder="Your Password"
                  secureTextEntry={true}
                />
                <SubmitButton title="Login" />
                
                <TouchableOpacity style={styles.redirect} onPress={() => navigation.navigate('Register')} >
                  <Text>Not an Account?</Text>
                </TouchableOpacity>

        </Form>
        
    </Screen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.grey,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo:{
      height: 150,
      width: 150,
      alignSelf:'center',
    },
})