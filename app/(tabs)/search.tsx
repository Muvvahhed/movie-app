import MovieCard from '@/components/MovieCard'
import SearchBar from '@/components/SearchBar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api'
import { updateSearchCount } from '@/services/appwrite'
import useFetch from '@/services/useFetch'
import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'

const Search = () => {
	const [search, setSearch] = React.useState('')
	const {
		data: movies,
		loading: moviesLoading,
		error: moviesError,
		refetch,
		reset,
	} = useFetch(() => fetchMovies({ query: search }), false)

	useEffect(() => {
		updateSearchCount(search, movies?.[0])
		const timeout = setTimeout(async () => {
			if (search.trim()) {
				await refetch()
			} else {
				reset()
			}
		}, 500)

		return () => {
			clearTimeout(timeout)
		}
	}, [search])
	return (
		<View className="flex-1 bg-primary">
			<Image
				source={images.bg}
				className="flex-1 absolute w-full z-0"
				resizeMode="cover"
			/>
			<FlatList
				data={movies}
				renderItem={({ item }) => <MovieCard {...item} />}
				keyExtractor={(item) => item.id.toString()}
				numColumns={3}
				columnWrapperStyle={{
					justifyContent: 'center',
					marginVertical: 16,
					gap: 16,
				}}
				contentContainerStyle={{
					paddingBottom: 100,
				}}
				className="px-5"
				ListHeaderComponent={
					<View className="w-full justify-center mt-20 items-center">
						<Image source={icons.logo} className="w-12 h-10 " />
						<View className="my-5 w-full">
							<SearchBar
								placeholder="Search movies ..."
								value={search}
								onChangeText={(text: string) => {
									setSearch(text)
								}}
							/>
						</View>

						{moviesLoading && (
							<ActivityIndicator
								size={'large'}
								color={'#0000ff'}
								className="my-3"
							/>
						)}

						{moviesError && (
							<Text className="text-red-500 px-5 my-3">
								Error: {moviesError.message}
							</Text>
						)}

						{!moviesLoading &&
							!moviesError &&
							search.trim() &&
							movies?.length > 0 && (
								<Text className="text-cl text-white font-bold">
									Search results for{' '}
									<Text className="text-accent">{search}</Text>
								</Text>
							)}
					</View>
				}
				ListEmptyComponent={
					!moviesLoading && !moviesError ? (
						<View className="mt-10 px-5">
							<Text className="text-center text-gray-500">
								{search.trim()
									? `No results found for "${search}"`
									: 'Search for a movie'}
							</Text>
						</View>
					) : null
				}
			/>
		</View>
	)
}

export default Search
