const React = require('react')
class Show extends React.Component {
    render() {
        const { name, color, readyToEat } = this.props.vegetable
        return (
            <div>
                <h1>  Show Page </h1>
                The { name } is { color }. <br />
                { readyToEat ? `It's ready to eat.` : `It's not ready to eat.` } <br /><br />
                <nav>
                    <a href="/vegetables">Return to Index</a>
                </nav>
            </div>
        )
    }
}

module.exports = Show;