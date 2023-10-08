import { useEffect, useLayoutEffect, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function RloadScreen({ refreshing, onRefresh }) {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
