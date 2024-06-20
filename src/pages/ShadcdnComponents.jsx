import { Box, Heading, List, ListItem, Container } from "@chakra-ui/react";

const components = [
  "Accordion",
  "Alert",
  "Avatar",
  "Badge",
  "Breadcrumb",
  "Button",
  "Card",
  "Checkbox",
  "CircularProgress",
  "CloseButton",
  "Code",
  "Collapse",
  "Drawer",
  "Editable",
  "FormControl",
  "Grid",
  "Heading",
  "Icon",
  "Image",
  "Input",
  "Kbd",
  "Link",
  "List",
  "Menu",
  "Modal",
  "NumberInput",
  "Popover",
  "Progress",
  "Radio",
  "Select",
  "Skeleton",
  "Slider",
  "Spinner",
  "Stat",
  "Switch",
  "Table",
  "Tabs",
  "Tag",
  "Textarea",
  "Tooltip",
  "UseDisclosure",
];

const ShadcdnComponents = () => {
  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" mb={4}>
        Shadcdn Components
      </Heading>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <List spacing={3}>
          {components.map((component, index) => (
            <ListItem key={index}>{component}</ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default ShadcdnComponents;