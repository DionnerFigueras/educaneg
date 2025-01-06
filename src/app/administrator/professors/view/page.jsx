"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Button from "@/components/Button";
import UserInformation from "@/components/UserInformation";
import ProfessorInformation from "@/components/ProfessorInformation";
import { faBook, faGraduationCap, faHome, faUsers } from "@fortawesome/free-solid-svg-icons";

function professor() {

  /* Contenido del sidebar */
  const items = [
    { icon: faHome, text: "Dasboard", route: "/administrator" },
    { icon: faGraduationCap, text: "Estudiantes", route: "/administrator/estudents" },
    { icon: faUsers, text: "Profesores", route: "/administrator/professors" },
    { icon: faBook, text: "Asignaturas", route: "/administrator/subjects" },
  ]; 



  return (
    <div className="flex bg-gray-100">
      <Sidebar role={"Administrador"} items={items} />

      <div className="w-full flex flex-col justify-center items-center">

        <div className="w-9/12 px-24 py-8 border-2 border-gray-300 rounded-lg shadow-md">
          <div className="flex flex-col items-center justify-between">
            <UserInformation
              url={"/images/foto-perfil.png"}
              name={"María García López"}
              email={"Ciencias de la computacion"}
              status={"Activo"}
              /* Cambia algunos estilos para mostrar mejor la informacion del profesor */
              isProfessor={true}
            />

          <ProfessorInformation
            email={"maria.garcia@gmail.com"}
            phone={"123456789"}
            address={"Calle 123, 456, 789"}
            academic_title={"Doctorado en ciencias de la computacion"}
            specialization={"Inteligencia Artificial"}
            contract_date={"31/01/92"}
          />

          </div>
        </div>
        
        <div className="w-full px-16 py-12 flex items-center justify-between flex-wrap">
          <Button 
          textButton={"Regresar"}
          route={"/administrator/professors"}
          />

          <Button 
          mode={"dark"}
          textButton={"Editar Perfil"}
          route={"/administrator/professors/add"}
          />
          
        </div>
      </div>
    </div>
  );
}

export default professor;
