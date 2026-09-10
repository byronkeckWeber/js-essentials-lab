import VendorCard from "./components/VendorCard";
import GearItemCard from "./components/GearItemCard";


function App() {
  
  //Starter code from the assignment
  const shopInventory = [
    { 
      id: "g1", 
      name: "Neural Link Processor", 
      category: "Cyberware", 
      description: "Boosts reaction time and memory bandwidth.", 
      basePrice: 1200 
    },
    { 
      id: "g2", 
      name: "Thermal Katana", 
      category: "Weapons", 
      description: "Plasma-heated blade for cutting armor.", 
      basePrice: 850 
    },
    { 
      id: "g3", 
      name: "Optical Camo Cloak", 
      category: "Apparel", 
      description: "Renders user semi-invisible to security sensors.", 
      basePrice: 2100 
    }
  ];

  //Claude AI was used to help debug when nothing was displaying on my localhost page.
  //Found return was missing and got the correct syntax.
  return (
    <div>
      <h1>Vendor</h1>
      <VendorCard vendorName = "Gears for Grifters"
        location = "Downtown Plaza"/>
      <h1>Shop Inventory</h1>
      {shopInventory.map((item) => (
        <GearItemCard
          key={item.id}
          name={item.name}
          category={item.category}
          description={item.description}
          basePrice={item.basePrice} />
        ))
      }

    </div>
  );
}

export default App
