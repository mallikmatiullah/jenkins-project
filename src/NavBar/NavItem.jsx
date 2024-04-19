import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

function NavItem({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        justify="center"
        px={{ base: 2, md: 10 }}
        py={{ base: 2, md: 2 }}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color={isActive ? "white" : "#CFB05C"}
        bg={isActive ? "#CFB05C" : "transparent"}
        _hover={{ bg: "#CFB05C", color: "white" }}
      >
        {children}
      </Flex>
    </Link>
  );
}

export default NavItem;
