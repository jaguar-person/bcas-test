import { Button, Flex, Group, Image, Title, Autocomplete } from "@mantine/core";
import { Dispatch, SetStateAction, useState } from "react";
import { TokensData } from "@/faker/data";

interface HeaderProps {
  setSideNavState: Dispatch<SetStateAction<boolean>>;
  SideNavState: boolean;
}

export default function CommonHeader(props: HeaderProps) {
  const [selectedTokenId, setSelectedTokenId] = useState<string | null>(null);

  const handleAutocompleteChange = (selectedOption: string) => {
    const selectedToken = TokensData.find(
      (token) => token.name === selectedOption
    );
    if (selectedToken) {
      setSelectedTokenId(selectedToken.id);
    }
  };

  if (selectedTokenId) {
    window.location.href = `/token?id=${selectedTokenId}`;
  }

  return (
    <Group
      h="100%"
      px="md"
      bg="#121417"
      w={"100%"}
      display={"flex"}
      justify={"space-between"}
      style={{
        borderBottom: "1px solid #293038",
        borderTop: "1px solid #293038",
        flexWrap: "nowrap",
      }}
      gap={1}
    >
      <Button
        onClick={() =>
          props.SideNavState
            ? props.setSideNavState(false)
            : props.setSideNavState(true)
        }
        bg={"transparent"}
        h={"100%"}
        p={10}
      >
        <Image w={"15"} h={"10"} src={"/menu.svg"} alt="menu" />
      </Button>
      <Title order={4} c={"white"} pr={25}>
        Crypto
      </Title>
      <Flex
        bg={"#1C2126"}
        w={"100%"}
        h={36}
        style={{ borderRadius: "12px", alignItems: "center" }}
        px={"8px"}
        gap={"5"}
      >
        <Image w={"24"} h={"24"} src={"/search.svg"} alt="menu" />
        <Autocomplete
          data={TokensData.map((token) => token.name)}
          leftSectionPointerEvents="none"
          placeholder="Search for an asset"
          onChange={handleAutocompleteChange}
          classNames={{
            root: "custom-autocomplete",
            wrapper: "custom-wrapper",
            input: "custom-input",
            dropdown: "custom-dropdown",
            options: "custom-options",
            option: "custom-option",
          }}
        />
      </Flex>
    </Group>
  );
}
