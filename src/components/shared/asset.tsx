import Link from "next/link";
import { Flex, Image, Text } from "@mantine/core";
import { AssetType } from "@/types";

interface AssetDataType {
  data: AssetType;
}

export default function Asset({ data }: AssetDataType) {
  return (
    <Link style={{ textDecoration: "none" }} href={"/token?id=" + data.id}>
      <Flex justify={"space-between"} align={"center"} p={"sm"} w={"100%"}>
        <Flex gap={10}>
          <Image src={data.image} w={20} h={"100%"} />
          <Flex direction={"column"} gap={2}>
            <Text size="16px" c={"#fff"}>
              {data.token}
            </Text>
            <Text size="14px" c={"#9EABB8"}>
              {data.value}
            </Text>
            <Text size="14px" c={"#9EABB8"}>
              {data.name}
            </Text>
          </Flex>
        </Flex>
        <Flex
          direction={"column"}
          h={"100%"}
          justify={"flex-start"}
          align={"flex-start"}
        >
          <Text size="16px" c={"#fff"}>
            {data.pnl}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}
