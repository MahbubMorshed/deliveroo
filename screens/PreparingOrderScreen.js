import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  });
  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/images/animated.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurent to accept your order
      </Animatable.Text>
      <Progress.Bar size={30} color="white" indeterminate={true} />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
