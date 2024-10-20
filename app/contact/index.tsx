import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <>
    <Text style={{
        textAlign:'center'
    }}>Hello Contact</Text>
    <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }}>
    <Link href={'/'}>Home</Link>
    <Link href={'/about'}>About</Link>
    <Link href={'/services'}>Services</Link>
        </View>
    </>
  )
}

export default Contact