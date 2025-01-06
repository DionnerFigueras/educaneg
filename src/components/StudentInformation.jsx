import React from "react";
import Button from "@/components/Button"

/* 
Muestra la informacion de un estudiante en particular
*/

function StudentInformation({ studentData }) {
  return (
    <div className="w-full m-4 flex flex-col items-center">
      <section className="w-11/12 h-fit p-4 flex justify-center flex-wrap gap-10 border-2 border-gray-300 rounded-lg shadow-md mb-4">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Datos Personales
          </h2>

          <div className="flex justify-evenly flex-wrap gap-10">
            <div className="flex gap-5 ">
              <div>
                <p className="text-base font-bold pb-1">Cédula:</p>
                <p className="text-base font-bold pb-1">Nombres:</p>
                <p className="text-base font-bold pb-1">Apellidos:</p>
                <p className="text-base font-bold pb-1">Unidades Cursadas:</p>
                <p className="text-base font-bold pb-1">Unidades Aprobadas:</p>
                <p className="text-base font-bold pb-1">Correo Personal:</p>
                <p className="text-base font-bold pb-1">Telefono Personal:</p>
              </div>

              <div>
                <p className="text-base font-semibold pb-1">
                  {studentData.cedula}
                </p>
                <p className="text-base font-semibold pb-1">
                  {studentData.nombres}
                </p>
                <p className="text-base font-semibold pb-1">
                  {studentData.apellidos}
                </p>
                <p className="text-base font-semibold pb-1">
                  {studentData.unidadesCursadas}
                </p>
                <p className="text-base font-semibold pb-1">
                  {studentData.unidadesAprobadas}
                </p>
                <p className="text-base font-semibold pb-1">
                  {studentData.correoPersonal}
                </p>
                <p className="text-base font-semibold pb-1">
                  {studentData.telefonoPersonal}
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div>
                <p className="text-base font-bold pb-1">Estatus:</p>
                <p className="text-base font-bold pb-1">Sede:</p>
                <p className="text-base font-bold pb-1">Carrera:</p>
                <p className="text-base font-bold pb-1">Indice Academico:</p>
                <p className="text-base font-bold pb-1">Nivel:</p>
                <p className="text-base font-bold pb-1">Correo Alternativo:</p>
                <p className="text-base font-bold pb-1">
                  Telefono de casa:
                </p>
              </div>

              <div>
                <p
                  className={`text-center text-base font-semibold pb-1 rounded ${
                    studentData.estatus === "Activo"
                      ? "bg-green-200 text-green-900"
                      : "bg-red-200 text-red-900"
                  }`}
                >
                  {studentData.estatus}
                </p>
                <p className="text-base font-semibold pb-1">
                  {studentData.sede}
                </p>
                <p className="text-base font-semibold pb-1">
                  {studentData.carrera}
                </p>
                <p className="text-base font-semibold pb-1">
                  {studentData.indiceAcademico}
                </p>
                <p className="text-base font-semibold pb-1">
                  {studentData.nivel}
                </p>
                <p className="text-base font-semibold pb-1">
                  {studentData.correoAlternativo}
                </p>
                <p className="text-base font-semibold pb-1">
                  {studentData.telefonoAlternativo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 h-fit p-4 flex justify-center flex-wrap gap-10 border-2 border-gray-300 rounded-lg shadow-md mb-4">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Datos de Nacimiento
          </h2>

          <div className="flex justify-evenly flex-wrap gap-10">
            <div className="flex gap-5 ">
              <div>
                <p className="text-base font-bold pb-1">Fecha:</p>
                <p className="text-base font-bold pb-1">Sexo:</p>
                <p className="text-base font-bold pb-1">Estado Civil:</p>
              </div>

              <div>
                <p className="text-base font-semibold pb-1">
                  {studentData.fecha}
                </p>
                <p className="text-base font-semibold pb-1">
                  {studentData.sexo}
                </p>
                <p className="text-base font-semibold pb-1">
                  {studentData.estadoCivil}
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div>
                <p className="text-base font-bold pb-1">Pais:</p>
                <p className="text-base font-bold pb-1">Estado:</p>
                <p className="text-base font-bold pb-1">Ciudad:</p>
              </div>

              <div>
                <p className="text-base font-semibold pb-1">
                  {studentData.pais}
                </p>
                <p className="text-base font-semibold pb-1">
                  {studentData.estado}
                </p>
                <p className="text-base font-semibold pb-1">
                  {studentData.ciudad}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 h-fit p-4 flex justify-center flex-wrap gap-10 border-2 border-gray-300 rounded-lg shadow-md mb-4">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Dirección</h2>

          <div className="flex flex-wrap flex-col justify-evenly">

            <div className="flex flex-1 gap-10 mb-4">
              <p className="text-base font-bold pb-1">Dirección:</p>
              <p className="text-base font-bold pb-1">
                {studentData.direccion}
              </p>
            </div>

            <div className="flex flex-wrap gap-x-15 gap-y-5">

              <div className="flex flex-1 gap-10 mr-4">
                <p className="text-base font-bold pb-1">Email:</p>
                <p className="text-base font-bold pb-1">
                  {studentData.email}
                </p>
              </div>

              <div className="flex flex-1 gap-10">
                <p className="text-base font-bold pb-1">Celular:</p>
                <p className="text-base font-bold pb-1">
                  {studentData.telefonoPersonal}
                </p>
              </div>

              <div className="flex flex-1 gap-10">
                <p className="text-base font-bold pb-1">Telefono:</p>
                <p className="text-base font-bold pb-1">
                  {studentData.telefonoAlternativo}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="w-11/12 flex justify-between flex-wrap">

      <Button 
      textButton={"Regresar"}
      route={"/administrator/estudents"}
      />

      <Button 
      mode={"dark"}
      textButton={"Editar Perfil"}
      route={"/administrator/estudents/add"}
      />
        
      </div>

    </div>
  );
}

export default StudentInformation;
