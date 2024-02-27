import { Flex, Title, Text, Stack } from "@mantine/core";
import { AreaChart } from "@mantine/charts";
import { TokensData, tokensChart } from "@/faker/data";

interface AnalyticsProps {
  TokenId: any;
}

export default function Analytics(props: AnalyticsProps) {
  const dataWithIdOne = TokensData.find((token) => token.id == props.TokenId);
  const dataForChart = tokensChart[props.TokenId as keyof typeof tokensChart];

  return (
    <Stack px={"md"} gap={5}>
      <Flex direction={"column"} gap={10}>
        <Text size="12px" c={"#9EABB8"}>
          {dataWithIdOne?.name}
        </Text>
        <Title order={2} c={"#fff"}>
          {dataWithIdOne?.value}
        </Title>
        <Flex>
          <Text size="12px" c={"#9EABB8"}>
            Last 30 Days
          </Text>
          <Text size="12px" c={"#0AD95C"}>
            {dataWithIdOne?.pnl}
          </Text>
        </Flex>
      </Flex>
      <AreaChart
        withTooltip={false}
        dotProps={{ r: 3 }}
        h={200}
        data={dataForChart}
        dataKey="time"
        series={[{ name: "value", color: "teal.6" }]}
        curveType="natural"
        tickLine="none"
        gridAxis="none"
        withYAxis={false}
      />
    </Stack>
  );
}
