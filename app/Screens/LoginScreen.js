import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import colors from '../config/colors'

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
        <Text>LoginScreen</Text>
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
    }
})