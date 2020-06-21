import React, { useState, memo } from "react";
import { Text } from "@ui-kitten/components";

import FormInput from "./FormInput";
import FormButton from "./FormButton";
import LoadingIndicator from "./LoadingIndicator";

const ConfirmUserForm = ({ onResend, onSubmit }) => {
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
      <Text category="s1" onPress={onResend}>
        Resend code
      </Text>
    </>
  );
};

export default memo(ConfirmUserForm);
