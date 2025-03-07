import React from 'react';

export const Info: React.FC = () => {
    return (
        <div style={{ textAlign: "center", padding: "0", margin: "0", height: "100vh", position: "relative" }}>
            
         
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url('https://img.freepik.com/foto-gratis/vista-superior-alimentos-donacion-espacio-copia_23-2148733847.jpg')", 
                    backgroundSize: "cover", 
                    backgroundPosition: "center", 
                    filter: "brightness(0.5)", 
                    zIndex: -1, 
                }}
            ></div>

            <div style={{ position: "relative", zIndex: 1, padding: "50px" }}>
                <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px", color: "#fff" }}>
                    Acerca de Nosotros
                </h1>

                <section className="about-content" style={{ maxWidth: "80%", margin: "0 auto", fontSize: "1.2rem", marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "2rem", color: "#FFD700", marginBottom: "10px" }}>Nuestra Historia</h2>
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#f1f1f1" }}>
                        En un mundo donde toneladas de alimentos son desperdiciadas diariamente, mientras muchas personas pasan hambre, 
                        decidimos tomar acción. Creamos esta plataforma para conectar a quienes tienen excedentes de comida con quienes más la necesitan.  
                    </p>
                </section>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "50px", gap: "40px" }}>
                    <div style={{ width: "45%", padding: "20px", textAlign: "left", backgroundColor: "#444", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
                        <h2 style={{ textAlign: "center", borderBottom: "2px solid #FFD700", paddingBottom: "10px", color: "#FFD700" }}>
                            Nuestra Misión
                        </h2>
                        <p style={{ color: "#f1f1f1", fontSize: "1.1rem", lineHeight: "1.6" }}>
                            Reducir el desperdicio de alimentos y redistribuirlos eficientemente a quienes más los necesitan, 
                            promoviendo una comunidad más equitativa y sostenible.
                        </p>
                    </div>

                    <div style={{ width: "45%", padding: "20px", textAlign: "left", backgroundColor: "#444", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
                        <h2 style={{ textAlign: "center", borderBottom: "2px solid #FFD700", paddingBottom: "10px", color: "#FFD700" }}>
                            Nuestros Valores
                        </h2>
                        <ul style={{ listStyleType: "none", padding: "0", color: "#f1f1f1", fontSize: "1.1rem", lineHeight: "1.6" }}>
                            <li>✔ Solidaridad</li>
                            <li>✔ Sostenibilidad</li>
                            <li>✔ Innovación</li>
                            <li>✔ Transparencia</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
