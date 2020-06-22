import React from "react";
import { StyleSheet } from "react-native";
import { Card, Icon, TopNavigationAction } from "@ui-kitten/components";
import { Auth } from "aws-amplify";

import Navigation from "../components/Navigation";
import AuthForm from "../components/AuthForm";
import useAuthInfo from "../hooks/useAuthInfo";
import { screens } from "../constants";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export default SignUpScreen = ({ navigation }) => {
  const authInfo = useAuthInfo();

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  const signUp = async (email, password) => {
    const result = await Auth.signUp(email, password);
    authInfo.setUser({ email: result.user.getUsername() });
    navigation.navigate(screens.CONFIRM_USER);
  };

  return (
    <Navigation title="Sign Up" accessoryLeft={BackAction}>
      <Card disabled style={styles.container}>
        <AuthForm submitText="Sign Up" onSubmit={signUp} />
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
