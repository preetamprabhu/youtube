import React, { useEffect ,useState} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SideBar from './SideBar'
import Videos from './Videos'
import {FetchFromAPI} from '../utils/FetchFromAPI'




function Feed() {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    setVideos(null)

    FetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{setVideos(data.items)
    console.log(data.items)})
  
  }, [selectedCategory])


  return (
    <>
      <Stack
        sx={{ flexDirection: { sx: 'column', sm: 'row' } }}>
        <Box sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { xs: 0, md: 2 }}}
          >
          <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

          <Typography
            className='copyright'
            variant='body2'
            sx={{ mt: 1.5, color: '#fff' }}
            >
            @ copyright 2024 JSM Media
          </Typography>
        </Box>
        <Box
          p={2}
          sx={{
            overflowY: 'auto',
            height: {xs:'100%'},
            flex: 2
          }}
          >
          <Typography
            fontWeight='bold'
            variant='h4'
            sx={{ m: 1.5, color: '#FC1503' }}
          >
            {selectedCategory}  <span
              variant='h4'
              style={{ color: '#FC1503' }}
            >
              videos
            </span>
          </Typography>
          <Videos videos={videos}/>

         
        </Box>
        
      </Stack>
    </>
  )
}

export default Feed;