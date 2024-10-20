import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
<>
<Text style={{
    textAlign:'center'
}}>Hello About</Text>
<View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }}>
<Link href={'/'}>Home</Link>
<Link href={'/contact'}>Contact</Link>
<Link href={'/services'}>Services</Link>
    </View>
</>
  )
}

export default About