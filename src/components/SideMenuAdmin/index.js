import React from "react";
import list from "./menuList"
import LogoutIcon from '@mui/icons-material/Logout';
import { useUser } from "../../hooks/UserContext"
import { Container, ItemContainer, ListLink } from "./styles"
import PropTypes from 'prop-types';


export function SideMenuAdmin({path}) {

    const { logout } = useUser()

    return (
        <Container>
            <hr></hr>
            {list.map(item => (
                <ItemContainer key={item.id} isactive={String(path === item.link )}>
                    <item.icon className="icon" />
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ItemContainer>
            ))}
            <hr></hr>
            <ItemContainer style={{ position: "fixed", bottom: "20px" }}>
                <LogoutIcon style={{ color: "#ffffff" }} />
                <ListLink to="/login" onClick={logout}>Sair</ListLink>
            </ItemContainer>
        </Container>

    )
}

SideMenuAdmin.propTypes = {    
        path: PropTypes.string
    }



