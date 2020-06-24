import React from "react";
import { StyleSheet } from "react-native";
import { Card, Icon, TopNavigationAction, Text } from "@ui-kitten/components";
import { observer } from "mobx-react-lite";

import Navigation from "../components/Navigation";
import SubmitButton from "../components/SubmitButton";
import useAuth from "../hooks/useAuth";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const UserInfoScreen = ({ navigation }) => {
  const auth = useAuth();

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <Navigation title="User Info" accessoryLeft={BackAction}>
      <Card disabled style={styles.container}>
        <Text>Email: {auth.user.email}</Text>
        <Text>User Verified: {auth.user.confirmed ? "Yes" : "No"}</Text>
        <SubmitButton onSubmit={() => auth.signOut()}>
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
});

export default observer(UserInfoScreen);
