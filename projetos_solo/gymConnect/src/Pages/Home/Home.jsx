import Sidebar from "../../componentes/Sidebar/Sidebar";
import Header from "../../componentes/Header/Header";
import PlanCard from "../../componentes/Plancard/Plancard";
import PostCard from "../../componentes/Postcard/Postcard";
import FloatingButton from "../../componentes/Floatingbutton/Floatingbutton";

function Home() {
  return (
    <div>
      <Sidebar />
      <Header />
      <PlanCard />
      <PostCard />
      <PostCard />
      <FloatingButton />
    </div>
  );
}

export default Home;