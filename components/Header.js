import Link from 'next/link';

const Header = () => (
  
    <div>
    
    <div className="ui menu">
    <img className="logo"src='../static/logo.png'/>
 
  <a className="active item">Home</a>
  <a className="item">Become an Instructor</a>
  
  <div className="right menu">
    <div className="item">
      <div className="ui action left icon input">
        <i className="search icon"></i>
        <input type="text" placeholder="Search For Courses"/>
        <button className="ui button">Submit</button>
      </div>
    </div>
    <a className="item">Sign In</a>
  </div>
</div>
</div>
   
  )
  
export default Header