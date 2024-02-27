import Link from "next/link";
import { Flex, Title, Image, Text } from "@mantine/core";
import { BlogType } from "@/types";

interface BlogDataType {
  data: BlogType;
}

export default function Blog({ data }: BlogDataType) {
  return (
    <Flex
      justify={"space-between"}
      direction={"column"}
      align={"center"}
      py={"sm"}
      w={"100%"}
      gap={10}
    >
      <Flex gap={5} justify={"space-between"} w="100%">
        <Flex direction={"column"} gap={5} w={"100%"}>
          <Title order={5} lh={1.2} c={"#fff"} w={"80%"}>
            {data.heading}
          </Title>
          <Text size="14px" c={"#9EABB8"} w={"70%"}>
            {data.description}
          </Text>
        </Flex>
        <Image src={data.image} mah={"auto"} maw={"114px"} />
      </Flex>
      <Link
        href={data.link}
        style={{
          color: "#fff",
          backgroundColor: "#293038",
          borderRadius: "6px",
          padding: "5px 10px",
          width: "100%",
          textDecoration: "none",
          textAlign: "center",
        }}
      >
        {data.cta}
      </Link>
    </Flex>
  );
}
