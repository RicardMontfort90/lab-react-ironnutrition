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

  return (
    <div className="container">
      <h1>IronNutrition</h1>
      <Row>
        <Col>
        <Divider>Fancy Input</Divider>
          <Input value={""} onChange={() => {}} />
        </Col>
      
        <Col>
          <Card title={"Fancy Card"}>
            <Button onClick={() => {}}>Fancy Button</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;