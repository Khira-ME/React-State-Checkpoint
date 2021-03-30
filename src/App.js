import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
     Person :{
       FullName:"Khira MECHRI",
       Bio:"Je suis étudiante à Go My Code Tunisie ",
       Profession:"Talent acquisition",
       imgSrc:"/my picture.jpg"
     },
     show:true,
     count:0
    }
  }
  componentDidMount(){
    setInterval(()=>this.setState({count:this.state.count+1}),1000)
    
  }
  render() {
    return (
      <div >
           <button style={{marginTop:"60px",backgroundColor:"",fontSize:"medium",fontWeight:"normal",marginLeft:"43%"}} onClick={()=>this.setState({show:!this.state.show})} ><h5>Afficher Ou Masquer le profil</h5></button>
           <br/>
           <br/>
           
           <div style={{color:"#900C3F",fontWeight:"normal",textAlign:"center"}}>
           Vous êtes connecté depuis : <span style={{color:"##58184",fontWeight:"bolder"}} >{this.state.count} seconds</span>.</div>
           {this.state.show?
           <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderStyle:"solid",borderColor:"#581845 ",borderRadius:"17px",width:"60%",height:"520px",margin:"auto",backgroundColor:"Salmon",marginTop:"30px"}}>
            <h2 style={{color:"#581845"}} >Name:  {this.state.Person.FullName}</h2>
            <h4 style={{color:"#581845"}}>{this.state.Person.Bio}. </h4>
            <h2 style={{color:"#581845"}}>Profession:  {this.state.Person.Profession}</h2>
            <img src={this.state.Person.imgSrc} style={{width:"25%",height:"50%",borderRadius:"17px"}} alt="profile" />
        </div>
        :null
        }
        
        </div>
    )
  }
}

