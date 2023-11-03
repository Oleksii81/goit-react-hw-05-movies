import styled from "styled-components";

export const SharedLayoutStyled = styled.div`
    
    .nav-list {
        list-style: none;
        display: flex;      
    }
    .nav-link {
        text-decoration: none;
        padding: 8px 16px;
        border-radius: 4px;
        color: #1d2475;
        font-weight: 500;
        margin-right: 12px;
    }
    .nav-link.active {
        color: white;
        background-color: #1d2475;
    }
    .nav-link:hover {
        border-color: #daf52e;
        box-shadow: 0px 3px 20px rgb(247, 243, 4);
    }
  `