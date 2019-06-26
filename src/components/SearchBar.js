import React from 'react';

class SearchBar extends React.Component{
    state = { term: '' };
    /*
    // Multiple ways to solve unresolved error
    //1st Way
    onFormSubmit = (event) =>  {
        event.preventDefault();
        console.log(this.state.term);
    }*/

    onFormSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    
 //   <form className="ui form" onSubmit={event => this.onFormSubmit(event)  /*2nd Way*/ }>

    render() {
        return (
        <div className="ui segment">
            <form className="ui form" onSubmit={event => this.onFormSubmit(event)  /*2nd Way*/ }>
                <div className="field">
                    <label>Image Search</label>
                    <input 
                    type="text" 
                    value={this.state.term} 
                    onChange={e => this.setState({ term: e.target.value })}
                    >
                    </input>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;