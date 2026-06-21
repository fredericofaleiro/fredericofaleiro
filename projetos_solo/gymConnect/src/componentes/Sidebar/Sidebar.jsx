import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <section>

      <div className="sidebar-header">
      <img src="/path/to/logo.png" alt="GymConnect Logo"/>
      <h2>GymConnect</h2>
      <button></button>
      </div>

      <div>
        <img src="" alt="" />
        <h4></h4>
        <h6></h6>
      </div>
  
      </section>

      <section>
      <ul>
        <button>
            <img src="" alt="" /> 
            <h2>Principal</h2>
        </button>
        <button>
            <img src="" alt="" />
            <h2>Presença</h2>
        </button>
        <button>
            <img src="" alt="" />
            <h2>Aulas</h2>
        </button>
        <button>
            <img src="" alt="" />
            <h2>Plano</h2>
        </button>
        <button>
            <img src="" alt="" />
            <h2>Professores</h2>
        </button>
        <button>
            <img src="" alt="" />
            <h2>Configurações</h2>
        </button>
      </ul>
      </section>

      <section>
      <button>
          <img src="" alt="" />
        <h2>Sair</h2>
      </button>
       </section>
    </div>
  );
}

export default Sidebar;