import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const InfoCard = ({ title, status, onPress }) => {
  const isSelesai = status?.toLowerCase() === "selesai";
  const isProses = status?.toLowerCase() === "proses";

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <View
          style={[
            styles.badge,
            isSelesai
              ? styles.badgeSelesai
              : isProses
                ? styles.badgeProses
                : styles.badgeDefault,
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              isSelesai
                ? styles.badgeTextSelesai
                : isProses
                  ? styles.badgeTextProses
                  : styles.badgeTextDefault,
            ]}
          >
            {status}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
    gap: 12,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
    lineHeight: 22,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: "flex-start",
  },
  badgeSelesai: {
    backgroundColor: "#ECFDF5",
    borderColor: "#A7F3D0",
  },
  badgeProses: {
    backgroundColor: "#FFF7ED",
    borderColor: "#FED7AA",
  },
  badgeDefault: {
    backgroundColor: "#F1F5F9",
    borderColor: "#CBD5E1",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  badgeTextSelesai: {
    color: "#15803D",
  },
  badgeTextProses: {
    color: "#ed0a0a",
  },
  badgeTextDefault: {
    color: "#475569",
  },
  button: {
    backgroundColor: "#558f9f",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
});

export default InfoCard;
