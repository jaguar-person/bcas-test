import { useRouter } from "next/router";
import { Stack } from "@mantine/core";
import { CommonLayout } from "@/components/layout/common";
import Analytics from "@/components/token/analytics";
import Details from "@/components/token/text";

export default function App() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <CommonLayout>
      <Stack p="sm" gap={20}>
        <Analytics TokenId={id} />
        <Details TokenId={id} />
      </Stack>
    </CommonLayout>
  );
}
