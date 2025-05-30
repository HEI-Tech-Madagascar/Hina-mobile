import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { useColorScheme, View, TouchableOpacity } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const colors = {
    background: isDark ? "#15202B" : "#FFFFFF",
    text: isDark ? "#FFFFFF" : "#14171A",
    inactive: isDark ? "#8899A6" : "#657786",
    active: "#007FFF",
    icon: "#007FFF",
    search: "#FFFFFF",
  };

  const tabIcon = (name: string, lib: "FontAwesome" | "Entypo") => {
    const Icon = lib === "FontAwesome" ? FontAwesome : Entypo;

    const IconComponent = ({ color, size }: { color: string; size: number }) => (
      <Icon name={name as any} size={size} color={color} />
    );

    IconComponent.displayName = `${lib}Icon(${name})`;

    return IconComponent;
  };

  const headerRight = () => (
    <View style={{ flexDirection: "row", gap: 16, marginRight: 16 }}>
      <TouchableOpacity>
        <Entypo name="magnifying-glass" size={24} color={colors.search} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="bell" size={24} color={colors.icon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTitleStyle: { fontFamily: "Poppins-Bold", color: colors.text },
        tabBarStyle: { backgroundColor: colors.background, borderColor: "transparent" },
        tabBarLabelStyle: { fontSize: 8, fontFamily: "Poppins-Medium" },
        tabBarActiveTintColor: colors.active,
        tabBarInactiveTintColor: colors.inactive,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Hina",
          tabBarIcon: tabIcon("home", "FontAwesome"),
          headerRight,
        }}
      />
      <Tabs.Screen
        name="club"
        options={{
          title: "Vie du club",
          tabBarIcon: tabIcon("users", "FontAwesome"),
        }}
      />
      <Tabs.Screen
        name="student"
        options={{
          title: "Vie Étudiante",
          tabBarIcon: tabIcon("calendar", "FontAwesome"),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: tabIcon("message", "Entypo"),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: tabIcon("user", "FontAwesome"),
        }}
      />
    </Tabs>
  );
}
