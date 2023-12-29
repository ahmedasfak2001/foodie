import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from '../Constant'

const SearchFilter = ({ icon, placeholder }) => {
    return (
        <View style={styles.searchView}>
            <FontAwesome
                name={icon}
                size={20}
                color={colors.COLOR_PRIMARY}
                style={styles.icon}
            />
            <TextInput style={styles.searchTextInput} placeholder={placeholder} />
        </View>
    )
}

export default SearchFilter

const styles = StyleSheet.create({
    searchView: {
        backgroundColor: colors.COLOR_LIGHT,
        flexDirection: 'row',
        paddingVertical: 2,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginVertical: 16,
        marginLeft: '5%',
        marginRight: '5%'
    },
    icon: {
        marginTop: 10
    },
    searchTextInput: {
        paddingLeft: 10,
        fontSize: 16,
        color: '#808080'
    }
})