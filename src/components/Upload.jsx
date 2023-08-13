import React from "react";



const Upload = () => {
    return (
        <form action="">
            <input type="file" id="upload" style={{display:"none"}}/>
            <label htmlFor="upload" className="btn btn-dark btn-circle btn-x1 d-flex justify-content-center">+</label>
        </form>
    )
} 


export default Upload; 