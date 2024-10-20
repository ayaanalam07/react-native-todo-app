import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Services = () => {
  return (
    <>
    <Text style={{
        textAlign:'center'
    }}>Hello Services</Text>
    <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }}>
    <Link href={'/'}>Home</Link>
    <Link href={'/about'}>About</Link>
    <Link href={'/contact'}>Contact</Link>
        </View>
    </>
  )
}

export default Services