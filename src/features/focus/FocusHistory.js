import React, { useState } from "react";
import { Text, View, FlatList, SafeAreaView, StyleSheet } from "react-native";

import { RoundedButton } from "../../components/RoundedButton";
import { fontSizes, spacingSizes } from "../../utils/sizes";
import { colors } from "../../utils/color";

const HistoryItem = ({ item, index }) => (
  <Text key={`${index}`} style={styles.historyItem(item.status)}>
    {item.subject}
  </Text>
);

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };
  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: "center" }}>
        {focusHistory.length ? (
          <>
            <Text style={styles.title}>Things we've focused on </Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: "center" }}
              data={focusHistory}
              renderItem={HistoryItem}
              keyExtractor={(item, i) => i}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        ) : null}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status ? "green" : "red",
    fontSize: fontSizes.md,
  }),
  title: {
    color: "white",
    fontSize: fontSizes.xl,
  },
  clearContainer: {
    alignItems: "center",
    padding: spacingSizes.md,
  },
});
