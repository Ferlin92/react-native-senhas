import {Text, View, StyleSheet, Pressable, TouchableOpacity} from "react-native";
import * as Clipboard from "expo-clipboard"
import useStorage from "../../../hooks/useStorage";
export default function ModalPassword({password, handleCLose}){

   const { saveItem } = useStorage();


    async function handleCopyPassword(){
        await  Clipboard.setStringAsync(password);
        await  saveItem("@pass", password);
        alert("senha salva com sucesso!")
        handleCLose(false);
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                Senha Gerada
                </Text>
                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>
                        {password}
                    </Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}
                              onPress= {handleCLose}
                        >
                            Voltar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                        <Text style={styles.buttonSaveText}>
                            Salvar
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    content:{
        backgroundColor: 'white',
        width: '85%',
        paddingTop: 25,
        paddingBottom: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },
    innerPassword:{
        backgroundColor: '#0e0e0e',
        width: '90%',
        padding: 15,
        borderRadius:8
    },
    text:{
        fontSize: 20,
       color: 'white',
       textAlign: "center",
    },
    buttonArea:{
        flexDirection: "row",
        width: '97%',
        padding: 15,
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between",
    },
    button:{
        backgroundColor: 'gray',
        width: 120,
        padding:10,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonSave:{
        backgroundColor: "green",
    }

})