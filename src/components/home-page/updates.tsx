import { Flex, Title, Stack } from "@mantine/core";
import { Children } from "react";
import { UpdatesData } from "@/faker/data";
import Blog from "@/components/shared/blog";

export default function Updates() {
  return (
    <Stack px={"md"} gap={5}>
      <Title order={4} c={"#fff"}>
        Latest Updates
      </Title>
      <Flex style={{ overflowY: "scroll" }} direction={"column"} p={0}>
        {Children.toArray(
          UpdatesData.map((data, i) => <Blog data={data} key={i} />)
        )}
      </Flex>
    </Stack>
  );
}
