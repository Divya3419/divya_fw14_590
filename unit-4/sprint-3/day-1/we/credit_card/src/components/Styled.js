import styled,{css} from "styled-components";
//form
export const Outer=styled.div`
display:grid;
grid-template-columns: repeat(2,1fr);
width:60%;
    margin: auto;
    margin-top:100px;
    gap:50px;
`
export const First=styled.div`
text-align:left;

`


export const Input=styled.input`

border:none;

border-bottom: 2px solid rgb(209, 43, 70);
height:40px;
width:350px;
margin-bottom: 30px;

${(props)=>props.int1 && css`
height:40px;
width:50px;
text-align:center;
`}

${(props)=>props.int2 && css`
height:40px;
width:50px;
text-align:center;
`}

${(props)=>props.int3 && css`
height:40px;
width:50px;
text-align:center;
`}


${(props)=>props.int4 && css`
color:white;
background-color:rgb(209, 43, 70);
width:150px;
height:50px;
font-size:20px;
border-radius:15px;
`}

`
export const Grid=styled.div`
display:grid;
    grid-template-columns: repeat(3,1fr);


`

//card
export const Card=styled.div`
background-color:rgb(209, 43, 70);
color:white;
border-radius: 20px;
height:270px;


`
export const Logo=styled.img`
width:70px;

padding-left: 380px;

margin:5px;
margin-top:30px;
`
export const Cip=styled.img`
width:40px;
padding-right: 350px;

margin:5px;
margin-bottom:30px;


`
export const Num=styled.div`


height:25px;
width:50%;
`

export const Detail=styled.div`
padding-left:20px;
display:grid;
grid-template-columns: repeat(3,1fr);
font-size:15px;
`