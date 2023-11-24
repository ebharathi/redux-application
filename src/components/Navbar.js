import { UseSelector,useDispatch, useSelector } from "react-redux";
const Navbar=()=>{
    const count=useSelector((state)=>state.counter.total)
    return (
        <nav style={{backgroundColor:'red',padding:'10px',color:'white'}}>
            Navbar -{count}
        </nav>
    )
}
export default Navbar;