/*
    amType:0未打卡,1迟到，2已打卡；
    pmType:0未打卡,1早退，2已打卡

 */
export default {
    resultCode:1,
    responseBody:{
        checkList:[
            {amType:2,pmType:1},
            {amType:3,pmType:2},
            {amType:2,pmType:3},
            {amType:0,pmType:0},
            {amType:0,pmType:0}
        ]
    }
}