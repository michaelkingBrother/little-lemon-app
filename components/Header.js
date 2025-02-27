import {View, Image, StyleSheet} from 'react-native';
export default function Header() {
    return (
        <View style = {styles.header}>
            <Image source={require('./assets/images/react-logo.png')} style ={styles.logo}/>
            <Text style={styles.siteName}>Header of little lemon</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: 40,
        height: 40,
    },
    siteName: {
        flex: 1,
        fontFamily: 'Roboto', 
        fotSite: 24,
    }
})