import Icon from '@ant-design/icons';
import React from "react";
//import likeSvg from '../../images/like.svg'

const dislikeSvg = () => (
  <svg t="1612680453752" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2876" width="28" height="28">
  <defs><style type="text/css"></style></defs>
  <path d="M222.5 580.4h-74.1c-46.4 0-84-37.6-84-84V210c0-46.4 37.6-84 84-84h74.1v454.4zM896.6 580.4H691c-23.7 0-38.1 26.3-25.1 46.1 34.7 52.9 65.4 113.9 71.7 181.1 10.2 109.4-136.2 148.2-190.3 33.2-9.9-21.1-23.4-57.9-37-97.4-32-93.2-117.3-156.9-214.8-162.5V126H736c55.7 0 105.2 35.4 123.1 88.1l96.8 283.4c13.9 40.6-16.3 82.9-59.3 82.9z" p-id="2877"></path>
  </svg>
);

const DislikeIcon = props => <Icon component={dislikeSvg} {...props} />;

class DislikeSvg extends React.Component {

  render() {
    return (
      <>
        <DislikeIcon />
      </>
    );
  }  
        
}

export default DislikeSvg;

