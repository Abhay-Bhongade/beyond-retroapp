export const ADD = (item)=>{
    return {
        type :"ADDDATA",
        payload: item
    }
}

//remove single item
export const DLT = (id)=>{
    return {
        type :"RMV_ITEM",
        payload: id
    }
}