import { useColorScheme } from "react-native";
import { commonColors, darkColors, lightColors, typography } from "@/theme";

export function useThemeStyles() {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";
  const colors = isDark ? darkColors : lightColors;

  return {
    isDark,
    colors: { ...colors, ...commonColors },
    typography,
  };
}
