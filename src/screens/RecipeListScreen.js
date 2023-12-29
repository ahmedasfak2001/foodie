import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// importing components
import Header from '../components/Header'
import SearchFilter from '../components/SearchFilter'
import CategoriesFilter from '../components/CategoriesFilter'
import RecipeCard from '../components/RecipeCard'


const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* render custom header */}
      <Header headerText={'Hi, User'} headerIcon={'bell-o'} />

      {/* render search */}
      <SearchFilter icon="search" placeholder={"Enter your favourite recipe"} />

      {/* render categories */}
      <View style={{ marginTop: 20, marginLeft: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Categories</Text>
        {/* Categories List */}
        <CategoriesFilter />
      </View>

      {/* Recipe list filer*/}
      <View style={{ marginTop: 22, flex: 1, marginLeft: 10, marginRight: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Recipes</Text>
        {/* Recipe List */}
        <RecipeCard />
      </View>

    </SafeAreaView>
  )
}

export default RecipeListScreen

const styles = StyleSheet.create({})