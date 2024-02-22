import React from 'react'
import { useState } from 'react'
import { parsePath, useNavigation } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'


const SearchBar = () => {
    return (
        <Paper
            component="form"
            onSubmit={() => { }}
            sx={{
                borderRadius: 20,
                border: '2px solid red',
                pl:2,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}
        >
            <input className='search-bar' placeholder='search...' value='' onChange={() => { }} />
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }} onClick={() => { }}>
                <Search />
            </IconButton>

        </Paper>
    )
}
export default SearchBar

