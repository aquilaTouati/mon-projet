 const add  = (data) => ({
    type:"ADD",
    payload: data,
});

const remove = (data) => ({
    type:"REMOVE",
    payload: data,
});

export default {remove, add};