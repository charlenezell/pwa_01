export const trimEmptyObjectValue=(a)=>{
    let b={}
    for (let c of Object.keys(a)){
        if(a[c]!==undefined&&a[c]!==""){
            b[c]=a[c];
        }
    }
    return b;
}
export const parseFormData=(event)=>{
    let rst={};
    var formData = new FormData(event.currentTarget);
    for (let [a,b] of formData.entries()){
        rst[a]=b;
    }
    return rst;
}

export default {
    trimEmptyObjectValue,parseFormData
}