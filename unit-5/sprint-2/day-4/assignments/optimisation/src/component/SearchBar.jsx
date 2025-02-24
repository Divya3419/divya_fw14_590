import React, { useRef, useState } from 'react'
import styled from 'styled-components'
const SearchBar = ({loading,onChange,sugg,setLoading}) => {
   const [inputt,setInput]=useState("")
   const [active, setActive] = useState(0);
  const scrollRef = useRef();

   const handleInput=(e)=>{
    setInput(e.target.value)
    
    setLoading(true)
   }

   const handleClear=()=>{
    setInput("")
    onChange("")
    setLoading(false)
   }

   //console.log(sugg)


   const handleActiveSuggestions = (e) => {
    console.log(scrollRef.current?.scrollTop);
    switch (e.keyCode) {
      //ArrowDown
      case 40:
        if (active >= 5) {
          setActive((prev) => prev + 1);
          scrollRef.current.scrollTop += 38.05;
        } else {
          setActive((prev) => prev + 1);
        }
        break;

      //ArrowUp
      case 38:
        if (active <= 2) {
          scrollRef.current.scrollTop -= 38.05;
          setActive((prev) => prev - 1);
        } else {
          setActive((prev) => prev - 1);
        }
        break;

      //Enter
      case 13:
        break;

      default:
        return;
    }
  };

  return (
    <>
    <SearchWrapper len={sugg.length} onKeyUp={handleActiveSuggestions}>
      <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt="" />
        
        <Input value={inputt} 
        onChange={handleInput} 
        type="text" />

        <Rightdiv>
       {inputt && (<Img src="https://thumbs.dreamstime.com/b/web-178572874.jpg" alt="" 
        style={{cursor:"pointer"}} onClick={handleClear}/>)}
        

       {loading && (<StyledSpinner viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>)}
  </Rightdiv>
    </SearchWrapper>

    {!loading && sugg.length > 0 && (
        <SuggestionBox
          len={sugg.length}
          limit={5}
          active={active}
          ref={scrollRef}
        >
          {sugg.map((item, index) => {
            return (
              <div key={item} onMouseOver={() => setActive(index + 1)}>
                {item}
              </div>
            );
          })}
        </SuggestionBox>
        )}
    </>
  )
}

export default SearchBar

const SuggestionBox = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  max-height: 200px;
  overflow: auto;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-color: ${({ len }) => (len ? "transparent" : "black")};
  & * {
    flex: 1;
    text-align: left;
    padding: 10px;
    padding-left: 50px;
  }

  & :nth-child(${({ active }) => active}) {
    background: lightblue;
    color: black;
    font-weight: 700;
    cursor: pointer;
  }

  /* & :nth-child(n + ${({ limit }) => limit + 1}) {
    display: none;
  } */
`;

const SearchWrapper=styled.div`
width:40%;
margin:auto;

border:1px solid black;
padding:5px 10px;
border-radius:20px;
display:flex;
`
const Img=styled.img`
width:25px
`
const Input=styled.input`
border:none;
outline:none;
width:70%;

`
const Rightdiv=styled.div``

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: 20px;
  height: 30px;
  
  & .path {
    stroke: #5652BF;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
