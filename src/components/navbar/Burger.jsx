import styles from './navBar.module.css'
import styled from 'styled-components'
import { useState } from 'react'
import { useMediaQuery } from "@uidotdev/usehooks";
import RightNav from './RightNav';

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 1.875rem;
    right: 1.25rem;
    z-index: 20;
    display: flex;
    cursor: pointer;
    justify-content: space-around;
    flex-flow: column nowrap;

    @media (min-width: 51.25rem) {
        display: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#fff' : '#0e76a8'};
        border-radius: 10px;        
        transform-origin: 1px;
        transition: all 0.3s linear;
        
        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
   `;


export default function Burger() { 

    const [open, setOpen] = useState(false)
    const isMobile = useMediaQuery('(max-width: 51.25rem)');

    function handleClick() {
        setOpen(!open)
    }


    return (
        
        <>
            <StyledBurger className={styles.burger} onClick={() => setOpen(!open)} open={open}>
                <div></div>
                <div></div>
                <div></div>
            </StyledBurger>
            {
                isMobile && <RightNav open={open} setOpen={handleClick}/>
            }
        </>
        
    )
}
