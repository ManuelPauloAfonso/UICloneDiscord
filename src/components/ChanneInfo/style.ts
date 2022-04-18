import styled from "styled-components";
import { Hashtag } from 'styled-icons/heroicons-outline'


export const Container = styled.div`
    grid-area: CI;  
    display: flex;
    align-items: center;
    padding: 0 17px;
    background-color: #36393f;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;

`
export const Description = styled.span`
font-size: 15px;
color: gray;



`
export const HastagaIcon = styled(Hashtag)`
width: 24px;
height: 24px;
color: #74777a;

`
export const Separator = styled.div`
height: 24px;
width: 1px;
background-color: white;
opacity: 0.2;
margin: 0px 13px;

`
export const Title = styled.h1`
margin-left: 9px;
font-size: 16px;
font-weight: bold;
color: white;
`