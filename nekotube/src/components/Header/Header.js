import React from "react";

class Header extends React.Component {
    state = {keyword: ""};

    onInputChangeHandler = (event) => {
        this.setState({keyword: event.target.value});
    }

    render(){
        return(
            <div style={{textAlign: "center"}}>
                <div>
                    <h2>NekoTube</h2>
                </div>
                <div>
                    <input
                        onChange={this.onInputChangeHandler}
                        value={this.state.keyword}
                    />
                </div>
            </div>
        );
    }
}

export default Header;