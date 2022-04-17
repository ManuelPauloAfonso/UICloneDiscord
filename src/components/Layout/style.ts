import styled from "styled-components";

// Sl server list
// SN server names
// CI CHENON INFO
// CL CHENON LIST
// CD CHENON DATA
// UL user List
// UI user Info


export const Grid = styled.div`

display: grid;


grid-template-columns: 71px 240px auto 240px;
grid-template-rows: 46px auto 52px;
grid-template-areas: 
'SL SN CI CI'
'SL CL CD UL '
'SL UI CD UL '
;

height: 100vh;


`