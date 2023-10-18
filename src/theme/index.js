import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        heading: `Poppins`,
        body: `Poppins`,
      },
      styles: {
        global: {
          // styles for the `body`
          body: {
            bg: '#F3F3F7',
          },
        },
      },
})