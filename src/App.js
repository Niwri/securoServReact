
import './App.css';
import { Routes, Route, Switch, Router } from "react-router-dom";

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
                        <Route exact path="/" element={<SummaryPage/>}/>
                        <Route exact path="/posts" element={<PostPage/>}/>
                        <Route exact path="/stories" element={<StoryPage/>}/>
                        <Route exact path="/contact" element={<ContactPage/>}/>
                        <Route exact path="/comments" element={<CommentPage/>}/>
                        <Route exact path="/advertisers" element={<AdvertiserPage/>}/>
                        <Route exact path="/devices" element={<DevicePage/>}/>
                      </Routes>
                </div>
              </div>
  );
}

export default App;