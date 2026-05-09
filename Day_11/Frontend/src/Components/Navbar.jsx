import { NavLink } from "react-router-dom";

export const Navbar =()=>{
    const links = [
        {path:'/', title:'Todo'},
        {path:'/user', title:'User'},
        {path:'/login', title:'Login'},
        {path:'/signup', title:'Signup'},
    ]

    const defaltStyle={
        color:'white',
    };

    const activeStyle={
        color: 'tomato',
    };

    return(
        <>
        <div style={{
            border:'1px solid red',
            padding:'10px',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            width:'80%',
            margin: 'auto',
            textDecoration:'none',
            background:'black'
        }}
        >
            {links.map((data)=>(
                <NavLink style={({ isActive})=>{
                    return isActive? activeStyle :defaltStyle;
                }}
                key={data.path}
                to={data.path}
                end>
                    {data.title}
                </NavLink>
            ))}
        </div>
        
        </>
    )
}