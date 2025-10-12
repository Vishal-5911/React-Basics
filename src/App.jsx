import { Navigate } from "react-router";
const categories = [
  { label: "Mushroom", imagePath: "/assets/images/categories/Icons.png" },
  { label: "Mushroom", imagePath: "/assets/images/categories/Icons.png" },
  { label: "Mushroom", imagePath: "/assets/images/categories/Icons.png" },
  { label: "Mushroom", imagePath: "/assets/images/categories/Icons.png" },
  { label: "Mushroom", imagePath: "/assets/images/categories/Icons.png" },
  { label: "Mushroom", imagePath: "/assets/images/categories/Icons.png" },
  { label: "Mushroom", imagePath: "/assets/images/categories/Icons.png" },
  { label: "Mushroom", imagePath: "/assets/images/categories/Icons.png" },
];
const App = () => {
  return (
    <div style={{ padding: 38 }}>
      <div className="progress-bar" />
      <div className="content-body">
        <div className="left-section">
          <p className="title">What kind of meals do you prefer?</p>
          <div className="categories">
            {categories.map((e) => (
              <div className="category">
                <img src={e.imagePath} style={{ width: 44, height: 44 }} />
                <span>{e.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="right-section">
          <img
            src="/assets/images/categories/banner_image.png"
            style={{ width: "60%" }}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
