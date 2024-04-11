import React from "react";


class UserClass extends React.Component {

 avatar_URL = "https://avatars.githubusercontent.com/u/12824231?v=4";

    async componentDidMount() {
          const data = await fetch("https://api.github.com/users/akshaymarch7");
      const json = await data.json();

          this.setState({
              userInfo: json,
          });
          console.log(json);
}
        
  constructor(props) {
      super(props);
      
      this.state = {
          userInfo: {
              name: "Dummy",
              location: "Default",
          },
      };
    };
    render() {
       const { name, location,avatar_URL } = this.state.userInfo;
       const { count, } = this.state;
    return (
        <div className="user-card">
            <img src="{avatar_URL}"/>
            <h2>Name : { name}</h2>
            <h2>Location : { location}</h2>
            <h2>Contact : @akshaymarch7</h2>
      </div>
    );
  }
};

export default UserClass;