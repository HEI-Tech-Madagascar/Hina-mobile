import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useThemeStyles } from "@/hooks";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { Task, TASKS } from "@/constants";

type TabButtonProps = {
  label: string;
  icon: keyof typeof AntDesign.glyphMap;
  isActive: boolean;
  onPress: () => void;
  colors: ReturnType<typeof useThemeStyles>["colors"];
  typography: ReturnType<typeof useThemeStyles>["typography"];
};

type TaskItemProps = {
  task: Task;
  onCheck: () => void;
  colors: ReturnType<typeof useThemeStyles>["colors"];
  typography: ReturnType<typeof useThemeStyles>["typography"];
};

const TabButton = ({ label, icon, isActive, onPress, colors, typography }: TabButtonProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.tab, isActive && styles.activeTab]}>
    <AntDesign name={icon} size={18} color={isActive ? colors.primary : colors.subtext} />
    <Text
      style={[
        styles.tabText,
        typography.text,
        { color: isActive ? colors.primary : colors.subtext },
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

const TaskItem = ({ task, onCheck, colors, typography }: TaskItemProps) => (
  <View style={[styles.taskItem, { backgroundColor: colors.searchBar }]}>
    <TouchableOpacity
      style={[styles.checkboxContainer, task.completed && styles.checkboxContainerCompleted]}
      onPress={onCheck}
    >
      {task.completed && <AntDesign name="check" size={16} color="white" />}
    </TouchableOpacity>
    <Text
      style={[
        styles.taskText,
        task.completed && styles.taskTextCompleted,
        { color: colors.text },
        typography.text,
      ]}
    >
      {task.text}
    </Text>
    <View style={styles.taskActions}>
      <TouchableOpacity style={styles.taskAction}>
        <FontAwesome name="pencil" size={16} color={colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.taskAction}>
        <FontAwesome name="remove" size={16} color={colors.primary} />
      </TouchableOpacity>
    </View>
  </View>
);

export default function Student() {
  const [activeTab, setActiveTab] = useState("tasks");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tasks, _setTasks] = useState(TASKS);
  const { colors, typography } = useThemeStyles();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.tabsContainer}>
        <TabButton
          label="Tâches"
          icon="checkcircle"
          isActive={activeTab === "tasks"}
          onPress={() => setActiveTab("tasks")}
          colors={colors}
          typography={typography}
        />
        <TabButton
          label="Agenda"
          icon="calendar"
          isActive={activeTab === "calendar"}
          onPress={() => setActiveTab("calendar")}
          colors={colors}
          typography={typography}
        />
      </View>

      {activeTab === "tasks" && (
        <View style={styles.content}>
          <View style={[styles.addTaskContainer, { backgroundColor: colors.searchBar }]}>
            <TextInput placeholder="Ajouter une tâche..." style={[styles.input, typography.text]} />
            <TouchableOpacity style={styles.addButton}>
              <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.taskList}>
            {tasks.length === 0 ? (
              <View style={styles.emptyState}>
                <Text style={[styles.emptyStateText, typography.title, { color: colors.text }]}>
                  Aucune tâche pour le moment
                </Text>
              </View>
            ) : (
              tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  colors={colors}
                  typography={typography}
                  onCheck={() => console.log("clicked")}
                />
              ))
            )}
          </ScrollView>
        </View>
      )}
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
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  addTaskContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    borderRadius: 50,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  addButton: {
    backgroundColor: "#007FFF",
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  taskList: { flex: 1 },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
  },
  emptyStateText: {
    fontSize: 16,
  },
  taskItem: {
    flexDirection: "row",
    marginBottom: 10,
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#007FFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  checkboxContainerCompleted: {
    backgroundColor: "#007FFF",
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  taskTextCompleted: {
    textDecorationLine: "line-through",
    opacity: 0.6,
  },
  taskActions: {
    flexDirection: "row",
  },
  taskAction: {
    marginLeft: 12,
    padding: 4,
  },
});
