export const isNull=(pass)=>{
    pass=(pass instanceof Array) || (pass instanceof Object) ? JSON.stringify(pass) : pass;
    switch (String(pass)){
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