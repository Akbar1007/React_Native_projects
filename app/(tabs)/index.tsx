import icedCoffeeImg from '@assets/images/iced-coffee.png'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function app() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={icedCoffeeImg}
				resizeMode='cover'
				style={styles.image}
			>
				<Text style={styles.text}>Coffee Shop</Text>
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	image: {
		width: '100%',
		height: '100%',
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},
	text: {
		color: 'white',
		fontSize: 42,
		fontWeight: 'bold',
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
})
