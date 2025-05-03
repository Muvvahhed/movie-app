import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import {
	Image,
	ImageBackground,
	ImageSourcePropType,
	StyleSheet,
	Text,
	View,
} from 'react-native'

const TabIcon = ({
	focused,
	icon,
	title,
}: {
	focused: boolean
	icon: ImageSourcePropType
	title: string
}) => (
	<>
		{focused ? (
			<ImageBackground
				source={images.highlight}
				className="flex flex-row w-full flex-1 min-w-[100px] min-h-16 items-center justify-center rounded-full mt-2 overflow-hidden"
			>
				<Image source={icon} tintColor={'#151312'} className="size-5" />
				<Text className="text-secondary text-base font-semibold ml-2">
					{title}
				</Text>
			</ImageBackground>
		) : (
			<View className="w-full justify-center items-center mt-4 rounded-full">
				<Image source={icon} tintColor={'#A8B5DB'} className="size-5" />
			</View>
		)}
	</>
)

const _Layout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarItemStyle: {
					width: '100%',
					height: '100%',
					alignItems: 'center',
					justifyContent: 'center',
				},
				tabBarStyle: {
					backgroundColor: '#0f0D23',
					marginBottom: 36,
					marginHorizontal: 10,
					borderRadius: 50,
					height: 52,
					borderWidth: 0,
					borderColor: '#0f0D23',
					position: 'absolute',
					overflow: 'hidden',
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} title="Home" icon={icons.home} />
					),
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					title: 'Search',
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} title="Search" icon={icons.search} />
					),
				}}
			/>
			<Tabs.Screen
				name="saved"
				options={{
					title: 'Saved',
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} title="Saved" icon={icons.save} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: 'Profile',
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} title="Profile" icon={icons.person} />
					),
				}}
			/>
		</Tabs>
	)
}

export default _Layout

const styles = StyleSheet.create({})
