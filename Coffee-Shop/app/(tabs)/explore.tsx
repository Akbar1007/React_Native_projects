import { StyleSheet, Text, View } from 'react-native'

export default function exploe() {
	return (
		<View style={styles.container}>
			<Text>Information</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
})
