import React, {useState,Component} from 'react'
import './Viewbooks.css'
import {useNavigate } from "react"
import axios from "axios"
class Getbook extends Component{
    
    state={
        data:[]
    }
    componentDidMount()
    {
        axios.get('http://localhost:8181/api/showDetails').then(response=>{this.setState({data:response.data});
    })
    .catch(error=>{console.log(error);
    });
    }
        
    
    render(){
        
    
  return (
    <div>
     
       <div className="tc7">
           
                <div className="tC7">
                {
                    
                    this.state.data.map((value) => {
                        return(
                            <div className="t7" key={value.id}>
                                <a href={value.page}>
                                <img src={value.image} alt=""/>
                                </a>
                                
                                <h3 className="title7">{value.title}</h3>
                                <p>Book Id: {value.id}</p>
                                <p>Author: {value.author}</p>
                               
                                
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    </div>
  )
}
}

export default Getbook;