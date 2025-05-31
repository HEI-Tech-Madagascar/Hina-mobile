import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useThemeStyles } from "@/hooks";
import { Image } from "expo-image";
import { ReactNode, useState } from "react";
import { POSTS } from "@/constants";
import Entypo from "@expo/vector-icons/Entypo";
import { AntDesign } from "@expo/vector-icons";

const PostAction = ({ icon, text }: { icon: ReactNode; text: string }) => (
  <TouchableOpacity style={styles.postAction}>
    {icon}
    <Text style={styles.postActionText}>{text}</Text>
  </TouchableOpacity>
);

const PostCard = ({ post, colors, typography }: any) => (
  <View style={[styles.postCard, { backgroundColor: colors.card }]}>
    <View style={styles.postHeader}>
      <View style={styles.postAuthor}>
        <Image source={{ uri: post.avatar }} style={styles.postAvatar} />
        <View>
          <Text style={[styles.postAuthorName, { color: colors.text }]}>{post.author}</Text>
          <Text style={[styles.postTimestamp, { color: colors.subtext }]}>{post.timestamp}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Entypo name="dots-three-horizontal" size={20} color={colors.subtext} />
      </TouchableOpacity>
    </View>

    <Text style={[styles.postContent, { color: colors.text }, typography.text]}>
      {post.content}
    </Text>

    {post.images?.length > 0 && (
      <Image source={{ uri: post.images[0] }} style={styles.postImage} contentFit="cover" />
    )}

    <View style={styles.postStats}>
      <Text style={[styles.postStat, { color: colors.subtext }]}>{post.likes} j&#39;aime</Text>
      <Text style={[styles.postStat, { color: colors.subtext }]}>{post.comments} commentaires</Text>
    </View>

    <View style={styles.postActions}>
      <PostAction icon={<AntDesign name="heart" size={18} color="#007FFF" />} text="J'aime" />
      <PostAction icon={<Entypo name="message" size={18} color="#007FFF" />} text="Commenter" />
      <PostAction icon={<Entypo name="paper-plane" size={18} color="#007FFF" />} text="Partager" />
    </View>
  </View>
);

export default function Club() {
  const [newPost] = useState("");
  const [posts] = useState(POSTS);
  const { colors, typography } = useThemeStyles();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.content}>
        <View style={[styles.createPostCard, { backgroundColor: colors.card }]}>
          <View style={styles.createPostHeader}>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
              style={styles.userAvatar}
            />
            <TextInput
              style={[styles.postInput, { color: colors.text }, typography.text]}
              placeholder="Quoi de neuf au club?"
              placeholderTextColor={colors.text}
              multiline
            />
          </View>
          <View style={styles.createPostActions}>
            <TouchableOpacity
              style={[styles.postButton, { opacity: newPost.trim() ? 1 : 0.5 }]}
              disabled={!newPost.trim()}
            >
              <Text style={[styles.postButtonText, typography.text]}>Publier</Text>
            </TouchableOpacity>
          </View>
        </View>

        {posts.map((post) => (
          <PostCard key={post.id} post={post} colors={colors} typography={typography} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
  createPostCard: { padding: 16, marginBottom: 8 },
  createPostHeader: { flexDirection: "row", alignItems: "flex-start" },
  userAvatar: { width: 40, height: 40, borderRadius: 20, marginRight: 12 },
  postInput: { flex: 1, minHeight: 40, maxHeight: 100, fontSize: 16 },
  createPostActions: { flexDirection: "row", justifyContent: "flex-end", marginTop: 12 },
  postButton: {
    backgroundColor: "#007FFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  postButtonText: { color: "white" },
  postCard: { marginBottom: 8, paddingTop: 12 },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  postAuthor: { flexDirection: "row", alignItems: "center" },
  postAvatar: { width: 40, height: 40, borderRadius: 20, marginRight: 12 },
  postAuthorName: { fontSize: 16 },
  postTimestamp: { fontSize: 12 },
  postContent: { paddingHorizontal: 16, marginBottom: 12, fontSize: 16, lineHeight: 22 },
  postImage: { width: "100%", height: 300, marginBottom: 12 },
  postStats: { flexDirection: "row", paddingHorizontal: 16, paddingBottom: 12 },
  postStat: { marginRight: 16, fontSize: 14 },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 0.5,
  },
  postAction: { flexDirection: "row", alignItems: "center" },
  postActionText: { marginLeft: 4, fontSize: 14, color: "#007FFF" },
});
