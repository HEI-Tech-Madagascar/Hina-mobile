import { Tabs } from "expo-router";

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
        }}
      />
      <Tabs.Screen
        name="club"
        options={{
          title: "Vie du Club",
        }}
      />
      <Tabs.Screen
        name="student"
        options={{
          title: "Vie Étudiante",
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
        }}
      />
    </Tabs>
  );
}
