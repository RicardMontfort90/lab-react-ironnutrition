import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button, Form } from "antd";
import foods from "./foods.json";
import './App.css';

function App() {

  const [foodList, setFoodList] = useState(foods);
  const [searchText, setSearchText] = useState("");

  const handleAddFood = (values) => {
    const newFood = {
      name: values.name,
      image: values.image,
      calories: values.calories,
      servings: values.servings,
    };
    setFoodList([...foodList, newFood]);
  };


  const filteredFoodList = foodList.filter((food) =>
  food.name.toLowerCase().includes(searchText.toLowerCase())
);

  return (
    <div className="container">
      <h1>IronNutrition</h1>
      <Row>
        <Col>
        <Divider>Fancy Input</Divider>
          <Input value={""} onChange={() => {}} />
        </Col>
      </Row>


      <Divider>Food List</Divider>
      <Row gutter={[16, 16]}>
        {filteredFoodList.map((food, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;