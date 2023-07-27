import React from 'react'
import './Dashboard.css';
import {Link} from 'react-router-dom';

function dashboard() {
  return (
    <div>
        <header>
    <div className="kk"></div>
            <div class="logosec">
                <div class="logo">Hamlet</div>
      
            </div>
            <div class="message">
                <div class="circle"></div>
                <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
                    class="icn"
                    alt=""></img>
            </div>
        </header>
        <div class="main-container">
            <div class="navcontainer">
                <nav class="navig">
                    <div class="nav-upper-options">
                        <div class="nav-option option1">
                            
                            <h3> Dashboard</h3>
                        </div>

                        <div class="nav-option option5">
                            
                            <h3>Library</h3>
                        </div>
    
    
                        <div class="option2 nav-option">
                            
                            <h3>Downloads</h3>
                        </div>
                        <div class="nav-option option4">
                            
                            <h3> Status</h3>
                        </div>
    
                        
    
                        <div class="nav-option option6">
                            
                            <h3>Favorites</h3>
                        </div>
    
                        <Link to="/"> <div class="nav-option logout">
                            
                            <h3>Logout</h3>
                        </div></Link>
    
                    </div>
                </nav>
            </div>
            <div class="main">
    
                <div class="searchbar2">
                    <input type="text"
                        name=""
                        id=""
                        placeholder="Search"></input>
                    <div class="searchbtn">
                    <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                            class="icn srchicn"
                            alt="search-button"></img>
                    </div>
                </div>

                
    
                    <div class="report-body">
                    <div class="box-container">
                    <div class="box box1">
                        <div class="text">
                        <h6 class="topic-heading">5M</h6>
                            <h2 class="topic">Registerd users</h2>
                        </div>
                    </div>
    
                    <div class="box box2">
                        <div class="text">
                       <br></br>
                        <h2 class="topic-heading">Above 1000 </h2>
                            <h2 class="topic">Current Readers</h2>
                        </div>
                    </div>
    
                    <div class="box box3">
                        <div class="text">
                        <br></br>
                   <h2 class="topic-heading">2.42+</h2>
                            <h2 class="topic">Popular Author</h2>
                        </div>
                    </div>
                    <div class="box box4">
                        <div class="text">
                        <br></br>
                        <h2 class="topic-heading">Highly</h2>
                            <h2 class="topic">Trusted Members</h2>
                        </div>
                        </div>
                        <div class="report-header">
                        
                     <center><h2>We are one of the Best EReader App</h2></center>
                    </div>
                        
                    
                </div>
                
    
                        </div>
                    </div>
                </div>
            </div>
        
)
}

export default dashboard