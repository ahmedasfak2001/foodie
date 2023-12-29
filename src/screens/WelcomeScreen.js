import { Image, StyleSheet, Text, View, Dimensions, Alert } from 'react-native'
import React from 'react'
import { colors } from '../Constant';
import { TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require("../images/welcome1.png")} />

            <Text style={styles.text1}>40k+ Premium Recipes</Text>
            <Text style={styles.text2}>Cook Like a Chef</Text>

            <TouchableOpacity
                onPress={() => { navigation.navigate("RecipeList") }}
                style={styles.btnOpacity}>
                <Text style={styles.btnText}>Lets' Begin</Text>
            </TouchableOpacity>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    text1: {
        fontSize: 20,
        color: colors.COLOR_PRIMARY,
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 44,
        marginBottom: '5%',
        color: colors.COLOR_DARK_ALT
    },
    btnOpacity: {
        backgroundColor: colors.COLOR_PRIMARY,
        borderRadius: 18,
        paddingVertical: 18,
        width: windowWidth - 70,
        alignItems: 'center',
    },
    btnText: {
        fontSize: 18,
        color: colors.COLOR_LIGHT,
        fontWeight: '700',
    }
})