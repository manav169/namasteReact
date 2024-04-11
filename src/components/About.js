import UserClass from "./UserClass";
import User from "./User";
const About = () => {
    return (
      <div className="user-card">
        <h1>This is my About Us Page</h1>
        <User name={"Akshay func. compo"} location={"Dehradun" } />
        <UserClass name={"Akshay ()"} location={"Dehradun"} />
      </div>
    );
}

export default About;