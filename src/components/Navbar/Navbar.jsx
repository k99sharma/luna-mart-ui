// importing components
import { Button, Container, SwipeableDrawer } from '@mui/material';
import { useState } from 'react';
import { MenuOutlined } from '@mui/icons-material';

// importing custom components
import Searchbar from '../Searchbar/Searchbar';

// navbar
const Navbar = () => {
  // states
  const [open, setOpen] = useState(false);

  const options = [
    {
      id: 1,
      label: 'Label 1',
    },
  ];

  // event: toggle navbar on click
  const toggleNavbar = (value) => {
    setOpen(value);
  };

  return (
    <Container>
      <div className="navbar flex justify-between items-center py-3">
        <div className="navbar__logo md:w-1/4">Logo</div>

        <div className="navbar__landscape md:w-3/4 hidden md:flex md:items-center md:justify-between">
          <div className="navbar__landscape__options w-full">
            Navbar Options
          </div>

          <div className="navbar__landscape__userActions w-full flex justify-between">
            <div className="navbar__landscape__userActions__search">
              <Searchbar options={options} />
            </div>

            <div className="navbar__landscape__userActions__actions">
              Navbar User Actions
            </div>
          </div>
        </div>

        <div className="navbar__mobile md:hidden">
          <Button onClick={() => toggleNavbar(true)}>
            <MenuOutlined />
          </Button>
        </div>
      </div>

      <SwipeableDrawer
        anchor="top"
        open={open}
        onOpen={() => toggleNavbar(true)}
        onClose={() => toggleNavbar(false)}
      >
        <div className="navbar__mobile__logo">Logo</div>
        <div className="navbar__mobile__option">Navbar Option</div>
        <div className="navbar__mobile__userActions">Navbar User Actions</div>
      </SwipeableDrawer>
    </Container>
  );
};

export default Navbar;
