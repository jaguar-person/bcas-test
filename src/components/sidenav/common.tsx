import { Children } from "react";
import Link from "next/link";
import { Flex, Group, Image, Text, Title, Transition } from "@mantine/core";

const Data = {
  links: [
    {
      name: "Home",
      link: "/app",
      icon: "/icons/1.svg",
    },
    {
      name: "Markets",
      link: "/",
      icon: "/icons/2.svg",
    },
    {
      name: "Watchlist",
      link: "/",
      icon: "/icons/3.svg",
    },
    {
      name: "Profile",
      link: "/",
      icon: "/icons/4.svg",
    },
    {
      name: "Wallet",
      link: "/",
      icon: "/icons/5.svg",
    },
  ],
};

interface SideNavType {
  opened: boolean;
}

export default function SideNav({ opened }: SideNavType) {
  return (
    <Transition mounted={opened} transition="scale-x" duration={0}>
      {() => (
        <Group
          px="md"
          bg="#121417"
          w={"250px"}
          display={"flex"}
          justify={"space-between"}
          style={{
            borderRight: "1px solid #293038",
            flexWrap: "nowrap",
            height: "calc(100vh - 60px)",
            flexDirection: "column",
            zIndex: 10,
          }}
          pos={"fixed"}
          bottom={"0"}
          p={"md"}
        >
          <Flex w={"100%"} direction={"column"} gap={"5"}>
            <Text size="12px" c={"#9EABB8"}>
              Your Balance
            </Text>
            <Title order={2} c={"#fff"} mb={"10"}>
              $500
            </Title>
            {Children.toArray(
              Data.links.map((link) => (
                <>
                  <Link
                    href={link.link}
                    style={{
                      color: "white",
                      backgroundColor: "transparent",
                      borderRadius: "6px",
                      padding: "5px 10px",
                      textDecoration: "none",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <Image w={"13"} h={"13"} src={link.icon} />
                    {link.name}
                  </Link>
                </>
              ))
            )}
          </Flex>
          <Flex w={"100%"} direction={"column"} gap={"5"}>
            <Link
              href={"/"}
              style={{
                color: "white",
                backgroundColor: "#942323",
                borderRadius: "6px",
                padding: "5px 10px",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Logout
            </Link>
          </Flex>
        </Group>
      )}
    </Transition>
  );
}
