import { useNavigate } from "react-router-dom"

export default function Home({page}){

    const navigate = useNavigate();

    page && navigate('/login');

    return (
        <>
            
        </>
    )
}