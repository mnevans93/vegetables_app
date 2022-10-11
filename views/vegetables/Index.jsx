const React = require('react')
class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>Vegetables Index Page</h1>
                <ul>
                    {this.props.vegetables.map((vegetable, i) => {
                        return (
                            <li>
                                The <a href={`/vegetables/${ vegetable.id }`}> { vegetable.name }</a> is { vegetable.color } <br />
                                { vegetable.readyToEat ? `It's ready to eat` : `It's not ready to eat`}
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href="/vegetables/new">Create a New Vegetable</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index