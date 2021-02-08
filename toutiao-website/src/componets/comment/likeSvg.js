import Icon from '@ant-design/icons';
import React from "react";
//import likeSvg from '../../images/like.svg'

const likeSvg = () => (
  <svg t="1612680295923" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2185" width="25" height="25">
  <defs><style type="text/css"></style></defs>
  <path d="M1024 470.784a106.667 106.667 0 0 0-106.667-106.667H648.064a10.667 10.667 0 0 1-10.112-13.994 370.517 370.517 0 0 0 22.187-188.032C635.05 72.704 581.888 46.89 540.288 52.65a85.333 85.333 0 0 0-70.955 87.466c0 117.163-90.837 245.163-172.117 301.27A21.333 21.333 0 0 0 288 458.965v431.616a21.333 21.333 0 0 0 17.28 20.95 2320.077 2320.077 0 0 1 42.112 8.533 738.517 738.517 0 0 0 175.275 20.096H800c83.499 0 96-46.933 96-74.667a95.573 95.573 0 0 0-9.899-42.41 95.915 95.915 0 0 0 42.667-128 96.085 96.085 0 0 0 52.565-85.632 94.976 94.976 0 0 0-11.648-45.739A106.667 106.667 0 0 0 1024 470.784z m-800-10.667a42.667 42.667 0 0 0-42.667-42.666H42.667A42.667 42.667 0 0 0 0 460.117v469.334a42.667 42.667 0 0 0 42.667 42.666h138.666A42.667 42.667 0 0 0 224 929.451z m-64 394.667a32 32 0 1 1-32-32 32 32 0 0 1 32 32z" p-id="2186"></path>
  </svg>
);

const LikeIcon = props => <Icon component={likeSvg} {...props} />;

function LikeSvg(){
  return (
    <>
        <LikeIcon />
    </>
  );
}

/*class LikeSvg extends React.Component {
  render() {
    return (
      <>
          <LikeIcon />
      </>
    );
  }  
        
}*/

export default LikeSvg;

