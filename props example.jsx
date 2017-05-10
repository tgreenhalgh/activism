class ClickCounterButton extends React.Component {
  render() {
    return <button onClick={this.props.handler}>
      Don't click me {this.props.counter} times!
    </button>
  }
}

class Content extends React.Component {
  constructor(props){
    super(props)
    this.state = {counter: 0}
    this.click = this.click.bind(this)
  }
  click(e){
    this.setState({counter: ++this.state.counter})
  }
  render() {
    return (
      <div>
        {this.props.prop1}
        <ClickCounterButton counter={this.state.counter} handler={this.click}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Content prop1="this is a prop"/>,
  document.getElementById('content')
)
