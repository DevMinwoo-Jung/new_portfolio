import React, { VFC } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { styled } from "@mui/system"
import { GoMarkGithub } from 'react-icons/go'
import { BiSlideshow } from 'react-icons/bi'
import Tooltip from '@mui/material/Tooltip'


export type ProjectProps =  {
    project: any
}

const Project:VFC<ProjectProps> = (props) => {
    const { project } = props

    const CardStyle = styled(Card)(({ theme }) => ({
        width: '60rem',
        height: '25rem',
        display: 'flex',
        margin: 'auto',
        [theme.breakpoints.between('xl', 'md')]: {
            width: theme.breakpoints.values.xl
        },
        [theme.breakpoints.down('sm')]: {
            width: '25rem',
            height: '40rem',
            display: 'block'
        },
    }));

    const CardMediaStyle = styled(CardMedia)(({ theme }) => ({
        width: '20rem',
        [theme.breakpoints.between('xl', 'md')]: {
            width: theme.breakpoints.values.xl
        },
        [theme.breakpoints.down('sm')]: {
            height: '20rem',
            width: '25rem',
        },
    }));

    const CardContentStyle = styled('div')({
        margin: '0 2rem',
        textAlign: 'left',
        maxWidth: '650px',
        height: '100%',
        width: '90%'
    })

    const CardDiv = styled('div')({
        width: '100%',
        margin: 'auto'
    })

    const IconsDiv = styled('div')({
        display: 'flex',
        fontSize: '2rem',
        margin: '0 2rem',
        alignItems: 'stretch',
        cursor: 'pointer'
    })

    const AtagStyle = styled('a')({
        ":-webkit-any-link": {
            color: 'black'
        }
    })

    const CardParaStyle = styled('span')({
        fontSize: '16px'
    })

    const BoxStyle = styled(Box)({
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
        bottom: '0',
        position: 'absolute'
    })

    return (
        <CardDiv>
            <CardStyle>
                <CardMediaStyle
                    image='imgs/icon/javascript.png'
                />
                <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                    <CardContentStyle>
                        <h2>{project.project__title}</h2>
                        <CardParaStyle>
                            {project.project__para}<br/>
                            기여도: {project.project__contribution}<br/>
                            기간: {project.project__making__duration}<br/>
                            설명: {project.project__detail}<br/>
                            기술 스택: {project.project__stack}
                        </CardParaStyle>
                    </CardContentStyle>
                    <BoxStyle>
                        <IconsDiv>
                            <Tooltip title='Go to Github' placement="top">
                                <AtagStyle target='_blank' href={project.project__src}>
                                    <GoMarkGithub/>
                                </AtagStyle>
                            </Tooltip>
                            &nbsp;&nbsp;
                            <Tooltip title='Show Live' placement="top">
                            <AtagStyle target='_blank' href={project.project__live}>
                                <BiSlideshow />
                            </AtagStyle>
                            </Tooltip>
                        </IconsDiv>
                    </BoxStyle>
                </Box>
            </CardStyle>
        </CardDiv>
    )
}

export default Project