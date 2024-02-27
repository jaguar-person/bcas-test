import { Autocomplete } from "@mantine/core";

export default function SearchBox() {
  return (
    <Autocomplete
      data={["React", "Angular", "Vue"]}
      leftSectionPointerEvents="none"
      placeholder="Search for an asset"
      classNames={{
        root: "custom-autocomplete",
        wrapper: "custom-wrapper",
        input: "custom-input",
        dropdown: "custom-dropdown",
        options: "custom-options",
        option: "custom-option",
      }}
    />
  );
}
