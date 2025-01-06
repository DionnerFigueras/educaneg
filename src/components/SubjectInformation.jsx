import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faBookOpen, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from '@/components/Button'

/*  
Muestra la informacion de una materia en particular.
*/

function SubjectInformation({ subjectData }) {
  return (
    <div className="w-full flex flex-col justify-center items-center">

      <div className="w-10/12  p-8 flex flex-col gap-5 border-2 border-gray-300 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold">{subjectData.titulo}</h1>

        <div className="flex gap-10">
          <p className="text-lg font-semibold">{subjectData.codigo}</p>
          <p className="text-lg font-semibold">UC: {subjectData.creditos}</p>
        </div>

        <div>
          <p className="text-2xl font-bold pb-2">Descripción</p>
          <p className="text-lg  text-justify">{subjectData.descripcion}</p>
        </div>

        <div>
          <p className="text-2xl font-bold pb-2">Profesor</p>
          <p className="text-lg  text-justify">{subjectData.profesor}</p>
        </div>

        <div>
          <p className="text-2xl font-bold pb-2">Horario y ubicacion</p>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faClock} />
            <p className="text-lg  text-justify">{subjectData.horario}</p>
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="text-lg  text-justify">{subjectData.ubicacion}</p>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold pb-2">Prerrequisitos</p>
          {subjectData.prerrequisitos.map((prereq, index) => (
            <p className="text-lg font-semibold" key={index}>
              {prereq}
            </p>
          ))}
        </div>

        <div>
          <p className="text-2xl font-bold pb-2">Cupos</p>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBookOpen} />
            <p className="text-lg  text-justify">{subjectData.cupos}</p>
          </div>
        </div>

      </div>

      <div className="w-10/12 my-4 flex justify-between items-center">
          <Button 
          textButton={"Regresar"}
          route={"/administrator/subjects"}
          />

          <Button 
          mode={"dark"}
          textButton={"Editar Materia"}
          route={"/administrator/subjects/add"}
          />
        </div>
    </div>
  );
}

export default SubjectInformation;
