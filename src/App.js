import "../src/sassfiles/mainstyle.css";

import { MainHeader } from "../src/layoutcomponents/MainHeader";
import ShoppingView from "../src/layoutcomponents/ShoppingView";
import MainBlogPosts from "../src/layoutcomponents/MainBlogPosts";
import { MainFooter } from "../src/layoutcomponents/MainFooter";



function App() {
  return (
    <div className="App">
      <body>
        <MainHeader></MainHeader>
        <ShoppingView></ShoppingView>
        <MainBlogPosts></MainBlogPosts>
        <MainFooter></MainFooter>
      </body>
    </div>
  );
}

export default App;
