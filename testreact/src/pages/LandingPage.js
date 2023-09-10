import profile from "../assets/icons/profile.png";
import { useNavigate } from "react-router-dom";
function LandingPage ()  {
    const navigate = useNavigate();
    const handleToDetail = () => {
        navigate("/detsils");

    };
    return (
        <div className="text-center font-mono">
            <p className="font-mono text-4xl font-bold uppercase">About Me</p>
            <div className="flex justify-center">  
        <img 
        src={profile} 
        alt="profile" 
        className="w-[20%] my-3 bg-white rounded-full p-6" 
        />
    </div>
            <p className="text-2xl mt-2 font-bold text-white mx-56">
            Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking 
at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
 packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes 
  by accident, sometimes on purpose (injected humour and the like).{"\n"}
            </p>{""}
            <br />
            <button className="text-xl text-white underline" 
             onClick={() => handleToDetail()}
             >
            NEXT
            </button>
        </div>
    );

}

 

export default LandingPage;