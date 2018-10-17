const Pet = (props) => {
   return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.breed)
    ]);
}


class App extends React.Component {
    handleTitleClick(){
        alert("You've clicked the title");
    }
    render() {
        return React.createElement('div', {}, [
            React.createElement('h1', { onClick : this.handleTitleClick }, 'Adopt Me!'),
            React.createElement(Pet, {
                name : "Luna",
                animal : "Dog",
                breed : "havanese"
            }),
            React.createElement(Pet, {
                name : "Kadali",
                animal : "Tiger",
                breed : "Cheetah"
            }),
            React.createElement(Pet, {
                name : "Meow",
                animal : "Cat",
                breed : "MeowMeow"
            })
        ])
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('app'))