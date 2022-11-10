import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurents] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured" && _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type[]->{
          name
        }
      },
    }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurents(data?.restaurants);
      });
  }, []);
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="rightcircleo" size={24} color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        className="pt-4"
      >
        {restaurants?.map((restaurent) => (
          <RestaurantCard
            key={restaurent._id}
            id={restaurent._id}
            imgUrl={restaurent.image}
            title={restaurent.name}
            rating={restaurent.rating}
            genre={restaurent.type?.name}
            address={restaurent.address}
            short_description={restaurent.short_description}
            dishes={restaurent.dishes}
            long={restaurent.long}
            lat={restaurent.lat}
          />
        ))}
        {/* RestaurentCards */}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
