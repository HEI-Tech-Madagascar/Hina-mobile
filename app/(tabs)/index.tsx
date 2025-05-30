import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import { ANNOUNCEMENTS } from "@/constants";
import { Image } from "expo-image";

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const [announcements] = useState(ANNOUNCEMENTS);
  const colorScheme = useColorScheme();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#15202B" : "#F5F8FA" },
      ]}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={[
            styles.searchBar,
            { backgroundColor: colorScheme === "dark" ? "#253341" : "#E1E8ED" },
          ]}
        >
          <FontAwesome6
            name="magnifying-glass"
            size={18}
            color={colorScheme === "dark" ? "#8899A6" : "#657786"}
          />
          <Text
            style={[styles.searchText, { color: colorScheme === "dark" ? "#8899A6" : "#657786" }]}
          >
            Rechercher...
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notificationButton}>
          <FontAwesome name="bell" size={24} color="#007FFF" />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.content}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <View style={styles.announcementsSection}>
          <Text
            style={[styles.sectionTitle, { color: colorScheme === "dark" ? "#FFFFFF" : "#14171A" }]}
          >
            Annonces importantes
          </Text>
          {announcements
            .filter((a) => a.important)
            .map((announcement) => (
              <TouchableOpacity
                key={announcement.id}
                style={[
                  styles.announcementCard,
                  {
                    backgroundColor: colorScheme === "dark" ? "#192734" : "#FFFFFF",
                  },
                ]}
              >
                {announcement.image && (
                  <Image source={{ uri: announcement.image }} style={styles.announcementImage} />
                )}
                <View style={styles.announcementContent}>
                  <View style={styles.importantBadge}>
                    <Text style={styles.importantText}>Important</Text>
                  </View>
                  <Text
                    style={[
                      styles.announcementTitle,
                      { color: colorScheme === "dark" ? "#FFFFFF" : "#14171A" },
                    ]}
                  >
                    {announcement.title}
                  </Text>
                  <Text
                    style={[
                      styles.announcementText,
                      { color: colorScheme === "dark" ? "#8899A6" : "#657786" },
                    ]}
                    numberOfLines={2}
                  >
                    {announcement.content}
                  </Text>
                  <View style={styles.announcementMeta}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                      <FontAwesome
                        name="clock-o"
                        size={14}
                        color={colorScheme === "dark" ? "#8899A6" : "#657786"}
                      />
                      <Text
                        style={[
                          styles.announcementDate,
                          {
                            color: colorScheme === "dark" ? "#8899A6" : "#657786",
                          },
                        ]}
                      >
                        {formatDate(announcement.date)}
                      </Text>
                    </View>
                    <Text
                      style={[
                        styles.announcementAuthor,
                        {
                          color: colorScheme === "dark" ? "#8899A6" : "#657786",
                        },
                      ]}
                    >
                      {announcement.author}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </View>
        <View style={styles.announcementsSection}>
          <Text
            style={[styles.sectionTitle, { color: colorScheme === "dark" ? "#FFFFFF" : "#14171A" }]}
          >
            Autres annonces
          </Text>

          {announcements
            .filter((a) => !a.important)
            .map((announcement) => (
              <TouchableOpacity
                key={announcement.id}
                style={[
                  styles.announcementCard,
                  {
                    backgroundColor: colorScheme === "dark" ? "#192734" : "#FFFFFF",
                  },
                ]}
              >
                {announcement.image && (
                  <Image source={{ uri: announcement.image }} style={styles.announcementImage} />
                )}
                <View style={styles.announcementContent}>
                  <Text
                    style={[
                      styles.announcementTitle,
                      { color: colorScheme === "dark" ? "#FFFFFF" : "#14171A" },
                    ]}
                  >
                    {announcement.title}
                  </Text>
                  <Text
                    style={[
                      styles.announcementText,
                      { color: colorScheme === "dark" ? "#8899A6" : "#657786" },
                    ]}
                    numberOfLines={2}
                  >
                    {announcement.content}
                  </Text>
                  <View style={styles.announcementMeta}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                      <FontAwesome
                        name="clock-o"
                        size={14}
                        color={colorScheme === "dark" ? "#8899A6" : "#657786"}
                      />
                      <Text
                        style={[
                          styles.announcementDate,
                          {
                            color: colorScheme === "dark" ? "#8899A6" : "#657786",
                          },
                        ]}
                      >
                        {formatDate(announcement.date)}
                      </Text>
                    </View>
                    <Text
                      style={[
                        styles.announcementAuthor,
                        {
                          color: colorScheme === "dark" ? "#8899A6" : "#657786",
                        },
                      ]}
                    >
                      {announcement.author}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  searchText: {
    marginLeft: 8,
    fontSize: 14,
  },
  notificationButton: {
    marginLeft: 12,
    padding: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  welcomeCard: {
    marginVertical: 16,
    paddingVertical: 12,
  },
  announcementsSection: {
    marginVertical: 16,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    marginBottom: 12,
  },
  announcementCard: {
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  announcementImage: {
    width: "100%",
    height: 160,
  },
  announcementContent: {
    padding: 16,
  },
  importantBadge: {
    backgroundColor: "#FF3B30",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  importantText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  announcementTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    marginBottom: 8,
  },
  announcementText: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: "Poppins-Regular",
    marginBottom: 8,
  },
  announcementMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  announcementDate: {
    fontSize: 12,
  },
  announcementAuthor: {
    fontSize: 12,
    fontWeight: "500",
  },
});
