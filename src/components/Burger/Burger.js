// Burger.js
import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';

const Burger = ({ open, setOpen, ...props }) => {
  
    const isExpanded = open ? true : false;
    return (
<StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
<div className={`burgerLine`}/>
<div className={`burgerLine`}/>
<div className={`burgerLine`}/>
</StyledBurger>
    )
}
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

export default Burger;
