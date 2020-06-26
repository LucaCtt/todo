import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import {
  Card,
  Icon,
  TopNavigationAction,
  List,
  ListItem,
  Text,
  Divider,
} from "@ui-kitten/components";
import { observer } from "mobx-react-lite";

import Navigation from "../components/Navigation";
import SubmitButton from "../components/SubmitButton";
import useAuth from "../hooks/useAuth";
import { screens } from "../constants";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const UserInfoScreen = ({ navigation }) => {
  const auth = useAuth();

  const entries = [
    { key: "Email", value: auth.user.email },
    { key: "User Verified", value: auth.user.confirmed ? "Yes" : "No" },
  ];

  const InfoItem = ({ item }) => (
    <ListItem
      title={item.key}
      accessoryRight={() => <Text>{item.value}</Text>}
    />
  );

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <Navigation title="User Info" accessoryLeft={BackAction}>
      <Card disabled style={styles.container}>
        <List
          data={entries}
          renderItem={InfoItem}
          ItemSeparatorComponent={Divider}
          style={styles.itemsList}
        />
        <SubmitButton
          status="warning"
          onPress={() => {
            auth.signOut();
            navigation.navigate(screens.SIGN_IN);
          }}
        >
          <Text>Sign Out</Text>
        </SubmitButton>
      </Card>
    </Navigation>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 14,
    flex: 1,
    padding: 10,
  },
  itemsList: {
    marginBottom: 10,
  },
});

export default observer(UserInfoScreen);
