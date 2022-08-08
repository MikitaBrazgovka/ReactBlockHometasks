import React from "react";

import { RenderHeader } from "./components/header(37-3)/headerRender";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { RenderRegistrationPage } from "./components/authorizationPage(38-39)/input";
import { Posts } from "./components/cards(38)/cardsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RenderHeader />

        <div
          className="contentWrapper"
          style={{
            backgroundColor: "#000000",
            width: "100%",
            height: "100%",
            minHeight: "1200px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/cards" replace />} />
            <Route path="/cards" element={<Posts />} />

            <Route path="/login" element={<RenderRegistrationPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

// export const PostsContext = ()=>{
//   const [posts, setData] = useState()

//   useEffect( .. get data)

//   return <SomeContext.Provider value ={posts}>
//     {children}
//     </SomeContext.Provider>
// }

// export const Post = ()=>{
//   const params = useParams()
//   const posts = useContext(SomeContext);

//   const post = posts.find(({ id })=> params.id === id)
//   return ...
// }
