import React from "react";
import { Button, Box, Image, Link } from "@chakra-ui/react";
// https://www.paypal.com/donate/?hosted_button_id=R346FRGC92SVN
const PayPalButton = () => (
  <Box display="flex" alignItems="center" gap={2}>
    <Image
      src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
      alt="PayPal logo"
      ml={2}
      h={{ base: "35px", md: "40px" }}
    />
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="your-button-id" />
      <Button
        type="submit"
        bg="#FFC43A"
        color="black"
        fontSize={{ base: "14px", md: "16px" }}
        _hover={{ bg: "#ffbc21" }}
      >
        <Link
          href="https://www.paypal.com/donate/?hosted_button_id=R346FRGC92SVN"
          display="flex"
          alignItems="center"
          h="inherit"
          w="inherit"
          _hover={{ textDecor: "none" }}
          target={"_blank"}
          px={4}
        >
          Donate
        </Link>
      </Button>
    </form>
  </Box>
);

export default PayPalButton;
