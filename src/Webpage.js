import './Webpage.css';


const WebPage=()=> {
  return (
    <div >
  


<div className='body'>
  <div className="sidebar">
    <div className="logo-details">
    <i class='bx bxl-c-plus-plus'></i>
    <img  src='Maindashboard.PNG' />
      <span className="logo_name">Dashboard</span>
    </div>
      <ul className="nav-links">
        <li>
          <a href="#" className="active">
          
            <span className="links_name"><img src='dasboard.PNG' />Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
          <img src='product.PNG' />
            <span className="links_name">Product</span>
          </a>
        </li>
        <li>
          <a href="#">
          <img src='customer.PNG' />
            <span className="links_name">Customers </span>
          </a>
        </li>
        <li>
          <a href="#">
          <img src='income.PNG' />
            <span className="links_name">Income</span>
          </a>
        </li>
        <li>
          <a href="#">
          <img src='promote.PNG' />
            <span className="links_name">Promote</span>
          </a>
        </li>
       
        
       
       
        <li>
          <a href="#">
          <img src='help.PNG' />
            <span className="links_name">Help</span>
          </a>
        </li>
        <li className="log_out">
          <a href="#">
          <img src='user.PNG' />
            <span className="links_name">Evano <p>Project Manager</p></span>
          </a>
        </li>
      </ul>
  </div>
  <section className="" style={{paddingLeft:"20px"}}>
<div style={{display:"flex", margin:"26px"}}>
<div className="title">Hello Shahrukh,</div>
      <div className="search-box" style={{marginLeft:"700px"}}>
        <input type="text" placeholder="Search..."/>
        <i className='bx bx-search' ></i>
      </div>
      </div>
 

    <div className="home-content">
      <div className="overview-boxes">
        <div className="box">
          <div className="right-side">
            <div style={{display:"flex"}}>
              <div><img src="\public\dollar.PNG" /></div>
              <div><p style={{fontSize:"13px", color:"lightgrey", fontWeight:"500"}}>Earning</p> <span className='dollar'>$198k</span>
              <p style={{fontSize:"12px"}}><span style={{color:"green"}}>| 37%</span> this month</p></div>
            </div>
          </div>
       
        </div>
        <div className="box">
          <div className="right-side">
          
            <div style={{display:"flex"}}>
              <div><img src='Orders.PNG'/></div>
              <div><p style={{fontSize:"13px", color:"lightgrey", fontWeight:"500"}}>Orders</p> <span className='dollar'>$2.4k</span>
              <p style={{fontSize:"12px"}}><span style={{color:"palevioletred"}}>|2%</span> this month</p></div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="right-side">
         
            <div style={{display:"flex"}}>
              <div><img src='Orders.PNG'/></div>
              <div><p style={{fontSize:"13px", color:"lightgrey", fontWeight:"500"}}>Balance</p> <span className='dollar'>$2.4k</span>
              <p style={{fontSize:"12px"}}><span style={{color:"palevioletred"}}>|2%</span> this month</p></div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="right-side">
         
            <div style={{display:"flex"}}>
              <div><img src="total_sales.PNG" /></div>
              <div><p style={{fontSize:"1px", color:"lightgrey", fontWeight:"500"}}>Total Sales</p> <span className='dollar'>$89k</span>
              <p style={{fontSize:"12px"}}><span style={{color:"green"}}>| 11%</span> this week</p></div>
            </div>
          </div>
         
        </div>
      </div>

      <div className="sales-boxes">
        <div className="recent-sales box">
          <div ><h3 className="title" >Overview</h3>
          <select style={{border:"none", float:"right", marginTop:"-30px"}}><option>Quarterly</option></select></div>
          <p>Monthly Earning</p>
          <div className="sales-details">
         
         
          </div>
          
        </div>
        <div className="top-sales box">
          <div className="title">Customers</div>
          <ul className="top-sales-details">
            
        
			
		
           
           
          </ul>
        </div>
      </div>

      <div className="sales-boxes2">
        <div className="recent-sales2 box">
        <div style={{display:"flex", marginBottom:"20px"}}><h3 className="title">Product Sell </h3> 
        <div className="search-box" style={{marginLeft:"505px", border:"none"}}>
        <input type="text" placeholder="Search..."/>
        <i className='bx bx-search' ></i>
      </div>
        <select style={{border:"none", }}><option>Last 30 days</option></select></div>
        {/* <div style={{display:"flex", marginBottom:"20px"}}>
        <p>Product Name</p> <p>Stock</p>
        <p>Price</p><p>Total Sales</p></div> */}
        {/* <table>
        <tr>
    <td>  <p>Product Name</p></td>
    <td> <p>Stock</p></td>
    <td><p>Price</p></td>
    <td><p>Total Sales</p></td>
  </tr>
        </table> */}
    
        <table>
        <tr>
    <td>  <p>Product Name</p></td>
    <td> <p>Stock</p></td>
    <td><p>Price</p></td>
    <td><p>Total Sales</p></td>
  </tr>
  
  <tr>
    <td><div style={{display:"flex"}}><div><img src="img1.PNG" /></div><div><h1>Abstract 3D</h1><p>
    lorem ipsum dolor sit amet consectetuer adipiscing elit</p></div></div> </td>
    <td>32 in stock</td>
    <td>$45.99</td>
    <td>20</td>
  </tr>
  <tr>
    <td><div style={{display:"flex"}}><div><img src="img2.PNG" /></div><div><h1>Surphens illustration</h1><p>
    lorem ipsum dolor sit amet consectetuer adipiscing elit</p></div></div> </td>
    <td>32 in stock</td>
    <td>$45.99</td>
    <td>20</td>
  </tr>

   
</table>
        </div>
        
      </div>
    </div>
   
			
  </section>


</div>







    </div>
  );
}

export default WebPage;
