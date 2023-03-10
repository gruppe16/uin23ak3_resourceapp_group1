import { Link } from "react-router-dom";
// function TabMenu() {
//     return (
//       <nav className="tab-menu">
//         <button className="tabslink" id="html-button">HTML</button>
//         <button className="tabslink" id="css-button">CSS</button>
//         <button className="tabslink" id="javascript-button">JavaScript</button>
//         <button className="tabslink" id="react-button">React</button>
//         <button className="tabslink" id="sanity-button">Sanity and headless CMS</button>
//       </nav>
//     );
//   }

export default function TabMenu() {
    return (
      <nav className="tab-menu">
        <Link to="/category/HTML" className="tabslink" id="html">
          HTML
        </Link>
        <Link to="/category/CSS" className="tabslink" id="css">
          CSS
        </Link>
        <Link to="/category/JavaScript" className="tabslink" id="javascript">
          JavaScript
        </Link>
        <Link to="/category/React" className="tabslink" id="react">
          React
        </Link>
        <Link to="/category/Sanity and headless CMS" className="tabslink" id="sanity-and-headless-cms">
          Sanity and headless CMS
        </Link>
      </nav>
    );
  }