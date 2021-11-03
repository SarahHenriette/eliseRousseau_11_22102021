import React from 'react';
import '../styles/sass/layouts/carrousel.scss';

class Carrousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: 0,
            length: this.props.slides.length
        }
    }
    render(){
        console.log(this.props.slides)
        const listSlides = this.props.slides.map((slide, index) => {
           return (
               <div className={index === this.state.current ? 'slide active' : 'slide'} key={index}>
                   {index === this.state.current && (
                        <img src={slide} className="carrousel-slide" key={index} alt=""/>
                   )}
               </div>
           )
        })
        return(
            <div className="carrousel">
                {this.state.length > 1 ? 
                <span className="carrousel-leftArrow"  onClick={()=> this.setState({ current: this.state.current === 0 ? this.state.length - 1 : this.state.current - 1})}><svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                    </svg>
                </span>   :
                "" 
                }
               
                {this.state.length > 1 ? 
                <span className="carrousel-rightArrow"  onClick={()=> this.setState({ current: this.state.current === this.state.length - 1 ? 0 : this.state.current + 1})}><svg viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                    </svg>
                </span>  :
                ""  
                }

                <p className="carrousel-notation">{this.state.current + 1}/{this.state.length}</p>
                {listSlides}
            </div>
        )
    }
}

export default Carrousel;