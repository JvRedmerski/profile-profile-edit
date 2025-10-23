import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    Alert,
    TextInput,
    Image,
    Dimensions
} from "react-native";
import { useProfile, profileSchema } from "../contexts/ProfileContext";
import Avatar from "@/components/Avatar";

const { width } = Dimensions.get("window");

export default function ProfileEdit() {
    const { profileData, updateProfile } = useProfile();
    const [form, setForm] = useState(profileData);

    const onSave = () => {
        const parsed = profileSchema.safeParse(form);
        if (!parsed.success) {
            const first = parsed.error.errors[0];
            Alert.alert("Erro", first.message);
            return;
        }
        updateProfile(form);
        Alert.alert("Sucesso", "Perfil atualizado");
    };

    return (
        <View style={styles.main}>
            <View style={styles.headerContainer}>
                <Image
                    source={require("../../assets/header.png")}
                    style={styles.headerImage}
                    resizeMode="cover"
                />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.infoText}>
                    Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.
                </Text>

                <View style={styles.card}>
                    <Text style={styles.title}>Perfil</Text>

                    <Avatar uri={form.avatarUrl} size={100} />
                    <Text style={styles.editText}>Clique na foto para editar</Text>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput
                            style={styles.input}
                            value={form.name}
                            onChangeText={(t) => setForm({ ...form, name: t })}
                            placeholder="Nome completo"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Telefone</Text>
                        <TextInput
                            style={styles.input}
                            value={form.phone}
                            onChangeText={(t) => setForm({ ...form, phone: t })}
                            placeholder="55 11 XXXXXXXX"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Cidade</Text>
                        <TextInput
                            style={styles.input}
                            value={form.city}
                            onChangeText={(t) => setForm({ ...form, city: t })}
                            placeholder="Cidade"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Mensagem</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            multiline
                            numberOfLines={4}
                            value={form.message}
                            onChangeText={(t) => setForm({ ...form, message: t })}
                            placeholder="Escreva algo sobre você..."
                        />
                    </View>

                    <TouchableOpacity style={styles.saveButton} onPress={onSave}>
                        <Text style={styles.saveButtonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <View style={styles.footerItem}>
                        <Text style={styles.footerIcon}>💚</Text>
                        <Text style={styles.footerText}>Pets para adoção</Text>
                    </View>
                    <View style={styles.footerItem}>
                        <Text style={styles.footerIcon}>💬</Text>
                        <Text style={styles.footerText}>Mensagens</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#f8f8f8",
    },
    headerContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: -1,
    },
    headerImage: {
        width: width,
        height: 180,
    },
    scrollContainer: {
        alignItems: "center",
        paddingHorizontal: 24,
        paddingTop: 160,
        paddingBottom: 80,
    },
    infoText: {
        fontSize: 14,
        color: "#1e3a8a",
        textAlign: "center",
        marginBottom: 20,
    },
    card: {
        backgroundColor: "#fff",
        width: "100%",
        borderRadius: 16,
        padding: 24,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        color: "#222",
        marginBottom: 20,
    },
    editText: {
        fontSize: 12,
        color: "#ef476f",
        marginTop: 6,
        marginBottom: 20,
    },
    inputGroup: {
        width: "100%",
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        color: "#444",
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        color: "#333",
        backgroundColor: "#fff",
    },
    textArea: {
        textAlignVertical: "top",
    },
    saveButton: {
        backgroundColor: "#ef476f",
        borderRadius: 10,
        width: "100%",
        paddingVertical: 14,
        marginTop: 10,
    },
    saveButtonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 30,
    },
    footerItem: {
        alignItems: "center",
    },
    footerIcon: {
        fontSize: 20,
        marginBottom: 6,
    },
    footerText: {
        fontSize: 12,
        color: "#333",
    },
    footerNote: {
        fontSize: 11,
        color: "#008f84",
        marginTop: 16,
        textAlign: "center",
    },
});
