import React from 'react';
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component{

    renderSubmit(language){
        return language ==='english' ? 'Submit' : 'Voorleggen';
    }
   
    render() {
   return (
             <button className="ui buton primary">
                 <LanguageContext.Consumer>
                     {({language})=>this.renderSubmit(language) }
                 </LanguageContext.Consumer>
              </button>
        )
    }
}

export default Button