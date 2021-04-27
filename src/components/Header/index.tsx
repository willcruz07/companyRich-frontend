/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import {
  Avatar,
  Button,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener,
  Divider,
} from "@material-ui/core";

import Modal from "react-modal";

import LogoCompany from "../../assets/company.svg";
import InputSearch from "../InputSearch/index";
import {
  Container,
  ContainerUser,
  ContainerLogo,
  ContainerModal,
} from "./styles";
import { useAuth } from "../../hooks/auth";
import { IUser } from "../../model/User";
import * as Company from "../../services/company";
import { ICompany } from "../../model/Company";
import { formattedCNPJ } from "../../utils/Lib";

const Header: React.FC = () => {
  const [search, setSearch] = React.useState("");
  const [searchCompany, setSearchCompany] = React.useState<ICompany | null>(
    null,
  );
  const [openModalCompany, setOpenModalCompany] = React.useState(false);
  const [openModalUser, setOpenModalUser] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const [user, setUser] = React.useState<IUser | null>(null);

  const { signOut } = useAuth();

  const handleToggle = () => {
    setOpenMenu(prevOpen => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpenMenu(false);
  };

  const prevOpen = React.useRef(openMenu);

  React.useEffect(() => {
    const localUser = localStorage.getItem("@brbatel:user");
    if (localUser) setUser(JSON.parse(localUser));

    if (prevOpen.current === true && openMenu === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = openMenu;
  }, [openMenu]);

  const handleSearch = async (event: React.KeyboardEvent) => {
    if (event.key == "Enter" && search.length > 3) {
      const response = await Company.getCompany(search);
      if (response.status === 200) {
        setSearchCompany(response.data);
        setOpenModalCompany(true);
      } else if (response.status == 400) {
        alert("Empresa não encontrada");
      }
    }
  };

  return (
    <Container>
      <Modal
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        isOpen={openModalCompany}
        onRequestClose={() => setOpenModalCompany(false)}
      >
        <ContainerModal>
          <h2>Empresa</h2>
          <Divider />
          <h4>Nome: {searchCompany?.name}</h4>
          <Divider />
          <h4>CNPJ: {formattedCNPJ(searchCompany?.cnpj.toString())}</h4>
          <Divider />
          <h4>Bio: {searchCompany?.bio}</h4>
        </ContainerModal>
      </Modal>
      <ContainerLogo>
        <img src={LogoCompany} alt="Logo company" />
        <h2>Company Rich</h2>
      </ContainerLogo>
      <InputSearch
        value={search}
        type="text"
        name="search"
        placeholder="Pesquisar"
        onKeyPress={handleSearch}
        onChange={e => setSearch(e.target.value)}
      />

      <ContainerUser>
        <Button
          ref={anchorRef}
          aria-controls={openMenu ? "menu-list-grow" : undefined}
          aria-haspopup={true}
          onClick={handleToggle}
        >
          <Avatar style={{ backgroundColor: "#555A64" }}>W</Avatar>
        </Button>
        <Popper
          open={openMenu}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={openMenu} id="menu-list-grow">
                    {user && (
                      <MenuItem
                        onClick={event => {
                          handleClose(event), setOpenModalUser(true);
                        }}
                      >
                        {user?.name}
                      </MenuItem>
                    )}

                    <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </ContainerUser>

      <Modal
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        isOpen={openModalUser}
        onRequestClose={() => setOpenModalUser(false)}
      >
        <ContainerModal>
          <h2>Usuário</h2>
          <Divider />
          <h4>Nome: {user?.name}</h4>
          <Divider />
          <h4>Email: {user?.email}</h4>
        </ContainerModal>
      </Modal>
    </Container>
  );
};

export default Header;
