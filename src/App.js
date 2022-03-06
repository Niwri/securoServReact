
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
                        <Route path="/securoServ/" element={<SummaryPage/>}/>
                        <Route path="/securoServ/posts" element={<PostPage/>}/>
                        <Route path="/securoServ/stories" element={<StoryPage/>}/>
                        <Route path="/securoServ/contact" element={<ContactPage/>}/>
                        <Route path="/securoServ/comments" element={<CommentPage/>}/>
                        <Route path="/securoServ/advertisers" element={<AdvertiserPage/>}/>
                        <Route path="/securoServ/devices" element={<DevicePage/>}/>
                      </Routes>
                </div>
              </div>
  );
}

export default App;