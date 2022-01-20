import React from "react";
import { TextStyle } from "react-native";
import { TextProps } from "react-native";
import { Text } from "react-native";

interface TypographyProps {
  fontSize?: number;
  color?: string;
  isBold?: boolean;
  text: string;
  textAlign?: TextStyle["textAlign"];
}
function Typography({
  fontSize = 16,
  color = "black",
  isBold,
  text,
  textAlign = "left",
}: TypographyProps) {
  const textStyle: TextProps["style"] = {
    fontSize: fontSize,
    color: color,
    fontWeight: isBold ? "bold" : "normal",
    textAlign: textAlign,
    includeFontPadding: false,
  };
  return <Text style={textStyle}>{text}</Text>;
}

export default React.memo(Typography);
