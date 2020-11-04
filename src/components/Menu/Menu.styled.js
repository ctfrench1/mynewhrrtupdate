// Menu.styled.js
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #0074c4; 
  width: 100vw;
  z-index: 100;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 16;
  transition: transform 0.3s ease-in-out;
  @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }

  ul{
    position: relative;
    text-align: left;
  }

  li {
    list-style-type: none;
    border-bottom:1px solid #142d5f;
    margin-bottom: 2rem;
  }

  a {
    font-size: 1.5rem;
    text-transform: capitalize;
    padding: 1rem;
    font-weight: bold;
    width: inherit;
    letter-spacing: 0.5rem;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s linear;
   

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
      background-color: #ff6500;
    }
  }

.customizerWrapper{
  background: hsla(0,0%,100%,.1);
}
`;