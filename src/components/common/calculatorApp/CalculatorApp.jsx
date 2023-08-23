import { useState, useEffect } from "react";

import ConstructionForm from "../../pages/constructionForm/ConstructionForm";
import ResultDisplay from "../resultDisplay/ResultDisplay";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import MaterialsCalculator from "../materialsCalculator/MaterialsCalculator";

const CalculatorApp = () => {
  const [materialsData, setMaterialsData] = useState({});
  const [calculatedMaterials, setCalculatedMaterials] = useState({});
  const [roomSize, setRoomSize] = useState("");

  const { categoryName } = useParams();

  useEffect(() => {
    const fetchMaterialsData = async () => {
      const materialsCollection = collection(db, "products");
      const snapshot = await getDocs(materialsCollection);
      const materials = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMaterialsData(materials);
    };
  
    fetchMaterialsData();
  }, []);

  const handleCalculate = (size) => {
    setRoomSize(size);
    const calculatedMaterials = calculateMaterials(size);
    setCalculatedMaterials(calculatedMaterials);
  };

  const calculateMaterials = (size) => {
    const filteredMaterials = materialsData.filter(
      (material) => material.category === categoryName
    );
  
    const calculatedMaterials = {};
    filteredMaterials.forEach((material) => {
      const quantityPerSquareMeter = material.quantityPerSquareMeter;
      const requiredQuantity = quantityPerSquareMeter * parseFloat(size);
      calculatedMaterials[material.id] = requiredQuantity;
    });
  
    return calculatedMaterials;
  };
  

  return (
    <div>
      <ConstructionForm onSubmit={handleCalculate} />
      {Object.keys(calculatedMaterials).length > 0 && (
        <ResultDisplay materials={calculatedMaterials} />
      )}
      {/* Pasamos los datos de Firebase como una prop al componente MaterialsCalculator */}
      {Object.keys(materialsData).length > 0 && (
        <MaterialsCalculator materialsData={materialsData} size={roomSize} />
      )}
    </div>
  );
};

export default CalculatorApp;
