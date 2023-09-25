import { React, useState } from 'react'
import './App.css'
import Home from './Home'
import Geomap from './Geomap';
import Articles from './Articles';
import Contact from './Contact';
import Report from './Report';

import {Route, Link, Routes} from 'react-router-dom';

export default function App() {
  	return (
    	<>
			<nav>
				<ul>
					<li>
						<Link to="/Home">Home</Link>
					</li>
					<li>
						<Link to="/Geomap">Geomap</Link>
					</li>	
          <li>
						<Link to="/Articles">Articles</Link>
					</li>
          <li>
						<Link to="/Report">Report</Link>
					</li>
          <li>
						<Link to="/Contact">Contacts</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="/Home" element={<Home />} />
				<Route path="/Geomap" element={<Geomap />} />
				<Route path="/Articles" element={<Articles />} />
				<Route path="/Report" element={<Report />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
    	</>
  	);
}

// Routes documentation (https://www.datainfinities.com/73/cannot-destructure-property-basename-usecontext)
