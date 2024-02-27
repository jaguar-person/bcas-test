import { Flex, Title, Stack } from "@mantine/core";
import { Children } from "react";
import { FavouritesData } from "@/faker/data";
import Asset from "@/components/shared/asset";

export default function Favourites() {
  return (
    <Stack px={"md"} gap={4}>
      <Title order={5} c={"#fff"}>
        Your Favourites
      </Title>
      <Flex
        mah={"350px"}
        mih={"300px"}
        style={{ overflowY: "scroll" }}
        direction={"column"}
      >
        {Children.toArray(
          FavouritesData.map((data, i) => <Asset data={data} key={i} />)
        )}
      </Flex>
    </Stack>
  );
}
