import React from 'react';
import '../styles/sass/components/card.scss';

class Tags extends React.Component {
    render() {
        const listTag = this.props.tags.map((tag, index) =>
            <span key={index} className="ficheLogement-infos_tag">{tag}</span>
        );
        return (
            <div className="ficheLogement-infos_tags">
                {listTag}
            </div>
         
          );
    }
  }
  
  export default Tags;