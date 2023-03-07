import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button, Form } from "antd";
import foods from "./foods.json";
import './App.css';

function App() {

  const [foodList, setFoodList] = useState(foods);
  const [searchText, ] = useState("");

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
            <FoodBox food={food}  />
          </Col>
        ))}
      </Row>
    </div>
  );
}

function FoodBox({ food, onDeleteFood }) {
  const { name, image, calories, servings } = food;

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={name} src={image} />}
      actions={[<Button onClick={() => onDeleteFood(name)}>Delete</Button>]}
    >
      <Card.Meta title={name} description={`${calories} cal`} />
      <p>{servings} servings</p>
      <p>Total Calories: {calories * servings}</p>
    </Card>
  );
}


export default App;