import {
  Box,
  Stack,
  Text,
  Badge,
  CheckboxGroup,
  Checkbox,
  Editable,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { EditIcon } from "@chakra-ui/icons";
const TaskCard = ({
  title,
  description,
  tags,
  subTasks,
  colorScheme = "green",
}) => {
  const [checkbox, setCheckbox] = useState(() => {
    let data = subTasks
      .filter((item) => {
        return item.status && item.subTaskTitle;
      })
      .map((item) => item.subTaskTitle);
    return data;
  });

  return (
    <Box border="1px solid red" w="250px" p="10px" m="auto">
      <Flex justifyContent="space-between">
        <Text>{title}</Text>
        <EditIcon />
      </Flex>
      <Box>
        <Stack direction="row">
          {tags.length &&
            tags.map((item, index) => {
              return (
                <Badge key={index} colorScheme={colorScheme}>
                  {" "}
                  {item}{" "}
                </Badge>
              );
            })}
        </Stack>
      </Box>
      <Text>{description}</Text>
      <Box>
        <CheckboxGroup value={checkbox}>
          {subTasks.length &&
            subTasks.map((item, index) => (
              <Checkbox key={index} size="md" value={item.subTaskTitle}>
                {item.subTaskTitle}
              </Checkbox>
            ))}
        </CheckboxGroup>
      </Box>
    </Box>
  );
};

export default TaskCard;
