import { useState } from "react";
import {
  type StyleProp,
  type MantineSpacing,
  type MantineSize,
  Container,
  AppShell,
  AppShellHeader,
  AppShellMain,
  Stack,
} from "@mantine/core";
import CommonHeader from "@/components/header";
import SideNav from "@/components/sidenav/common";

interface CommonLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  p?: StyleProp<MantineSpacing>;
  containerSize?: MantineSize;
}

export const CommonLayout = (props: CommonLayoutProps) => {
  const [sideNaveState, setSideNavState] = useState<boolean>(false);

  return (
    <Container
      size={props.containerSize ?? "xs"}
      p={props.p ?? 0}
      w={"100%"}
      maw={"500px"}
      pos={"relative"}
    >
      <AppShell header={{ height: 60 }} padding={0} bg={"#121417"}>
        <AppShellHeader
          withBorder={false}
          right={"auto"}
          left={"auto"}
          miw={"300px"}
          maw={"500px"}
          w={"100%"}
        >
          {props.header ?? (
            <CommonHeader
              setSideNavState={setSideNavState}
              SideNavState={sideNaveState}
            />
          )}
        </AppShellHeader>

        <SideNav opened={sideNaveState} />

        <AppShellMain opacity={sideNaveState ? 0.4 : 1}>
          <Stack
            style={
              sideNaveState
                ? { pointerEvents: "none" }
                : { pointerEvents: "auto" }
            }
          >
            {props.children}
          </Stack>
        </AppShellMain>
      </AppShell>
    </Container>
  );
};
