import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, Dimensions, } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

const products = [
  {
    id: "1",
    name: "Caffe Mocha",
    price: "$4.53",
    description: "Deep Foam",
    image: require("../../assets/images/moca.png"),
  },
  {
    id: "2",
    name: "Flat White",
    price: "$3.53",
    description: "Espresso",
    image: require("../../assets/images/moca.png"),
  },
  {
    id: "3",
    name: "White Coffee",
    price: "$3.53",
    description: "Espresso",
    image: require("../../assets/images/moca.png"),
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      {/* BG HITAM */}
      <View style={styles.topBackground} />

      <ScrollView style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.locationText}>Location</Text>
            <Text style={styles.location}>
              Bilzen, Tanjungbalai{" "}
              <FontAwesome name="chevron-down" size={14} color="white" />
            </Text>
          </View>
        </View>

        {/* PENCARIAN/FILTER */}
        <View style={styles.searchFilterContainer}>
          {/* Search Input */}
          <View style={styles.searchContainer}>
            <FontAwesome
              name="search"
              size={18}
              color="#9CA3AF"
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search coffee"
              placeholderTextColor="#9CA3AF"
              style={styles.searchInput}
            />
          </View>

          {/* Filter */}
          <TouchableOpacity style={styles.filterButton}>
            <FontAwesome name="sliders" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* PROMO */}
        <View style={styles.promoContainer}>
          <Image
            source={require("../../assets/images/banner.png")}
            style={styles.promoImage}
          />
          <View style={styles.promoBadge}>
            <Text style={styles.promoBadgeText}>Promo</Text>
          </View>
          <View style={styles.promoTextContainer}>
            <Text style={styles.promoText}>Buy one get{"\n"}one FREE</Text>
          </View>
        </View>

        {/* KATEGORI */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categories}
        >
          <TouchableOpacity
            style={[styles.categoryButton, styles.activeCategory]}
          >
            <Text style={styles.categoryTextActive}>All Coffee</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Macchiato</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Latte</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Americano</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* PRODUK */}
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={styles.coffeeList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => router.push(`../menuorder/[id].tsx ${item.id}`)}
              style={styles.coffeeItem}
            >
              <Image source={item.image} style={styles.coffeeImage} />
              <Text style={styles.coffeeTitle}>{item.name}</Text>
              <Text style={styles.coffeeSubtitle}>{item.description}</Text>
              <View style={styles.coffeeFooter}>
                <Text style={styles.coffeePrice}>{item.price}</Text>
                <TouchableOpacity style={styles.addButton}>
                  <FontAwesome name="plus" size={16} color="white" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  topBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.36,
    backgroundColor: "#121212",
    zIndex: 0,
  },
  container: {
    flex: 1,
    zIndex: 1,
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: "transparent",
  },
  locationText: {
    color: "#9CA3AF",
    fontSize: 12,
  },
  location: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  searchFilterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333333",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flex: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: "white",
    fontSize: 16,
  },
  filterButton: {
    backgroundColor: "#F97316",
    width: 50,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  promoContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    position: "relative",
  },
  promoImage: {
    width: "100%",
    height: 150,
    borderRadius: 16,
  },
  promoBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#EF4444",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  promoBadgeText: {
    color: "white",
    fontSize: 12,
  },
  promoTextContainer: {
    position: "absolute",
    bottom: 16,
    left: 16,
  },
  promoText: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 28,
  },
  categories: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: "#E5E7EB",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  activeCategory: {
    backgroundColor: "#F97316",
  },
  categoryText: {
    color: "#374151",
  },
  categoryTextActive: {
    color: "white",
  },
  coffeeList: {
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  coffeeItem: {
    backgroundColor: "white",
    width: "48%",
    marginBottom: 16,
    borderRadius: 16,
    padding: 12,
  },
  coffeeImage: {
    width: "100%",
    height: 150,
    borderRadius: 16,
  },
  coffeeTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 8,
  },
  coffeeSubtitle: {
    color: "#6B7280",
    fontSize: 14,
  },
  coffeeFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  coffeePrice: {
    fontSize: 16,
    fontWeight: "700",
  },
  addButton: {
    backgroundColor: "#F97316",
    padding: 8,
    borderRadius: 12,
  },
});