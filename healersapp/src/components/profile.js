import React from 'react'
// import './App.css';

const Profile = () =>{
    return(
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                     src="https://lh3.googleusercontent.com/proxy/lerz6YHZ5j9e6kjQ41Wktz9qHC77Yu0lFWJGkvwJB6aCDU5IZb4Rs8eKwryQTLYr7_0FcRMjithLHNG7EKtOEknXByX_MlAcqIRysCGbeMsjLGeAMKs"
                    />
                </div>
                <div>
                <h4>RBK cohort8</h4>
                <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                    <h6>40 posts</h6>
                    <h6>40 followers</h6>
                    <h6>40 following</h6>
                </div>
                </div>
            </div>
          <div style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "space-around",
          }}>
           <img className="item" src="https://lh3.googleusercontent.com/proxy/lerz6YHZ5j9e6kjQ41Wktz9qHC77Yu0lFWJGkvwJB6aCDU5IZb4Rs8eKwryQTLYr7_0FcRMjithLHNG7EKtOEknXByX_MlAcqIRysCGbeMsjLGeAMKs "/>
           <img className="item" src="https://lh3.googleusercontent.com/proxy/lerz6YHZ5j9e6kjQ41Wktz9qHC77Yu0lFWJGkvwJB6aCDU5IZb4Rs8eKwryQTLYr7_0FcRMjithLHNG7EKtOEknXByX_MlAcqIRysCGbeMsjLGeAMKs "/>
           <img className="item" src="https://lh3.googleusercontent.com/proxy/lerz6YHZ5j9e6kjQ41Wktz9qHC77Yu0lFWJGkvwJB6aCDU5IZb4Rs8eKwryQTLYr7_0FcRMjithLHNG7EKtOEknXByX_MlAcqIRysCGbeMsjLGeAMKs "/>
           <img className="item" src="https://lh3.googleusercontent.com/proxy/lerz6YHZ5j9e6kjQ41Wktz9qHC77Yu0lFWJGkvwJB6aCDU5IZb4Rs8eKwryQTLYr7_0FcRMjithLHNG7EKtOEknXByX_MlAcqIRysCGbeMsjLGeAMKs "/>
           <img className="item" src="https://lh3.googleusercontent.com/proxy/lerz6YHZ5j9e6kjQ41Wktz9qHC77Yu0lFWJGkvwJB6aCDU5IZb4Rs8eKwryQTLYr7_0FcRMjithLHNG7EKtOEknXByX_MlAcqIRysCGbeMsjLGeAMKs "/>
           <img className="item" src="https://lh3.googleusercontent.com/proxy/lerz6YHZ5j9e6kjQ41Wktz9qHC77Yu0lFWJGkvwJB6aCDU5IZb4Rs8eKwryQTLYr7_0FcRMjithLHNG7EKtOEknXByX_MlAcqIRysCGbeMsjLGeAMKs "/>
           <img className="item" src="https://lh3.googleusercontent.com/proxy/lerz6YHZ5j9e6kjQ41Wktz9qHC77Yu0lFWJGkvwJB6aCDU5IZb4Rs8eKwryQTLYr7_0FcRMjithLHNG7EKtOEknXByX_MlAcqIRysCGbeMsjLGeAMKs "/>
          </div>
        </div>
    )
}

export default Profile