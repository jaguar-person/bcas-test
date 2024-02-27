import { Stack } from "@mantine/core";
import Updates from "@/components/home-page/updates";
import Favourites from "@/components/home-page/favorites";
import { CommonLayout } from "@/components/layout/common";

export default function App() {
  return (
    <CommonLayout>
      <Stack p="sm" gap={20}>
        <Favourites />
        <Updates />
      </Stack>
    </CommonLayout>
  );
}
