import React from "react";

const label = "MainBlogPost";

const ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


class MainBlogPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section id={label + "sec"}>
        <div  className={label + "divClass"}>
          <h1>Blog Title</h1>
          <h2>Blog Details</h2>
          <p>{ipsum}</p>
          <div id={label + "div0"} className={label+"divImage"}></div>
        </div>
        <div className={label + "divClass"}>
        <div className={label+"divImage"}></div>
          <h1>Blog Title</h1>
          <h2>Blog Details</h2>
          <p>{ipsum}</p>
          <div id={label + "div1"} className={label+"divImage"}></div>
        </div>
        <div className={label + "divClass"}>
        <div className={label+"divImage"}></div>
          <h1>Blog Title</h1>
          <h2>Blog Details</h2>
          <p>{ipsum}</p>
          <div id={label + "div2"} className={label+"divImage"}></div>
        </div>
        <div className={label + "divClass"}>
        <div className={label+"divImage"}></div>
          <h1>Blog Title</h1>
          <h2>Blog Details</h2>
          <p>{ipsum}</p>
          <div id={label + "div3"} className={label+"divImage"}></div>
        </div>
      </section>
    );
  }
}

export default MainBlogPosts;
