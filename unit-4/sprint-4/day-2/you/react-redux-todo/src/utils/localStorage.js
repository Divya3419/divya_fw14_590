function loadData(key){
    try{
let data=localStorage.getItem(key);
data=JSON.parse(data)
return data
    }
    catch(error){
return error
    }
}

function saveData(key,data){
    localStorage.setItem(key,JSON.stringify(data))
}

export {loadData,saveData}