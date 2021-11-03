import React from 'react';
import '../styles/sass/components/collapse.scss';

class Collapse extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
    }
    render() {
        // if(Array.isArray(this.props.content)){
        //     console.log(this.props.content)
        //     const listEquipements = this.props.content.map((equipement, index)=> {
        //         <li key={index}>{equipement}</li>
        //     })
        // }
        return (
            <div className="collapse">
                <div className="collapse-head">
                    <p className="collapse-title">{this.props.title}</p>
                    <span className={this.state.active === false ? "collapse-arrow" : "collapse-arrow-active"}  onClick={()=> this.setState({ active: !this.state.active })}><svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.800025 13.9866L3.16003 16.3466L14 5.50662L24.84 16.3466Z" fill="white"/>
                        </svg>
                    </span>
                </div>
                <div className={this.state.active === false ? "collapse-content" : "collapse-content-active"}>
                    {Array.isArray(this.props.content) ? 
                    <ul>{this.props.content.map((equipement, index) => <li key={index}>{equipement}</li>)}</ul> : 
                    <p>{this.props.content}</p>}
                </div>
            </div>
         
          );
    }
  }
  
  export default Collapse;