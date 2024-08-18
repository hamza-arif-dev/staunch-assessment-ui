import { defineStyle, defineStyleConfig, extendTheme } from "@chakra-ui/react";

const primary = defineStyle({
  background: "primary.400",
  border: "1 px solid",
  borderColor: " primary.400",
  color: "white",
  boxShadow: "0px 1px 2px 0px gray.350",

  _hover: {
    background: "primary.500",
  },
});

const secondary = defineStyle({
  background: "white.900",
  border: "1px solid",
  borderColor: "gray.250",
  boxShadow: "0px 1px 2px 0px gray.350",

  _hover: {
    background: "gray.250",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { primary, secondary },
});

export const theme = extendTheme({
  colors: {
    primary: {
      500: "#7346d5",
      400: "#815adc",
      300: "#8f6bde",
      200: "#9f80e2",
      100: "#ae94e7",
    },
    gray: {
      450: "#667085",
      350: "#101828",
      250: "#D0D5DD",
      150: "#F5F5F5",
    },
  },
  components: { Button: buttonTheme },
});
