import {styled} from '@mui/system';
import React from 'react'
import MainImage from '../lottie/MainImage'

const Main = () => {
    const MainStyle = styled('div')({
        width: '100%',
        marginTop: '70px'
    })

    const MainIntro = styled('h1')(({theme}) => ({
        [theme.breakpoints.up('xl')]: {
            fontSize: '8rem',
            marginLeft: '1.5rem',
            lineHeight: '7rem',
          },
          [theme.breakpoints.down('xl')]: {
            fontSize: '5rem',
            marginLeft: '2rem',
            lineHeight: '4.5rem',
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem',
          },
    }));

    const ImageAndPara = styled('div')(({theme}) => ({
        [theme.breakpoints.up('xl')]: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
        },
        [theme.breakpoints.down('xl')]: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
        },
    }))

    const NamePara = styled('h1')(({theme}) => ({
        [theme.breakpoints.up('xl')]: {
            fontSize: '8rem',
            lineHeight: '8rem',
            marginRight: '1.5rem',
        },
        [theme.breakpoints.down('xl')]: {
            fontSize: '5rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '4rem',
        },
    }));

    // const Name = styled('div')(({theme}) => ({
    //     right: '4rem',
    //     [theme.breakpoints.down('sm')]: {
    //         right: '1rem',
    //     },
    // }));


    return (
        <MainStyle>
            <MainIntro>FRONTEND <br/>DEVELOPER</MainIntro>
            <ImageAndPara>
                <MainImage/>
                <>
                    <NamePara>
                        MINWOO <br/>JUNG
                    </NamePara>
                </>
            </ImageAndPara>
        </MainStyle>
    )
}

export default Main