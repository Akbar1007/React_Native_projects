import icedCoffeeImg from '@/assets/images/iced-coffee.png'
import { Link } from 'expo-router'
import {
	ImageBackground,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native'

export default function app() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={icedCoffeeImg}
				resizeMode='cover'
				style={styles.image}
			>
				<Text style={styles.title}>Coffee Shop</Text>

				<Link href='/contact' style={{ marginHorizontal: 'auto' }}>
					{' '}
					<Pressable style={styles.button}>
						<Text style={styles.buttonText}>Contact Us</Text>
					</Pressable>
				</Link>
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
	title: {
		color: 'white',
		fontSize: 42,
		fontWeight: 'bold',
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
		marginBottom: 120,
	},
	link: {
		color: 'white',
		fontSize: 42,
		fontWeight: 'bold',
		textAlign: 'center',
		textDecorationLine: 'underline',
		backgroundColor: 'rgba(0,0,0,0.5)',
		padding: 4,
	},
	button: {
		backgroundColor: 'rgba(0,0,0,0.75)',
		height: 60,
		borderRadius: 20,
		marginHorizontal: 'auto',
		padding: 6,
		justifyContent: 'center',
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
		padding: 4,
	},
})
