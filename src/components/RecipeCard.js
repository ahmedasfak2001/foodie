import { FlatList, StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { recipeList, colors } from '../Constant'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;

const RecipeCard = () => {
    const navigation = useNavigation();

    return (
        <View>
            <FlatList data={recipeList}
                renderItem={({ item }) =>
                    <Pressable
                        onPress={() => navigation.navigate("RecipeDetail", { item: item })}
                        style={styles.recipeView}>
                        <Image source={item.image} style={styles.recipeImage} />
                        <Text>{item.name}</Text>
                        <View style={{ flexDirection: 'row', marginTop: 8 }}>
                            <Text>{item.time}</Text>
                            <Text> | </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginRight: 4 }}>{item.rating}</Text>
                                <FontAwesome name='star' color={colors.COLOR_PRIMARY} size={16} style={{ marginTop: 2 }} />
                            </View>
                        </View>
                    </Pressable>
                }
                numColumns={1}
                // columnWrapperStyle={{
                //     justifyContent: 'space-between',
                // }}
                showsVerticalScrollIndicator={false} />
        </View>
    )
}

export default RecipeCard

const styles = StyleSheet.create({
    recipeView: {
        backgroundColor: colors.COLOR_LIGHT,
        borderRadius: 18,
        marginVertical: 16,
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 26,

        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 7,
    },
    recipeImage: {
        width: 150,
        height: 150,
        resizeMode: "center"
    }
})

