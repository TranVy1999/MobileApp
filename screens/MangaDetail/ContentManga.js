import React from 'react';
import {
	View,
	Text,
	Dimensions,
	TouchableOpacity,
	StyleSheet,
	Button,
} from 'react-native';
import { ListItem, Avatar, Badge } from 'react-native-elements';
import Manga from '../../assets/manga';

const ContentManga = (props) => {
	// const { navigation } = props;
	return (
		<View>
			<View style={styles.containerInfor}>
				<Text>{Manga[0].name}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	content: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '90%',
		margin: 10,
	},
	itemName: {
		fontWeight: '700',
		color: '#ff6347',
		margin: 18,
	},
	containerInfor: {
		width: `calc(${Dimensions.get('window').width}px - 20px)`,
		overflow: 'hidden',
		margin: 10,
		marginBottom: 5,
		borderRadius: 4,
		backgroundColor: '#FFF',
		shadowColor: '#000',
		shadowOpacity: 0.3,
		shadowRadius: 10,
		shadowOffset: { width: 0, height: 0 },
	},
	loginBtn: {
		width: '90%',
	},
});

export default ContentManga;
