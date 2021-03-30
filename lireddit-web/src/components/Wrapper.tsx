import { Box } from "@chakra-ui/react";
import * as React from "react";

interface WrapperProps  {
    variant?: 'small' | 'regular'
}

export const Wrapper = ({ children, variant='regular' }) => {
  return (
    <Box mt={8} w="100%" maxW={variant === 'regular' ? "800px" : "400px"} mx="auto">
      {children}
    </Box>
  );
};
