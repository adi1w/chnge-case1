import React,{Component} from 'react'

class ClassCompo extends Component{
    
    render(){
        return(
            <div className='two'>
            <h1 className=''>This is created using Class Component</h1>
            <p  className=''>This is done by External Css</p>
            <p style={{color:'blue',textAlign:'center'}} >This is done by Inline Css</p>
            </div>
        )
    }
}

export default ClassCompo