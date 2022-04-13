/** @jsx jsx */
import { Box, Flex, jsx } from "theme-ui"

const Footer = () => {
  return (
    <Box as="footer" variant="layout.footer">
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        Copyright &copy; {new Date().getFullYear()} Derya Kurt. All rights reserved.
      </Flex>
    </Box>
  )
}

export default Footer
