import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta;
    if (categoryName) {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    } else {
      consulta = productsCollection;
    }

    getDocs(consulta).then((res) => {
      let products = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      setItems(products);
    });
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
