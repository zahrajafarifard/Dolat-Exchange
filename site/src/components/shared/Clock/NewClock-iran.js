import * as React from "react";
import "./NewClock.scss";

export default class Clock extends React.Component {
  clockInterval = "";
  constructor(props) {
    super(props);
    this.handleDate = this.handleDate.bind(this);
    this.state = {
      hours: "",
      minutes: "",
      seconds: "",
    };
  }

  componentDidMount() {
    this.clockInterval = setInterval(this.handleDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    const secondsStyle = {
      transform: `rotate(${seconds * 6}deg)`,
    };
    const minutesStyle = {
      transform: `rotate(${minutes * 6}deg)`,
    };
    const hoursStyle = {
      transform: `rotate(${hours * 30}deg)`,
    };
    const { title } = this.props;
    return (
      <div className="clock font-IRANSansWeb   text-black">
        <div className="analog-clock ">
          <div className={"dial seconds"} style={secondsStyle} />
          <div className={"dial minutes"} style={minutesStyle} />
          <div className={"dial hours"} style={hoursStyle} />
        </div>
        <div
          className="flex flex-row-reverse px-2
        screen1200:px-1
        screen1000:px-0 
        "
        >
          <div
            className="CountryTitle  px-5 my-auto   
           screen1600:px-2
           screen1200:px-1
       
           screen1250:text-xs
           screen1000:px-0
           
           screen550:px-1
           "
          >
            {title}
          </div>
          <div
            className={` digital-clock  text-xl
             screen1600:text-base
            screen1250:text-xs
            screen1000:px-1
          
            `}
          >
            {hours}:{minutes}
          </div>
        </div>
      </div>
    );
  }

  handleDate() {
    const { datediff } = this.props;
    const { minutesdiff } = this.props;
    const date = new Date();
    date.setHours(date.getHours() + datediff);
    date.setMinutes(date.getMinutes() + minutesdiff);
    let hours = this.formatTime(date.getHours());
    let minutes = this.formatTime(date.getMinutes());
    let seconds = this.formatTime(date.getSeconds());
    this.setState({ hours, minutes, seconds });
  }

  formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}
