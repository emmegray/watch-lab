import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "./Button";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

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
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate= {{ opacity: 1, y: 0 }}
                exit={{ y: 50 }}>
                <h3 className="subtitle">{subtitle}</h3>
                <h1 className="title">{title}</h1>
                <h2 className="description">{description}</h2>
                <Button>Discover</Button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ x: 50 }}
                transition={{
                    duration: 0.35,
                    delay: 0.7
                }}
                className="position-absolute bottom-0 end-0 d-sm-none d-md-none d-lg-block">
                <div
                    className="d-flex flex-column justify-content-between"
                    style={{
                        padding: "3rem",
                        width: "400px",
                        height: "300px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: `
                            linear-gradient(
                                rgba(0, 0, 0, 0.65),
                                rgba(0, 0, 0, 0.65)
                            ),
                            url(/assets/images/slide.png)
                            `
                    }}>
                    <Row className="text-start">
                        <h1 className="title-small">The Path to Success <br />with Watchlab</h1>
                    </Row>
                    <Row className="text-end">
                        <a href="#" className="subtitle-big bold">Next <FontAwesomeIcon icon={faChevronRight} size="m"/></a></Row>
                </div>
            </motion.div>
        </Container>
    )
}