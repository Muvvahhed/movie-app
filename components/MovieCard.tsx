import { icons } from '@/constants/icons'
import { Link } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MovieCard = ({
	id,
	poster_path,
	title,
	vote_average,
	release_date,
}: Movie) => {
	return (
		<Link href={`/movies/${id}`} asChild>
			<TouchableOpacity className="w-[30%]">
				<Image
					source={{
						uri: poster_path
							? `https://image.tmdb.org/t/p/w500${poster_path}`
							: 'https://placehold.co/600x400/1a1a1a/ffffff.png',
					}}
					className="w-full h-52 rounded-lg mb-3"
					resizeMode="cover"
				/>
				<Text className="text-white text-sm font-semibold" numberOfLines={1}>
					{title}
				</Text>
				<View className="flex-row flex items-center justify-start gap-x-1">
					<Image source={icons.star} className="w-4 h-4" resizeMode="contain" />
					<Text className="text-white text-xs font-bold uppercase">
						{vote_average?.toFixed(1)}
					</Text>
				</View>
				<View className="flex-row flex ">
					<Text className="text-xs text-light-300 font-medium mt-1">
						{release_date?.split('-')[0]}
					</Text>
					{/* <Text className="text-xs text-light-300 font-medium uppercase">
						Movie
					</Text> */}
				</View>
			</TouchableOpacity>
		</Link>
	)
}

export default MovieCard

const styles = StyleSheet.create({})
