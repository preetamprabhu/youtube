import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { logo } from '../utils/constants'

function Navbar() {
  return (
    <Stack direction="row"
      alignItems="center"
      justifyContent= 'space-between'
      p={2}
      sx={{
        position: 'sticky',
        background: 'black',
        top: 0,
        left: 0,
        zIndex:1000
        }}
    >

      <Link to="/" style={{ display: 'flex', alignItems: 'Center' }}>
        <img src={logo} alt="logo" height={45} />

      </Link>
      <SearchBar />

    </Stack>

  )
}

export default Navbar
