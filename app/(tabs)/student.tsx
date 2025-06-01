import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useThemeStyles } from "@/hooks";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export default function Student() {
  const { colors, typography } = useThemeStyles();
  const [activeTab, setActiveTab] = useState("tasks");

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          onPress={() => setActiveTab("tasks")}
          style={[styles.tab, activeTab === "tasks" && styles.activeTab]}
        >
          <AntDesign
            name="checkcircle"
            size={18}
            color={activeTab === "tasks" ? colors.primary : colors.subtext}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === "tasks" && styles.activeTabText,
              {
                color: activeTab === "tasks" ? colors.primary : colors.subtext,
              },
              typography.text,
            ]}
          >
            Tâches
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("calendar")}
          style={[styles.tab, activeTab === "calendar" && styles.activeTab]}
        >
          <AntDesign
            name="calendar"
            size={18}
            color={activeTab === "calendar" ? colors.primary : colors.subtext}
          />

          <Text
            style={[
              styles.tabText,
              activeTab === "calendar" && styles.activeTabText,
              {
                color: activeTab === "calendar" ? "#007FFF" : colors.subtext,
              },
              typography.text,
            ]}
          >
            Agenda
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  tabsContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  tab: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 12,
    backgroundColor: "transparent",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#007FFF",
  },
  tabText: {
    marginLeft: 6,
    fontWeight: "500",
  },
  activeTabText: {
    color: "#007FFF",
  },
});
