import { Client, Databases, Query } from 'react-native-appwrite'
const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID || ''
const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID || ''
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID || ''

console.log(
	'Appwrite Config:',
	'PROJECT_ID:',
	PROJECT_ID ? 'OK' : 'MISSING',
	'DATABASE_ID:',
	DATABASE_ID ? 'OK' : 'MISSING',
	'COLLECTION_ID:',
	COLLECTION_ID ? 'OK' : 'MISSING'
)

const client = new Client()
	.setEndpoint('https://cloud.appwrite.io/v1')
	.setProject(PROJECT_ID)
const database = new Databases(client)
export const updateSearchCount = async (query: string, movie: Movie) => {
	const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
		Query.equal('search_term', query),
	])
	console.log({ query, movie })
}
