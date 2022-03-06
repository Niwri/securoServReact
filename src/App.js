
import './App.css';
import { Routes, Route } from "react-router-dom";

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
                      <Routes>
                        <Route path="/" element={<SummaryPage/>}/>
                        <Route path="/posts" element={<PostPage/>}/>
                        <Route path="/stories" element={<StoryPage/>}/>
                        <Route path="/contact" element={<ContactPage/>}/>
                        <Route path="/comments" element={<CommentPage/>}/>
                        <Route path="/advertisers" element={<AdvertiserPage/>}/>
                        <Route path="/devices" element={<DevicePage/>}/>
                      </Routes>
                </div>
              </div>
  );
}

export default App;