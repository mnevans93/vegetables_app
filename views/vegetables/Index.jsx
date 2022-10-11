const React = require('react')
class Index extends React.Component {
    render() {
        const { vegetables } = this.props
        return (
            <div>
                <h1>Vegetables Index Page</h1>
                <ul>
                    {vegetables.map((vegetable, i) => {
                        return (
                            <li>
                                The{' '}
                                <a href={`/vegetables/${i}`}>
                                    {vegetable.name}
                                </a>{' '}
                                is {vegetable.color} <br />
                                {vegetable.readyToEat
                                    ? `It's ready to eat`
                                    : `It's not ready to eat`}
                                <br />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = Index