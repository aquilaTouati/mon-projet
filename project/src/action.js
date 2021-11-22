 const addElement = (data) => ({
    type:"ADD",
    payload: data,
});

const removeElement = (data) => ({
    type:"REMOVE",
    payload: data,
});

export default {addElement, removeElement};