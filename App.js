import { useState } from "react";
import {
  Alert,
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InfoCard from "./src/components/InfoCard";

const DAFTAR_MAHASISWA = [
  {
    nama: "Angelino Vianney Wara Demon",
    Npm: "2532003",
    prodi: "Teknologi Informasi",
  },
  { nama: "Dzaky Alfarizy", Npm: "2532072", prodi: "Teknologi Informasi" },
  { nama: "M. Rafid", Npm: "252242", prodi: "Teknologi Informasi" },
  { nama: "M Yassin Ghany", Npm: "2532065", prodi: "Teknologi Informasi" },
  { nama: "Silvester Eren Boly", Npm: "2532047", prodi: "Teknologi Informasi" },
];

export default function App() {
  const [keyword, setKeyword] = useState("");

  const handlePressCard = (title, status) => {
    const statusLabel = status.toUpperCase();
    const message = `Informasi: ${title}\nStatus: ${statusLabel}`;

    if (Platform.OS === "web") {
      window.alert(`[Detail Info]\n${message}`);
    } else {
      Alert.alert("Detail Informasi", message, [{ text: "OK" }]);
    }
  };

  const filteredMahasiswa = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase()),
  );

  const renderMahasiswaItem = ({ item }) => (
    <View style={styles.studentCard}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.nama.charAt(0)}</Text>
      </View>
      <View style={styles.studentDetails}>
        <Text style={styles.studentNama}>{item.nama}</Text>
        <Text style={styles.studentProdi}>{item.prodi}</Text>
      </View>
      <View style={styles.NpmBadge}>
        <Text style={styles.NpmBadgeText}>Npm: {item.Npm}</Text>
      </View>
    </View>
  );

  const renderListHeader = () => (
    <View>
      <View style={styles.appHeader}>
        <Text style={styles.appHeaderTitle}>Praktikum Pemrograman Mobile</Text>
      </View>

      <View style={styles.section}>
        <InfoCard
          title="Tugas 01 - Pengenalan React Native & Core Components"
          status="selesai"
          onPress={() =>
            handlePressCard(
              "Tugas 01 - Pengenalan React Native & Core Components",
              "selesai",
            )
          }
        />

        <InfoCard
          title="Proyek Akhir - Sistem Direktori Mahasiswa Terpadu"
          status="proses"
          onPress={() =>
            handlePressCard(
              "Proyek Akhir - Sistem Direktori Mahasiswa Terpadu",
              "proses",
            )
          }
        />
      </View>

      <View style={styles.section}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari Nama Mahasiswa"
            placeholderTextColor="#94A3B8"
            value={keyword}
            onChangeText={setKeyword}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </View>
    </View>
  );

  const renderListEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Data tidak ditemukan</Text>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
        <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

        <FlatList
          data={filteredMahasiswa}
          keyExtractor={(item) => item.id}
          renderItem={renderMahasiswaItem}
          ListHeaderComponent={renderListHeader}
          ListEmptyComponent={renderListEmpty}
          contentContainerStyle={styles.listContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  appHeader: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    marginBottom: 16,
  },
  appHeaderTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0F172A",
    letterSpacing: -0.5,
  },
  appHeaderSubtitle: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 4,
    fontWeight: "500",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 2,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: "#64748B",
    marginBottom: 10,
  },
  searchContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    paddingHorizontal: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    height: 46,
    fontSize: 14,
    color: "#0F172A",
  },
  filterMetaRow: {
    marginTop: 8,
    marginBottom: 4,
  },
  filterMetaText: {
    fontSize: 12,
    color: "#64748B",
    fontStyle: "italic",
  },
  studentCard: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 12,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 2,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#EEF2FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#C7D2FE",
  },
  avatarText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000000",
  },
  studentDetails: {
    flex: 1,
  },
  studentNama: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1E293B",
  },
  studentProdi: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 2,
  },
  NpmBadge: {
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  NpmBadgeText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#475569",
  },
  emptyContainer: {
    padding: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderStyle: "dashed",
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#EF4444",
  },
  emptySubtext: {
    fontSize: 12,
    color: "#94A3B8",
    marginTop: 4,
    textAlign: "center",
  },
});
