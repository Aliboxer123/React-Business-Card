import React from 'react'
import About from './components/about.js'
import Footer from './components/footer.js'
import Info from './components/info.js'
import Interests from './components/interests.js'

export default function App(){
return(    
<div className="app-container">
<Info/>
<About/>    
<Interests/>    
<Footer/>
</div>)    
}