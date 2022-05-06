import { food1, food2, food3 } from "../img/index";

export default class ProductStoreService {
  data = [
    {
      id: 1,
      category_id: 0,
      title: "Паста",
      author: "Сыр, Тесто, Фарш",
      price: 1000,
      coverImage: food1,
    },
    {
      id: 2,
      category_id: 0,
      title: "Креветки",
      author: "Тесто, Креветка, Лук",
      price: 1200,
      coverImage: food2,
    },
    {
      id: 3,
      category_id: 0,
      title: "Манты",
      author: "Тесто, Фарш, Лук",
      price: 1500,
      coverImage: food3,
    },
    {
      id: 4,
      category_id: 1,
      title: "Пепси",
      author: "Напиток",
      price: 250,
      coverImage: "https://www.freeiconspng.com/uploads/pepsi-icon-0.png",
    },
    {
      id: 5,
      category_id: 1,
      title: "Coca-Cola",
      author: "Напиток",
      price: 250,
      coverImage:
        "https://www.freeiconspng.com/uploads/red-coca-cola-box-png-transparent--0.png",
    },
  ];

  getProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 300);
    });
  }
}
