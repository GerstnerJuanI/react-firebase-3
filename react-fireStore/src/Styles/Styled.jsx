import Styled from "styled-components";

export const Fondo = Styled.div`
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
`;

export const ErrorTag = Styled.div`
    background: rgb(238,0,78);
    background: radial-gradient(circle, rgba(238,20,20,1) 0%, rgba(238,0,78,1) 100%);
    // font-style: italic;
    font-family: sans-serif, "Helvetica Neue", "Lucida Grande", Arial;
    font-stretch: expanded;
    font-weight: bold;
`;

export const Borrar = Styled.div`
    float: right;
    margin-bottom: 5%;
`;