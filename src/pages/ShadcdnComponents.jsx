import { Box, Heading, List, ListItem, Container, Code } from "@chakra-ui/react";
import { Accordion, Alert, Avatar, Badge, Breadcrumb, Button, Card, Checkbox, CircularProgress, CloseButton, Code as CodeComponent, Collapse, Drawer, Editable, FormControl, Grid, Heading as HeadingComponent, Icon, Image, Input, Kbd, Link, List as ListComponent, Menu, Modal, NumberInput, Popover, Progress, Radio, Select, Skeleton, Slider, Spinner, Stat, Switch, Table, Tabs, Tag, Textarea, Tooltip, useDisclosure } from "@chakra-ui/react";

const components = [
  { name: "Accordion", component: <Accordion /> },
  { name: "Alert", component: <Alert /> },
  { name: "Avatar", component: <Avatar /> },
  { name: "Badge", component: <Badge /> },
  { name: "Breadcrumb", component: <Breadcrumb /> },
  { name: "Button", component: <Button>Button</Button> },
  { name: "Card", component: <Card /> },
  { name: "Checkbox", component: <Checkbox /> },
  { name: "CircularProgress", component: <CircularProgress /> },
  { name: "CloseButton", component: <CloseButton /> },
  { name: "Code", component: <CodeComponent>Code</CodeComponent> },
  { name: "Collapse", component: <Collapse /> },
  { name: "Drawer", component: <Drawer /> },
  { name: "Editable", component: <Editable /> },
  { name: "FormControl", component: <FormControl /> },
  { name: "Grid", component: <Grid /> },
  { name: "Heading", component: <HeadingComponent>Heading</HeadingComponent> },
  { name: "Icon", component: <Icon /> },
  { name: "Image", component: <Image /> },
  { name: "Input", component: <Input /> },
  { name: "Kbd", component: <Kbd /> },
  { name: "Link", component: <Link /> },
  { name: "List", component: <ListComponent /> },
  { name: "Menu", component: <Menu /> },
  { name: "Modal", component: <Modal /> },
  { name: "NumberInput", component: <NumberInput /> },
  { name: "Popover", component: <Popover /> },
  { name: "Progress", component: <Progress /> },
  { name: "Radio", component: <Radio /> },
  { name: "Select", component: <Select /> },
  { name: "Skeleton", component: <Skeleton /> },
  { name: "Slider", component: <Slider /> },
  { name: "Spinner", component: <Spinner /> },
  { name: "Stat", component: <Stat /> },
  { name: "Switch", component: <Switch /> },
  { name: "Table", component: <Table /> },
  { name: "Tabs", component: <Tabs /> },
  { name: "Tag", component: <Tag /> },
  { name: "Textarea", component: <Textarea /> },
  { name: "Tooltip", component: <Tooltip /> },
  { name: "useDisclosure", component: <useDisclosure /> },
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
            <ListItem key={index}>
              <Code>{`import { ${component.name} } from "@chakra-ui/react";`}</Code>
              <Box mt={2}>{component.component}</Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default ShadcdnComponents;