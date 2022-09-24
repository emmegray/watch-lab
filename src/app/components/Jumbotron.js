import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Button from "./Button";

import style from './Jumbotron.module.scss';

export default function Jumbotron ({
    title =  "",
    description = "",
    subtitle = "",
    backgroundUrl = "",
}) {
    const background = `
        linear-gradient(
            rgba(0, 0, 0, 0.35), 
            rgba(0, 0, 0, 0.35)
        ),
        url(${backgroundUrl})
    `;

    return (
        <Container fluid 
            className={style.Jumbotron}
            style={{
                backgroundImage: background
            }}>
            <div>
                <h3 className="subtitle">{subtitle}</h3>
                <h1 className="title">{title}</h1>
                <h2 className="description">{description}</h2>
                <Button>Discover</Button>
            </div>
        </Container>
    )
}