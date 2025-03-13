import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props {
    placeholder: string;
    onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
        <Image source={icons.search} className='size-5'resizeMode='contain' tintColor='#AB8BFF'/>
        <TextInput 
            onPress={onPress}
            placeholder={placeholder}
            value=''
            onChangeText={() => {}}
            placeholderTextColor="#A8B5DB"
            className='flex-1 ml-2 text-white'
        />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})