import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { categories, colors } from '../Constant'

const CategoriesFilter = () => {
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((category, index) => {
                    return (
                        <View style={[styles.categoriesView, {backgroundColor: index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT}]}>
                            <Text style={{color: index === 0 && colors.COLOR_LIGHT, fontSize: 18}}>{category.category}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default CategoriesFilter

const styles = StyleSheet.create({
    categoriesView: {
        marginRight: 36,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginVertical: 16,

        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 7,
    }
})