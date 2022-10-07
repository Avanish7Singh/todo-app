export const add = (item) =>{
    return{
        type:"item_data",
        payload: item
    }
}

export const Remove = (id) =>{
    return{
        type:"Remove_data",
        payload: id
    }
}

export const Update = (item, id) =>{
    return{
     type: "Update_Data",
     payload:item,
     item_id:id
    }
}