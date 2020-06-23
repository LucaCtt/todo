import React from "react";
import { StyleSheet } from "react-native";
import { Card, Icon, TopNavigationAction } from "@ui-kitten/components";
import { observer } from "mobx-react-lite";

import Navigation from "../components/Navigation";
import ConfirmUserForm from "../components/ConfirmUserForm";
import useAuth from "../hooks/useAuth";
import { screens } from "../constants";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export default ConfirmUserScreen = observer(({ route, navigation }) => {
  const auth = useAuth();
  const { email } = route.params;

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  const verifyUser = async (code) => {
    await auth.confirmSignUp(email, code);
    if (auth.isLoggedIn) {
      navigation.navigate(screens.HOME);
    } else {
      navigation.navigate(screens.SIGN_IN);
    }
  };

  return (
    <Navigation title="Verify User" accessoryLeft={BackAction}>
      <Card disabled style={styles.container}>
        <ConfirmUserForm
          email={email}
          onResend={() => auth.resendSignUp(email)}
          onSubmit={verifyUser}
        />
      </Card>
    </Navigation>
  );
});

const styles = StyleSheet.create({
  container: {
    margin: 14,
    flex: 1,
    padding: 10,
  },
});
