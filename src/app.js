class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Go hunting', 'Walk the dog', 'Wash the dishes', 'Find the chosen one', 'Kill Bill', 'Go fishing'];
        
        return(
            <div>
                <Header 
                    title={title}
                    subtitle={subtitle} />
                <Action options={options} />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}r</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    handlePick(){
        let options = this.props.options;
        let random = Math.floor(Math.random(options.length));
        alert(random);
    }
    
    render(){
        return(
            <div>
                <button
                    onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    handleRemoveAll(){
        let options = this.props.options;
        options = [];
    }
    
    render(){
        return(
            <div>
                <h3>Options: {this.props.options.length}</h3>
                <ol>
                    {
                        this.props.options.map((option) => <Option key={option} optionText={option}/>)
                    }
                </ol>
                <button className="btn btn-danger"
                        onClick={this.handleRemoveAll}>Remove All</button>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <li>{this.props.optionText}</li>
        );
    }
}

class AddOption extends React.Component{
    render(){
        return(
            <h1>Add option here!</h1>
        );
    }
}

const appRoot = document.getElementById('react-container');
ReactDOM.render(<IndecisionApp />, appRoot);