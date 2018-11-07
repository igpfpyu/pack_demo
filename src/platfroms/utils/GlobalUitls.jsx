export const isNull=(pass)=>{
    let newPass=(pass instanceof Array) || (pass instanceof Object) ? JSON.stringify(pass) : String(pass);
    switch (newPass){
        case "null":
        case "undefined":
        case "defined":
        case "{}":
        case "[]":
        case "":{
            return true;
        }
        default:
            return false;
    }
};