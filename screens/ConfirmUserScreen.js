import React from "react";
import { StyleSheet } from "react-native";
import { Card, Icon, TopNavigationAction } from "@ui-kitten/components";
import { Auth } from "aws-amplify";

import Navigation from "../components/Navigation";
import ConfirmUserForm from "../components/ConfirmUserForm";
import useAuthInfo from "../hooks/useAuthInfo";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export default ConfirmUserScreen = ({ navigation }) => {
  const authInfo = useAuthInfo();

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  const verifyUser = async (code) => {
    await Auth.confirmSignUp(authInfo.user.email, code);
    if (authInfo.isLoggedIn) {
      navigation.navigate("Home");
    } else {
      navigation.navigate("SignIn");
    }
  };

  return (
    <Navigation title="Confirm User" accessoryLeft={BackAction}>
      <Card disabled style={styles.container}>
        <ConfirmUserForm
          email={email}
          onResend={() => Auth.resendSignUp(email)}
          onSubmit={verifyUser}
        />
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
