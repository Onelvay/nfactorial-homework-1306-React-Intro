import im1 from "./img/1.jpg";
import im2 from "./img/2.jpeg";
import im3 from "./img/3.jpeg";
import im4 from "./img/4.jpeg";
import im5 from "./img/5.jpeg";
import "./App.css";

function App() {
	return (
		<div className="pict">
        <div className="pictW">
          <img src={im3} />
        
          <h1 className="fontt">hey</h1>
        </div>		
        <div className="pictW">
          <img src={im1} />	
          <h1 className="fontt">let's</h1>
        </div>	
        <div className="pictW">
        <h1 className="fontt">give</h1>
          <img src={im5} />	
        </div>	
        <div className="pictW">
        <h1 className="fontt">all</h1>
          <img src={im2} />	
        </div>	
        <div className="pictW">
        <h1 className="fontt">you can</h1>
          <img src={im4} />	
        </div>		
		</div>
	);
}

export default App;