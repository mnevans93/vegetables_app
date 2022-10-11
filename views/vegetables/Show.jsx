const React = require('react')
class Show extends React.Component {
    render() {
        return (
            <div>
                <h1> Show Page </h1>
                The {vegetable.name} is {vegetable.color}.
                {fruit.readyToEat? `It's ready to eat.` : `It's not ready to eat.`}
            </div>
        )
    }
}

module.exports = Show;