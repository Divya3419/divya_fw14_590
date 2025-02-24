import Card from "./Card"

const data={
name:"puja",
imgUrl:"https://ca.slack-edge.com/T02QFJUB5DF-U03BPAP2BU0-907e1d47436f-512",
gender:"female"
}

const Employdetail=()=>{
    return(
//display a card

<>

{/* for full object data
<Card  studentdetail={data}/> */}

 <Card {...data}/> 
</>

    )
}
export default Employdetail