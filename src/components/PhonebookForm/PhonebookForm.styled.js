import styled from "@emotion/styled";

export const Form = styled.form`
display: flex;
flex-direction: row;
align-items: center;
`
export const Label = styled.label`
display: flex;
align-items: center;
margin: 10px;
font-size: 25px;
`
export const Input = styled.input`
width: 190px;
border-radius: 10px;
padding: 5px;
margin-left: 10px;
`
export const Button = styled.button`
border-radius: 10px;
height: 30px;
background-color: lightgreen;
font-size: 15px;
margin-left: 15px;
transition: cubic-bezier(0.075, 0.82, 0.165, 1) 500ms;
cursor: pointer;

&:hover{
   box-shadow: 2px 5px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 5px 5px rgba(0, 0, 0, 0.12);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.2);
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 500ms;
}
`




