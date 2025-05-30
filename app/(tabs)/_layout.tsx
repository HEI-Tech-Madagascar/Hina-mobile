import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Poppins-Medium",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          tabBarIcon: ({ color, size }) => <FontAwesome name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="club"
        options={{
          title: "Vie du Club",
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
