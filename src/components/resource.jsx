import React from 'react';




export default function Resource(){
     
  return (
        <div className="container">
        <div className="flex justify-between m-3">
            <select className="select border-2 rounded-lg">
                <option>Category: ALL</option>
            </select>
            <select className=" relative sort border-2 rounded-lg">
                <option>Sort by: Latest</option>
            </select>
        </div>
        
          <div className="menu">
              <div className='flex justify-between'>
            <div className="box p-3 pb-px m-3">
                <span className="frontend"><a href=""><b>FRONTEND</b></a></span>
            <h3 className="title">TITLE</h3>
            <br />
               <div className="border-1 rounded-xl bg-green-100 p-1 w-48"><p className="author">Name</p></div>
                  </div>
            
            <div className="box p-3  m-3">
                <span className="backend"><a href=""><b>BACKEND</b></a></span>
            <h3 className="title">TITLE</h3>
            <br />
               <div className="border-1 rounded-xl bg-green-100 p-1 w-48"><p className="author">Name</p></div> 
            </div>
            <div className="box p-3  m-3">
                <span className="blockchain"><a href=""><b>BLOCKCHAIN</b></a></span>
            <h3 className="title">TITLE</h3>
            <br />
                <div className="border-1 rounded-xl bg-green-100 p-1 w-48"><p className="author">Name</p></div> 
              </div>
              </div>
        <div className='flex justify-between'>
         <div className="box p-3  m-3">
                <span className="blockchain"><a href=""><b>BLOCKCHAIN</b></a></span>
            <h3 className="title">TITLE</h3>
            <br />
           <div className="border-1 rounded-xl bg-green-100 p-1 w-48"><p className="author">Name</p></div> 
          </div>
           <div className="p-3 box  m-3">
                <span className="blockchain"><a href=""><b>BLOCKCHAIN</b></a></span>
            <h3 className="title">TITLE</h3>
            <br />
           <div className="border-1 rounded-xl bg-green-100 p-1 w-48"><p className="author">Name</p></div> 
        </div>
         <div className="p-3 box m-3">
                <span className="blockchain"><a href=""><b>BLOCKCHAIN</b></a></span>
            <h3 className="title">TITLE</h3>
            <br />
          <div className="border-1 rounded-xl bg-green-100 p-1 w-48"><p className="author">Name</p></div> 
                  </div>
              </div>
               <div className=' p-3 flex justify-between'>
         <div className="box p-3">
                <span className="blockchain"><a href=""><b>BLOCKCHAIN</b></a></span>
            <h3 className="title">TITLE</h3>
            <br />
          <div className="border-1 rounded-xl bg-green-100 p-1 w-48"><p className="author">Name</p></div> 
        </div>
         <div className="box p-3">
                <span className="blockchain"><a href=""><b>BLOCKCHAIN</b></a></span>
            <h3 className="title">TITLE</h3>
            <br />
           <div className="border-1 rounded-xl bg-green-100 p-1 w-48"><p className="author">Name</p></div> 
        </div>
         <div className="box p-3">
            <span className="blockchain"><a href="">
              <span className="blockchain"><a href=""><b>BLOCKCHAIN</b></a></span>
                  </a></span>
            <h3 className="title">TITLE</h3>
            <br />
           <div className="border-1 rounded-xl bg-green-100 p-1 w-48"><p className="author">Name</p></div> 
        </div>
        </div>
          
      </div>
      <div className="flex justify-between m-3">
            <span className="pg border-2 rounded-lg m-2 p-1">Page:0</span>
            <div className="nav">
                <button className="back border-2 rounded-lg relative mr-3 p-1 "><a href="">Back</a></button>
                <button className="next border-2 rounded-lg relative p-1"><a href="">Next</a></button>
        </div>
        </div>
    </div>
  )
};