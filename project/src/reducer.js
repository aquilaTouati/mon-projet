const initialState ={productsList:[
    {
    "id": 1,
    "picture": "/images.jpg/oxygene.jpg",
    "name": "Appareil d'oxgyene",
    "localisation": "Alger"
    
    },
    {
      "id": 2,
      "picture": "/images.jpg/steto.jpg",
      "name": "sthétoscope",
      "localisation": "Constantine"
      },
      {
        "id": 3,
        "picture": "/images.jpg/tensiometre.jpg",
        "name": "Tensiometre",
        "localisation": "Tizi Ouzou"
        },
        {
          "id": 4,
          "picture": "/images.jpg/chair.jpg",
          "name": "Chaise roulante",
          "localisation": "Alger"
          
          },
          {
            "id": 5,
            "picture": "/images.jpg/crutch.jpg",
            "name": "Béquilles",
            "localisation": "Alger"
              
            },
            {
              "id": 6,
              "picture": "/images.jpg/diaper.jpg",
              "name": "Couches réutilisables",
              "localisation": "Alger"
              }
  
  ]};

const listReducer = (state = initialState, action) =>{
switch (action.type){
    case"ADD":
    return {productsList: [...state.productsList, action.payload]};
    case "REMOVE":
    return {productsList:[...state.productsList.filter((value)=>value.id !== action.payload)]};
     default:
     return state;
}
};
export default listReducer;