import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colors } from '../Constant'

const Header = ({ headerText, headerIcon}) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>{headerText}</Text>
      <FontAwesome name={headerIcon} size={24} color={colors.COLOR_PRIMARY}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10
    },
    headerText: {
        flex: 1,
        fontSize: 22,
        fontWeight: '700'
    }
})