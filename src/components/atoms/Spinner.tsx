import React from "react";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";

export const Spinner: React.FC<ActivityIndicatorProps> = (props) => {
  const spinnerColor = "#0000FF";
  return (
    <ActivityIndicator
      {...props}
      color={spinnerColor}
      testID={"loading-spinner"}
    />
  );
};
