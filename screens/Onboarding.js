import {Text, View, StyleSheet, Button, TextInput, TextComponent} from 'react-native';
import { Header } from '../components/Header';
import { useState } from 'react';

export default function Onboarding(){
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const hadleOnboarding = () => {
        retur
    }
    return(
        <View>
            <Header/>
            <Text style={styles.title}>Let us get to know you</Text>
            <Text style={styles.lable}> Email </Text>
            <TextInput placeholder='email' onChangeText={setEmail} value={email} style={styles.input} />
            <Text style={styles.lable}> Name </Text>
            <TextInput placeholder='name' onChangeText={setName} value={name} style={styles.input} />
            <View style = {styles.btnContainer}>
                <Button title="Next" onPress={}/>
            </View>
    </View>
    )
}
const styles = StyleSheet.create({
    title: {fontFamily: 'Roboto', fontSize: 24,},
    input : {},
    btnContainer : {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})