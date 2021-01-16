import React from 'react';
import {
	View,
	StyleSheet,
	FlatList,
} from 'react-native';
import { ListItem, Avatar,Image } from 'react-native-elements';

const keyExtractor = (item, index) => index.toString();

const renderItem = ({ item }) => (
	<ListItem bottomDivider>
		<ListItem.Content>
			<ListItem.Title>
				{/* <Avatar source={{ uri: item.img }} size={380} /> */}
				<Image
					source={{uri: item.img }} style={{height: 450, width:380}}
				/>
			</ListItem.Title>
		</ListItem.Content>
	</ListItem>
);
const ContentManga = (props) => {
	// const { navigation } = props;
	const { chapter } = props.route.params;
	const { imgs } = chapter[0];
	return (
		<View>
			<FlatList
				keyExtractor={keyExtractor}
				data={imgs}
				renderItem={renderItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	content: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

});

export default ContentManga;