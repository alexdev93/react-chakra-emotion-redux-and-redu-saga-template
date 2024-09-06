import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      100: "#E5F2FF",
      500: "#3A8DFF",
      900: "#0A2463",
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold", // Applies globally to all buttons
        borderRadius: "full", // Makes all buttons fully rounded
      },
      sizes: {
        lg: {
          fontSize: "18px",
          px: "32px",
          py: "16px",
        },
      },
      variants: {
        solid: {
          bg: "purple.500", // Changes the default solid button background
          color: "white",
          _hover: {
            bg: "purple.700", // Custom hover style
          },
        },
      },
    },
  },
});

export default theme;
