import React, { useEffect } from 'react';
import { Text, Image, StyleSheet } from 'react-native';
//container que envolve todas astelas
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {  NavigationContainer, useNavigation } from '@react-navigation/native'


export default () => {
    
    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                // validar token
                
            } else {
                navigation.navigate('Entrar');
            }
        }
        checkToken();        
    }, []);

    return (
        <Container>
            <Image source={require("../../imagens/inicio.png")} style= {styles.imagem} />
            <LoadingIcon size="large" color="#ffff" />
        </Container>
    );
}

const styles = StyleSheet.create({

    imagem: {
        width: 270,
        height: 270,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 200,
        backgroundColor: "#fff",
      }

});