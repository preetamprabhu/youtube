import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { logo } from "../utils/constants";

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        position: "sticky",
        background: "black",
        top: 0,
        left: 0,
        zIndex: 1000,
        p: { xs: "5px 4px 0 4px ", sm: "16px", md: "16px" },
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "Center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
