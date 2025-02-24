import { EditIcon } from '@chakra-ui/icons'
import { Box, CheckboxGroup, Flex, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const TaskCard = () => {
    const[checkBox,setCheckBox]=useState(()=>{
        let data=subTasks.filter(ele=>{
            return ele.status && ele.subTaskTitle
        })
        .map((ele)=> ele.title)
    })

  return (
    <Box border="2ps solid black">
        <Flex>
            <Text>{title}</Text>
            <EditIcon/>
        </Flex>
        <Box>
        <Stack>

    </Stack>
    </Box>
    <Text>{description}</Text>
    <Box>
        <CheckboxGroup value={checkbox} >
            {subtasks.length && subtasks.map((ele)=>{
                return 
            })}


        </CheckboxGroup>
    </Box>
    </Box>

  )
}

export default TaskCard