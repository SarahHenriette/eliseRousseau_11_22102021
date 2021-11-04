import React from 'react';
import Start from './Start'
import '../styles/sass/components/card.scss';


class Starts extends React.Component {
    render() {
        const nbrStarts = [1,2,3,4,5]
        const rating = this.props.rating;
        const starts = nbrStarts.map(start => {
            return <Start key={start} class={start < rating || start === rating ? "ficheLogement-infos_startActive" : "ficheLogement-infos_start"}/>
        })
        return (
            <div className="ficheLogement-infos_starts">
                {starts}
            </div>
        );
    }
  }
  
  export default Starts;