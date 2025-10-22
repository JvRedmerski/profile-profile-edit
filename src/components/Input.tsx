import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

const BORDER = "hsl(0,0%,87%)";
const TEXT = "hsl(0,0%,20%)";

export default function Input({ label, value, onChangeText, multiline }: any) {
  return (
    <View style={styles.wrap}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, multiline && styles.multiline]}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        placeholderTextColor="#9CA3AF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { width: "100%", marginBottom: 12 },
  label: { marginBottom: 6, fontWeight: "600", color: TEXT },
  input: { borderWidth: 1, borderColor: BORDER, padding: 10, borderRadius: 8, color: TEXT },
  multiline: { minHeight: 100, textAlignVertical: "top" }
});
