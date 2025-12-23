import "./App.css";
import Card from "./components/Card";

function App() {
  const products = [
    {
      id: 1,
      title: "Stylish Coffee Mug",
      price: "$15.00",
      description: "Minimal ceramic mug for coffee or tea.",
      image:
        "https://c.pxhere.com/photos/39/a8/coffee_cafe_mug_decorative_drink_beverage_latte_cappuccino-847370.jpg!d",
      badge: "Sale",
    },
    {
      id: 2,
      title: "Modern Wrist Watch",
      price: "$120.00",
      description: "Elegant watch for everyday wear.",
      image:
        "https://c.pxhere.com/photos/3b/85/smart_watch_apple_technology_style_fashion_smart_mobile_display-714020.jpg!d",
      badge: "New",
    },
    {
      id: 3,
      title: "Office Coffee Set",
      price: "$30.00",
      description: "Perfect cup set for office desks.",
      image:
        "https://c.pxhere.com/photos/c1/7d/afternoon_beverage_break_coffee_coffee_break_coffee_machine_cup_food-1638626.jpg!d",
      badge: null,
    },
    {
      id: 4,
      title: "Laptop",
      price: "$2800.00",
      description: "Apple brand Laptop and personal computer",
      image:
        "https://c.pxhere.com/photos/bd/15/macbook_apple_imac_computer_screen_laptop_notebook_technology-758989.jpg!d",
      badge: "Limited",
    },
  ];
  return (
    <div className="grid w-fit grid-cols-1 md:grid-cols-2 gap-2 py-10 mx-auto">
      {products.map((p) => {
        return <Card key={p.id} product={p} />;
      })}
    </div>
  );
}

export default App;
