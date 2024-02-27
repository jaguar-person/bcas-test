import { Children } from "react";
import { Flex, Title, Text, Stack, Image } from "@mantine/core";
import { TokensData, Blogs } from "@/faker/data";
import Blog from "@/components/shared/blog";

interface AnalyticsProps {
  TokenId: any;
}

export default function Details(props: AnalyticsProps) {
  const dataWithIdOne = TokensData.find((token) => token.id == props.TokenId);
  const dataForBlogs = Blogs.filter((blogs) => blogs.id == props.TokenId);

  return (
    <Stack px={"md"} gap={5}>
      <Flex direction={"column"} gap={10}>
        <Title order={4} c={"#fff"}>
          {dataWithIdOne?.h1}
        </Title>
        <Text size="12px" c={"#9EABB8"}>
          {dataWithIdOne?.t1}
        </Text>
        <Title order={4} c={"#fff"}>
          {dataWithIdOne?.h2}
        </Title>
        <Text size="12px" c={"#9EABB8"}>
          {dataWithIdOne?.t2}
        </Text>
        <Image src={"blogs/" + dataWithIdOne?.fimg} my={"10"} w={"100%"} />
        <Title order={4} c={"#fff"}>
          {dataWithIdOne?.h3}
        </Title>
        <Text size="12px" c={"#9EABB8"}>
          {dataWithIdOne?.t3}
        </Text>
      </Flex>
      <Flex style={{ overflowY: "scroll" }} direction={"column"} p={0}>
        {Children.toArray(
          dataForBlogs.map((data, i) => <Blog data={data} key={i} />)
        )}
      </Flex>
    </Stack>
  );
}
