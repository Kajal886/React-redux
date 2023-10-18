import './Webpage.css';
import Homepage from "./home";


const WebPage=()=> {
  return (
    <div >
  


<body>
  <div class="sidebar">
    <div class="logo-details">
      <i class='bx bxl-c-plus-plus'></i>
      <span class="logo_name">Dashboard</span>
    </div>
      <ul class="nav-links">
        <li>
          <a href="#" class="active">
            <i class='bx bx-grid-alt' ></i>
            <span class="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-box' ></i>
            <span class="links_name">Product</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-list-ul' ></i>
            <span class="links_name">Customers </span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-pie-chart-alt-2' ></i>
            <span class="links_name">Income</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-coin-stack' ></i>
            <span class="links_name">Promote</span>
          </a>
        </li>
       
        
       
       
        <li>
          <a href="#">
            <i class='bx bx-cog' ></i>
            <span class="links_name">Help</span>
          </a>
        </li>
        <li class="log_out">
          <a href="#">
            <i class='bx bx-log-out'></i>
            <span class="links_name">Log out</span>
          </a>
        </li>
      </ul>
  </div>
  <section class="" style={{paddingLeft:"20px"}}>
<div style={{display:"flex", margin:"26px"}}>
<div class="title">Hello Shahrukh,</div>
      <div class="search-box" style={{marginLeft:"700px"}}>
        <input type="text" placeholder="Search..."/>
        <i class='bx bx-search' ></i>
      </div>
      </div>
 

    <div class="home-content">
      <div class="overview-boxes">
        <div class="box">
          <div class="right-side">
            <div style={{display:"flex"}}>
              <div><img src='dollar.PNG' /></div>
              <div><p>Earning</p> <p>$198k</p><p>| 37% this month</p></div>
            </div>
          </div>
       
        </div>
        <div class="box">
          <div class="right-side">
          <div style={{display:"flex"}}>
              <div><img src='Orders.PNG' /></div>
              <div><p>Orders</p> <p>$2.4k</p><p>| 2% this month</p></div>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="right-side">
          <div style={{display:"flex"}}>
              <div><img src='balance.PNG' /></div>
              <div><p>Balance</p> <p>$2.4k</p><p>| 2% this month</p></div>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="right-side">
          <div style={{display:"flex"}}>
              <div><img src='total_sales.PNG' /></div>
              <div><p>Total Sales</p> <p>$89k</p><p>| 11% this week</p></div>
            </div>
          </div>
         
        </div>
      </div>

      <div class="sales-boxes">
        <div class="recent-sales box">
          <div ><h3 class="title" >Overview</h3>
          <select style={{border:"none", float:"right", marginTop:"-30px"}}><option>Quarterly</option></select></div>
          <p>Monthly Earning</p>
          <div class="sales-details">
         
         
          </div>
          
        </div>
        <div class="top-sales box">
          <div class="title">Customers</div>
          <ul class="top-sales-details">
            
        
			
		
           
           
          </ul>
        </div>
      </div>

      <div class="sales-boxes2">
        <div class="recent-sales2 box">
        <div style={{display:"flex", marginBottom:"20px"}}><h3 class="title">Product Sell </h3> 
        <div class="search-box" style={{marginLeft:"505px", border:"none"}}>
        <input type="text" placeholder="Search..."/>
        <i class='bx bx-search' ></i>
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


</body>







    </div>
  );
}

export default WebPage;
