import React from "react";

export const Inicio: React.FC = () => {
    return (
        <div style={{ textAlign: "center", padding: "0", margin: "0", height: "100vh", position: "relative" }}>
           
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url('https://media.istockphoto.com/id/1283712032/es/foto/caja-de-cart%C3%B3n-llena-de-alimentos-no-perecederos-sobre-mesa-de-madera-vista-de-%C3%A1ngulo-alto.jpg?s=612x612&w=0&k=20&c=gf7M05I4F3aXj8u_6JMKZ8W1hQunHzqBB3hBW0_9P8k=')", 
                    backgroundSize: "cover", 
                    backgroundPosition: "center", 
                    filter: "brightness(0.5)", 
                    zIndex: -1, 
                }}
            ></div>

            <div style={{ position: "relative", zIndex: 1, padding: "50px" }}>
                <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px", color: "#fff" }}>
                    Plataforma de Donación y Redistribución de Alimentos
                </h1>

                <section className="intro" style={{ maxWidth: "80%", margin: "0 auto", fontSize: "1.2rem", marginBottom: "40px" }}>
                    <h2 style={{ fontSize: "2rem", color: "#FFD700", marginBottom: "10px" }}>Nuestra Misión</h2>
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#f1f1f1" }}>
                        Buscamos reducir el desperdicio de alimentos en supermercados, restaurantes y hogares, 
                        canalizando el excedente a organizaciones sociales y comedores comunitarios que los necesitan.
                    </p>
                </section>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "50px", gap: "40px" }}>
                    <div style={{ width: "45%", padding: "20px", textAlign: "left", backgroundColor: "#444", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
                        <h2 style={{ textAlign: "center", borderBottom: "2px solid #FFD700", paddingBottom: "10px", color: "#FFD700" }}>
                            ¿Cómo funciona?
                        </h2>
                        <p style={{ color: "#f1f1f1", fontSize: "1.1rem", lineHeight: "1.6" }}>
                            Conectamos a donantes con beneficiarios a través de nuestra plataforma, 
                            facilitando la entrega de alimentos a quienes más lo necesitan.
                        </p>
                    </div>

                    <div style={{ width: "45%", padding: "20px", textAlign: "left", backgroundColor: "#444", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
                        <h2 style={{ textAlign: "center", borderBottom: "2px solid #FFD700", paddingBottom: "10px", color: "#FFD700" }}>
                            Únete a la causa
                        </h2>
                        <p style={{ color: "#f1f1f1", fontSize: "1.1rem", lineHeight: "1.6" }}>
                            Ya seas un donante o beneficiario, tu participación hace la diferencia. 
                            Regístrate y comienza a formar parte del cambio hacia un mundo sin desperdicio alimentario.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
