import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import ModalPassword from '../../assets/components/modal/modal';

export default function Home() {
    const [size, setSize] = useState(4);
    const [passwordValue, setPassWordValue] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890/\\!@#$%&*';

    useEffect(() => {
        console.log(passwordValue);
    }, [passwordValue]);

    function generatePassword() {
        let password = '';
        for (let i = 0, n = charset.length; i < size; i++) {
            password += charset.charAt(Math.floor(Math.random() * n));
        }
        setPassWordValue(password);
        setModalVisible(true);
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title}>{size} Caracteres</Text>
            <View style={styles.area}>
                <Slider
                    style={{ height: 50 }}
                    minimumValue={4}
                    maximumValue={20}
                    minimumTrackTintColor="#02F707"
                    maximumTrackTintColor="#E2042E"
                    thumbTintColor="#392de9"
                    value={size}
                    onValueChange={(value) => setSize(value.toFixed(0))}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}>Gerar Senha</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType={'fade'} transparent={true}>
                <ModalPassword password={passwordValue} handleCLose={() => setModalVisible(false)} />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E4E4E6',
    },
    logo: {
        marginBottom: 60,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    area: {
        marginTop: 14,
        marginBottom: 14,
        width: '80%',
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 8,
    },
    button: {
        backgroundColor: '#392de9',
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
});
