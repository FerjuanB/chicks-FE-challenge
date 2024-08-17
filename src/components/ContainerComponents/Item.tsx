export const Item = () => {
  return (
    <div className="item">
       <div className="box">
        <div className="box-1">
          <p className="sale"> <span>&deg;</span>  on sale</p>
            <p className="stock">In stock</p>
        </div>
        
            <input type="number" value={1} />
        </div>
        <div className="box">
            <img src="/diablo-III.png" alt="" width="50"/>
        </div>
        <div className="box">
            <div>

            <p>Diablo II</p>
            <p>$450.00 <span className="price"> $522.50</span></p> 
            </div>

        </div>
        <div className="box">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="box">
            <button className="button-item set-1">details</button>
            <button className="button-item set-2">add 
                    <button className="button-cart">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="15"  height="15"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" /></svg>
                    </button>
                </button>
        </div>
    </div>
  )
}