import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

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
            <motion.div initial={{ opacity: 0, y: -50 }} animate= {{ opacity: 1, y: 0 }} exit={{ y: 50 }}>
                <h3 className="subtitle">{subtitle}</h3>
                <h1 className="title">{title}</h1>
                <h2 className="description">{description}</h2>
                <Button>Discover</Button>
            </motion.div>
        </Container>
    )
}