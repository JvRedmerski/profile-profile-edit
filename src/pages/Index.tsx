import React from "react";
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions} from "react-native";
import { useProfile } from "../contexts/ProfileContext";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function Index() {
    const { profileData, avatarUrl } = useProfile();
    const navigation = useNavigation();

    return (
        <View style={styles.main}>
            <Text style={styles.title}>Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.</Text>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.card}>
                    <Avatar uri={avatarUrl} size={120} />

                    <Text style={styles.title}>Nome: </Text>
                    <Text style={styles.info}>{profileData.name}</Text>

                    <Text style={styles.title}>Telefone: </Text>
                    <Text style={styles.info}>{profileData.phone || "-"}</Text>

                    <Text style={styles.title}>Cidade: </Text>
                    <Text style={styles.info}>{profileData.city || "-"}</Text>

                    <Text style={styles.title}>Sobre: </Text>
                    <Text style={styles.info}>{profileData.message || "-"}</Text>
                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={() => navigation.navigate("ProfileEdit" as any)}
                    >
                        <Text style={styles.editButtonText}>Editar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <View style={styles.footerItem}>
                    <View style={styles.footerIcon}>
                        {/* Aqui você pode colocar um ícone de coração */}
                    </View>
                    <Text style={styles.footerText}>Pets para adoção</Text>
                </View>
                <View style={styles.footerItem}>
                    <View style={styles.footerIcon}>
                        {/* Aqui você pode colocar um ícone de mensagem */}
                    </View>
                    <Text style={styles.footerText}>Mensagens</Text>
                </View>
            </View>
        </View>

    );
}

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        alignItems: "center",
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 100, // espaço para footer
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 16,
        borderWidth: 2,
        borderColor: "#fff",
    },
    name: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 6,
        textAlign: "center",
    },
    title: {
        fontSize: 14,
        color: "#3b82f6", // azul parecido com link
        marginBottom: 6,
        textAlign: "center",
        fontWeight: "bold",
    },
    info: {
        fontSize: 14,
        marginTop: 12,
        marginBottom: 24,
        paddingHorizontal: 12,
        textAlign: "center",
        color: "#111827",
    },
    card: {
        width: "100%",
        backgroundColor: "#f6f6f6",
        borderRadius: 16,
        padding: 20,
        marginBottom: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        alignItems: "center",
    },
    editButton: {
        width: "100%",
        paddingVertical: 16,
        backgroundColor: "#ef476f",
        borderRadius: 12,
        marginTop: 16,
    },
    editButtonText: {
        color: "#fff",
        fontWeight: "700",
        textAlign: "center",
        fontSize: 16,
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: width,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 16,
        backgroundColor: "#e0f7f1",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    footerItem: {
        alignItems: "center",
    },
    footerIcon: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#d1f0eb",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 4,
    },
    footerText: {
        fontSize: 12,
        color: "#111827",
    },
});