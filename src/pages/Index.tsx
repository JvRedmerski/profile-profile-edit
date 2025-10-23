import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image } from "react-native";
import { useProfile } from "../contexts/ProfileContext";
import Avatar from "../components/Avatar";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function Index() {
    const { profileData, avatarUrl } = useProfile();
    const navigation = useNavigation();

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
                    <Avatar uri={avatarUrl} size={120} />

                    <Text style={styles.title}>Nome:</Text>
                    <Text style={styles.info}>{profileData.name}</Text>

                    <Text style={styles.title}>Telefone:</Text>
                    <Text style={styles.info}>{profileData.phone || "-"}</Text>

                    <Text style={styles.title}>Cidade:</Text>
                    <Text style={styles.info}>{profileData.city || "-"}</Text>

                    <Text style={styles.title}>Sobre:</Text>
                    <Text style={styles.info}>{profileData.message || "-"}</Text>

                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={() => navigation.navigate("ProfileEdit" as never)}
                    >
                        <Text style={styles.editButtonText}>Editar</Text>
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
        paddingTop: 160, // mesma altura de padding do ProfileEdit
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
        fontSize: 16,
        fontWeight: "700",
        color: "#3772FF",
        marginBottom: 8,
    },
    info: {
        fontSize: 14,
        color: "#333",
        textAlign: "center",
        marginBottom: 16,
    },
    editButton: {
        backgroundColor: "#ef476f",
        borderRadius: 10,
        width: "100%",
        paddingVertical: 14,
        marginTop: 10,
    },
    editButtonText: {
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
});
