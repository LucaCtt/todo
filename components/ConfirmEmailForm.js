import React, { useState } from "react";
import { View } from "react-native";
import { Text, Spinner } from "@ui-kitten/components";

import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { Auth } from "aws-amplify";

const LoadingIndicator = (props) => (
  <View {...props}>
    <Spinner />
  </View>
);

export default ConfirmEmailForm = ({ email, onSuccess }) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const verify = async () => {
    try {
      setLoading(true);
      await Auth.confirmSignUp(email, code);
      setLoading(false);
      onSuccess();
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <FormInput
        autoFocus
        keyboardType="numeric"
        placeholder="Verification code"
        value={code}
        onChangeText={(c) => setCode(c)}
      />
      <FormButton
        disabled={code == "" || loading}
        onPress={verify}
        accessoryLeft={loading ? LoadingIndicator : null}
      >
        <Text>Confirm</Text>
      </FormButton>
      {error !== "" && <Text status="danger">{error}</Text>}
    </>
  );
};
