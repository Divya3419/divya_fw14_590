import React from 'react';

import styled ,{css}from 'styled-components'


const ButtonWrapper = styled.button`

background-color:blue;
color:white;
text-align:center;
padding:10px;
border:none;
${props => props.btn1 && css`
background:white;
color:black;
`}
${props => props.btn2 && css`
background:white;
color:black;
border:1px dashed black;
`}

${props => props.btn3 && css`
background:white;
color:black;
border:none;
`}

${props => props.btn4 && css`
background:white;
color:blue;
border:none;
`}


`


const Container=styled.div`
text-align:center;
margin-top:150px;
`




export const Button = () => {
  return (
      <Container>
   <ButtonWrapper>
       Primary button
   </ButtonWrapper>

<ButtonWrapper btn1>
Default button
</ButtonWrapper>

<ButtonWrapper btn2>
       Dashed button
   </ButtonWrapper>

<ButtonWrapper btn3>
Text button
</ButtonWrapper>

<ButtonWrapper btn4>
       Link button
   </ButtonWrapper>
   </Container>
  )
}

