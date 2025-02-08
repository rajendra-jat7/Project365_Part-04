import Story from "./components/Story";
import "./App.css";

const storiesData = [
  { id: 1, image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/d3380a54-7461-4f93-848d-b88f584b0d97/2405807528/ms-dhoni-new-hd-wallpapers-screenshot.png" },
  { id: 2, image: "https://w0.peakpx.com/wallpaper/479/722/HD-wallpaper-ms-dhoni-india-world-cup-cricket.jpg" },
  { id: 3, image: "https://i.pinimg.com/736x/bd/2f/29/bd2f290176e4e50540600ce92a847a3b.jpg" },
  { id: 4, image: "https://w0.peakpx.com/wallpaper/479/540/HD-wallpaper-mahendra-singh-dhoni-mahi-msd.jpg" },
];

function App() {
  return (
    <div className="app-container">
      <h1>📸 Instagram Stories</h1>
      <Story stories={storiesData} />
    </div>
  );
}

export default App;
