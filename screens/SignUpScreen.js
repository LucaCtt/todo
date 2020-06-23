import React from "react";
import { StyleSheet } from "react-native";
import { Card, Icon, TopNavigationAction } from "@ui-kitten/components";
import { observer } from "mobx-react-lite";

import Navigation from "../components/Navigation";
import AuthForm from "../components/AuthForm";
import useAuth from "../hooks/useAuth";
import { screens } from "../constants";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export default SignUpScreen = observer(({ navigation }) => {
  const auth = useAuth();

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  const signUp = async (email, password) => {
    const result = await auth.signUp(email, password);
    navigation.navigate(screens.CONFIRM_USER, { email });
  };

  return (
    <Navigation title="Sign Up" accessoryLeft={BackAction}>
      <Card disabled style={styles.container}>
        <AuthForm submitText="Sign Up" onSubmit={signUp} />
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
