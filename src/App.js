
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  PostPage,
  StoryPage,
  ContactPage,
  CommentPage,
  AdvertiserPage,
  DevicePage,
  SummaryPage,
} from "./components/pages/imports";

import MenuBar from './components/MenuBar';

function App() {

  return (
      <div>
        <div className="menuBarContainerSide">
          <MenuBar/>
        </div>
        <div className="mainPage">
          <BrowserRouter>
            <Routes>
              <Route path="/instagramWhistle/" element={<SummaryPage/>}/>
              <Route path="/instagramWhistle/posts" element={<PostPage/>}/>
              <Route path="/instagramWhistle/stories" element={<StoryPage/>}/>
              <Route path="/instagramWhistle/contact" element={<ContactPage/>}/>
              <Route path="/instagramWhistle/comments" element={<CommentPage/>}/>
              <Route path="/instagramWhistle/advertisers" element={<AdvertiserPage/>}/>
              <Route path="/instagramWhistle/devices" element={<DevicePage/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
  );
}

export default App;