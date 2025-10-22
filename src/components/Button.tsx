import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const PRIMARY = "hsl(172,58%,62%)";
export default function Button({ onPress, children }: { onPress?: ()=>void; children: React.ReactNode }) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: PRIMARY,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3
  },
  text: {
    color: "hsl(0,0%,100%)",
    fontWeight: "700"
  }
});
