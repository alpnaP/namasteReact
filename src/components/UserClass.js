import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div className="user">
        <h2> name:{name}</h2>
        <h2> count:{count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Counter Inc
        </button>
        <h2>Uttar Pradesh</h2>
        <h4>Contact: alpna@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
