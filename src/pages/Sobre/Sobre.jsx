import Header from "../../components/Header/Header";
import image from "../../assets/super.svg";
import './sobre.css'

function Sobre() {
  return (
    <>
      <Header image={image} description="ilustracao Hacker">
        Sobre mim.
      </Header>

      <div>      
        <section className="container_perfil">
          <img
            className="profile-img"
            src="https://media.discordapp.net/attachments/723629983414616096/995024246474543246/eu.jpeg?width=471&height=471"
          />
          <div className="about">
            <h2>Prazer, Nathy Cabral!</h2>
            <p>Paulistana! Tatuadora e Kriptoniana nas horas vagas.</p>
            <p>Dev Front-end</p>
          </div>
        </section>   
      </div>
    </>
  );
}

export default Sobre;
