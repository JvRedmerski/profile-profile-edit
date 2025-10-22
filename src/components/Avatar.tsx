import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default function Avatar({ uri, size=96 }: { uri?: string; size?: number }) {
  return (
    <View style={{ alignItems: "center" }}>
      {uri ? (
        <Image source={{ uri }} style={{ width: size, height: size, borderRadius: size/2 }} />
      ) : (
        <View style={[styles.placeholder, { width: size, height: size, borderRadius: size/2 }]}>
          <Text style={{ color: "#fff", fontWeight: "700" }}>U</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: { backgroundColor: "hsl(172,58%,62%)", alignItems: "center", justifyContent: "center" }
});
