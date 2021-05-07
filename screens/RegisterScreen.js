import React, { useLayoutEffect, useEffect, useState } from "react";
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from "react-native-elements";

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

useLayoutEffect(() => {
    navigation.setOptions({
        headerBackTitle: "Connexion",
    });     
}, [navigation])

    const register = () => {};

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
           <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50}}>
                
                Créer un compte Signal
                </Text>

         <View style={styles.inputContainer}>
                <Input
                placeholder="Nom et Prénom" 
                autofocus 
                type="text"
                value={name}
                onChangeText={(text) => setName(text)}
                />

<Input
                placeholder="Adresse mail" 
                type="email"
                value={email}
                onChangeText={(email) => setEmail(email)}
                />

<Input
                placeholder="Mot-de-passe" 
                autofocus 
                type="password"
                secureTextEntry
                value={password}
                onChangeText={(password) => setPassword(password)}
                />

<Input
                placeholder="Votre photo de profil (facultatif)"  
                type="text"
                value={imageUrl}
                onChangeText={(text) => setImageUrl(text)}
                onSubmitEditing={register}
                />

                </View>

                <Button
                containerStyle={styles.button}
                raised
                onPress={register}
                title="S'enregister"
                />
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    inputContainer: {
        width: 300,
    }
});