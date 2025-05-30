import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { useColorScheme } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: colorScheme === "dark" ? "#15202B" : "#FFFFFF",
        },
        headerTitleStyle: {
          fontFamily: "Poppins-Bold",
          color: colorScheme === "dark" ? "#FFFFFF" : "#14171A",
        },
        tabBarActiveTintColor: "#007FFF",
        tabBarInactiveTintColor: colorScheme === "dark" ? "#8899A6" : "#657786",
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "#15202B" : "#FFFFFF",
        },
        tabBarLabelStyle: {
          fontSize: 8,
          fontFamily: "Poppins-Medium",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Hina",
          tabBarIcon: ({ color, size }) => <FontAwesome name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="club"
        options={{
          title: "Vie du club",
          tabBarIcon: ({ color, size }) => <FontAwesome name="users" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="student"
        options={{
          title: "Vie Étudiante",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, size }) => <Entypo name="message" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color, size }) => <FontAwesome name="user" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
