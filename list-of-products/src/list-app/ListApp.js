export const loadListProduct = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(listProduct);
    }, 2000);
  });

export const listProduct = [
  {
    "id": 1,
    "imageUrl": "https://pngimg.com/uploads/bread/bread_PNG2273.png",
    "name": "Bread",
    "count": 4,
    "size": {
      "width": 200,
      "height": 200
    },
    "weight": "175g",
    "comments": [
      {
        "id": 3,
        "productId": 1,
        "description": "Bread, baked food product made of flour or meal that is moistened, kneaded, and sometimes fermented. ... The Egyptians apparently discovered that allowing wheat doughs to ferment, thus forming gases, produced a light, expanded loaf, and they also developed baking ovens.",
        "date": "13:30 22.02.2021"
      }, 
      "CommentModel"]
  },
  {
    "id": 2,
    "imageUrl": "http://assets.stickpng.com/images/58b16eea102ddecdee0dd030.png",
    "name": "Butter",
    "count": 4,
    "size": {
      "width": 2020,
      "height": 200
    },
    "weight": "2200g",
    "comments": [
      {
        "id": 3,
        "productId": 2,
        "description": "Butter, a yellow-to-white solid emulsion of fat globules, water, and inorganic salts produced by churning the cream from cows' milk.",
        "date": "12:00 02.01.2022"
      }, 
      "CommentModel"]
  },
  {
    "id": 3,
    "imageUrl": "http://assets.stickpng.com/images/5a0abf425a997e1c2cea1084.png",
    "name": "Sausage",
    "count": 4,
    "size": {
      "width": 200,
      "height": 200
    },
    "weight": "200g",
    "comments": [
      {
        "id": 3,
        "productId": 3,
        "description": "A sausage is a type of meat product usually made from ground meat, often pork, beef, or poultry, along with salt, spices and other flavourings. ... The word sausage can refer to the loose sausage meat, which can be formed into patties or stuffed into a skin.",
        "date": "21:00 18.02.2022"
      }, 
      "CommentModel"]
  }
]