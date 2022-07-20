import { Box ,Flex,Text} from '@chakra-ui/react'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TaskCard from '../component/TaskCard'
import { getTasks } from '../Redux/AppReducer/action'

const HomePage = () => {
const tasks = useSelector((state)=>state.AppReducer.tasks)
const dispatch = useDispatch();


const getTasksHandler =useCallback(()=>{
  dispatch(getTasks());
},[dispatch])

useEffect(()=>{
  if(tasks.length===0){

    getTasksHandler();
  }
  
},[getTasksHandler,tasks.length ])
console.log(tasks)

  return (
    <Box border="1px solid black" w='100%'>

      <Flex justifyContent="space-around">
        <Box border="1px solid red" w="250px" h='95vh' >
          <Box>
            <Text textAlign = "center">
              TODO
            </Text>
            {tasks.length>0 &&  tasks.filter((item)=>item.task_status==="todo")
            .map((item)=>{
              return <TaskCard key={item.id} {...item}/>
            })
            }
          </Box>
        </Box>
        <Box border="1px solid red" w="250px" h='95vh' >
        <Box>
            <Text textAlign = "center">
              IN - PROGRESS
            </Text>
            {tasks.length>0 &&  tasks.filter((item)=>item.task_status==="inprogress")
            .map((item)=>{
              return <TaskCard key={item.id} {...item} colorScheme="yellow"/>
            })
            }
          </Box>
        </Box>
        <Box border="1px solid red" w="250px" h='95vh' >
        <Box>
            <Text textAlign = "center">
              DONE
            </Text>
            {tasks.length>0 &&  tasks.filter((item)=>item.task_status==="done")
            .map((item)=>{
              return <TaskCard key={item.id} {...item} colorScheme="blue"/>
            })
            }
          </Box>
        </Box>
        </Flex> 
      </Box>

    )
}

export default HomePage