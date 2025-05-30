import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import { Announcement, ANNOUNCEMENTS } from "@/constants";
import { Image } from "expo-image";
import { useThemeStyles } from "@/hooks";

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const [announcements] = useState<Announcement[] | null>(ANNOUNCEMENTS);
  const { colors, typography } = useThemeStyles();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
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

  const renderAnnouncementCard = (announcement: Announcement, important = false) => (
    <TouchableOpacity
      key={announcement.id}
      style={[styles.announcementCard, { backgroundColor: colors.card }]}
    >
      {announcement.image && (
        <Image source={{ uri: announcement.image }} style={styles.announcementImage} />
      )}
      <View style={styles.announcementContent}>
        {important && (
          <View style={[styles.importantBadge, { backgroundColor: colors.important }]}>
            <Text style={typography.badge as TextStyle}>Important</Text>
          </View>
        )}
        <Text style={[typography.title, { color: colors.text }]}>{announcement.title}</Text>
        <Text
          numberOfLines={2}
          style={[typography.text, { color: colors.subtext, marginBottom: 8 }]}
        >
          {announcement.content}
        </Text>
        <View style={styles.announcementMeta}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <FontAwesome name="clock-o" size={14} color={colors.subtext} />
            <Text style={[styles.announcementDate, { color: colors.subtext }]}>
              {formatDate(announcement.date)}
            </Text>
          </View>
          <Text style={[typography.author as TextStyle, { color: colors.subtext }]}>
            {announcement.author}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity style={[styles.searchBar, { backgroundColor: colors.searchBar }]}>
          <FontAwesome6 name="magnifying-glass" size={18} color={colors.subtext} />
          <Text style={[styles.searchText, { color: colors.subtext }]}>Rechercher...</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notificationButton}>
          <FontAwesome name="bell" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <View style={styles.announcementsSection}>
          <Text style={[typography.title, { color: colors.text, marginBottom: 12 }]}>
            Annonces importantes
          </Text>
          {announcements?.filter((a) => a.important).map((a) => renderAnnouncementCard(a, true))}
        </View>

        <View style={styles.announcementsSection}>
          <Text style={[typography.title, { color: colors.text, marginBottom: 12 }]}>
            Autres annonces
          </Text>
          {announcements?.filter((a) => !a.important).map((a) => renderAnnouncementCard(a))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
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
  announcementsSection: {
    marginVertical: 16,
    paddingVertical: 12,
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
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: "flex-start",
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
});
