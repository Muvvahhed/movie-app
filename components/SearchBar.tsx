import { icons } from '@/constants/icons'
import React from 'react'
import { Image, TextInput, View } from 'react-native'

const SearchBar = ({
	placeholder,
	onPress,
	value,
	onChangeText,
}: {
	value: string
	onChangeText: (text: string) => void
	placeholder: string
	onPress?: () => void
}) => {
	return (
		<View className="flex-row items-center py-2 px-5 rounded-lg bg-dark-200">
			<Image source={icons.search} className="size-5" />
			<TextInput
				className="flex-1 ml-2 text-white"
				value={value}
				placeholder={placeholder}
				onPress={onPress}
				onChangeText={(text) => {
					onChangeText(text)
				}}
				placeholderTextColor="#a8b5db"
			/>
		</View>
	)
}

export default SearchBar
