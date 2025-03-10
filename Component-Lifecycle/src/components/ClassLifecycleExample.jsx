import { Component } from "react";

class ClassLifecycleExample extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log("🟢 Constructor - Component is initializing");
    }

    componentDidMount() {
        console.log("✅ Component Mounted - API Calls or Subscriptions here");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("🔄 Component Updated - Count:", this.state.count);
    }

    componentWillUnmount() {
        console.log("❌ Component Unmounted - Cleanup here");
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increment
                </button>
            </div>
        )
    }
}

export default ClassLifecycleExample;