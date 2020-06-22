import React, { useState, memo } from "react";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";

import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";

/**
 * A form with an input for user confirmation through a code, and a submit button.
 *
 * @property {async () => void} onResend - The function to be run when the confirmation code must be resent.
 * @property {async () => void} onSubmit - The function to be run on submit. Must be async. Thrown errors
 *                                         will be shown in the form.
 */
const ConfirmUserForm = ({ onResend, onSubmit, ...props }) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const verify = async () => {
    setLoading(true);
    try {
      await onSubmit(code);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View {...props}>
      <FormInput
        autoFocus
        keyboardType="numeric"
        placeholder="Verification code"
        value={code}
        onChangeText={(c) => setCode(c)}
      />
      <SubmitButton
        disabled={code == "" || loading}
        onPress={verify}
        isLoading={loading}
      >
        <Text>Confirm</Text>
      </SubmitButton>
      {error !== "" && <Text status="danger">{error}</Text>}
      <Text category="s1" onPress={onResend}>
        Resend code
      </Text>
    </View>
  );
};

export default memo(ConfirmUserForm);
