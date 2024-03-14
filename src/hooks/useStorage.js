import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    // buscar itens salvos
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        } catch (error) {
            console.log("Erro ao buscar", error);
            return [];
        }
    };

    // salvar um item no storage
    const saveItem = async (key, value) => {
        try {
            let passwords = await getItem(key); // busca itens
            passwords.push(value); // adiciona item
            await AsyncStorage.setItem(key, JSON.stringify(passwords)); // salva item
        } catch (error) {
            console.log("Erro ao salvar", error);
        }
    };

    // remover algum item
    const removeItem = async (key, item) => {
        try {
            let passwords = await getItem(key); // busca itens
            let myPasswords = passwords.filter((password) => {
                return password !== item;
            });
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
            return myPasswords;
        } catch (error) {
            console.log("Erro ao deletar", error);
            return [];
        }
    };

    return {
        getItem,
        saveItem,
        removeItem,
    };
};

export default useStorage;