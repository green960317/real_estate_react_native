import React from "react";
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function NavBarSearch({ type }) {
  const navigation = useNavigation();

  return (
    <VStack w="100%" minWidth={"100%"} alignSelf="center">
      <Input
        onFocus={async () => {
          type === "agents"
            ? navigation.navigate("Agent Search")
            : navigation.navigate("Property Search");
        }}
        mr={0}
        alignSelf="center"
        placeholder={type === "agents" ? "Search agents" : "Search properties"}
        width="100%"
        borderRadius="4"
        py="3"
        px="1"
        fontSize="14"
        InputLeftElement={
          <Icon
            m="2"
            ml="3"
            size="6"
            color="gray.400"
            as={<MaterialIcons name="search" />}
          />
        }
        InputRightElement={
          <Icon
            m="2"
            mr="6"
            size="6"
            color="gray.400"
            as={<Ionicons name="filter" />}
          />
        }
      />
    </VStack>
  );
}
