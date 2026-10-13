let menuVisible = false;

// Función que oculta o muestra el menu (responsivo)
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

function seleccionar() {
    document.getElementById("nav").classList.remove("active");
    menuVisible = false;
}

// Lógica que requiere que el DOM esté cargado (Acordeón)
document.addEventListener("DOMContentLoaded", () => {
    
    // --- Lógica del Acordeón de Inventario ---
    const acordeones = document.querySelectorAll(".acordeon-cabecera");

    acordeones.forEach(acordeon => {
        acordeon.addEventListener("click", function() {
            // Alternar clase activa para girar la flecha
            this.classList.toggle("activa");

            // Obtener el div de contenido asociado
            const contenido = this.nextElementSibling;

            // Animación de abrir/cerrar
            if (contenido.style.maxHeight) {
                contenido.style.maxHeight = null;
            } else {
                contenido.style.maxHeight = contenido.scrollHeight + "px";
            }
        });
    });

});

// Función para abrir PDFs
function abrirPDF(event, rutaArchivo) {
    // Detiene la propagación del clic
    event.stopPropagation();
    
    // Abre el PDF en una pestaña nueva
    window.open(rutaArchivo, '_blank');
}

// Datos reales extraídos de la cotización CBRE - Microsoft
const datosCalendarioSitios = {
    sitio1: [
        { id: 1, equipo: "Refrigerador MARVEL, Modelo: MARE 124-5631A, Serie: 2437818030006", ubicacion: "QRO01", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 2, equipo: "Refrigerador MARVEL, Modelo: MARE 124-5G31A, Serie: 2437818030014", ubicacion: "QRO01", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 3, equipo: "Refrigerador TRUE, Modelo: STR2R2GHC, Serie: 108790B", ubicacion: "QRO01", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 4, equipo: "Refrigerador MARVEL, Modelo: MARE 224-5551A, Serie: 2438155030002", ubicacion: "QRO01", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 5, equipo: "Máquina de Hielo SCOTSMAN, Modelo: HID312A-1A, Serie: 23071320011903", ubicacion: "QRO01", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 6, equipo: "Microondas SHARP, Modelo: 1200W/R 22GTF, Serie: 17748", ubicacion: "QRO01", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 7, equipo: "Microondas SHARP, Modelo: 1200W/R 22GTF, Serie: 17734", ubicacion: "QRO01", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 8, equipo: "Lavavajillas FISHER PAYKEL, Modelo: DD24PAX9N, Serie: B5N401220", ubicacion: "QRO01", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 9, equipo: "Calentador de Agua, Modelo: DRE52A100, Serie: 2331135154065", ubicacion: "QRO01", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 10, equipo: "Calentador de Agua, Modelo: DRE52A100, Serie: S/N", ubicacion: "QRO01", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] }
    ],
    sitio2: [
        { id: 11, equipo: "Refrigerador MARVEL, Modelo: MARE 1245631A, Serie: S/N", ubicacion: "QRO02", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 12, equipo: "Refrigerador ULINE, Modelo: UADA24RGLSBB, Serie: 241866680500008", ubicacion: "QRO02", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 13, equipo: "Microondas SHARP, Modelo: S/N, Serie: 819063", ubicacion: "QRO02", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 14, equipo: "Microondas SHARP, Modelo: SWD3070A5YE, Serie: 819155", ubicacion: "QRO02", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 15, equipo: "Refrigerador TRUE, Modelo: TR36REFR5GC, Serie: 10735294", ubicacion: "QRO02", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 16, equipo: "Refrigerador TRUE, Modelo: TR36REFR5GC, Serie: 10744330", ubicacion: "QRO02", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 17, equipo: "Lavaloza FISHER & PAYKEL, Modelo: DDZYDAX9N, Serie: MUV622705", ubicacion: "QRO02", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 18, equipo: "Refrigerador ULINE, Modelo: S/N, Serie: 2418861050011", ubicacion: "QRO02", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 19, equipo: "Refrigerador ULINE, Modelo: S/N, Serie: 2418861050010", ubicacion: "QRO02", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 20, equipo: "Sandwichera TFAL, Modelo: SW33DMX, Serie: SW332D", ubicacion: "QRO02", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 21, equipo: "Cafetera CUISINART, Modelo: D9B1400BCPCESP, Serie: 2724", ubicacion: "QRO02", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 22, equipo: "Licuadora NINJA, Modelo: CT610, Serie: X245BG5DE8R4", ubicacion: "QRO02", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 23, equipo: "Dispensador de Agua KUKNNIA, Modelo: K53BC, Serie: 240508085", ubicacion: "QRO02", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 24, equipo: "Calentador S/N, Modelo: DRE52A100, Serie: 2407137823179", ubicacion: "QRO02", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] }
    ],
    sitio6: [
        { id: 25, equipo: "Estación de Hidratación HAWS, Modelo: HCR9, Serie: 19231250194", ubicacion: "QRO06", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 26, equipo: "Calentador de Agua A. O. SMITH, Modelo: DRE-52A 100, Serie: 2335135517564", ubicacion: "QRO06", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 27, equipo: "Refrigerador U-LINE, Modelo: U-ADA24RGLS, Serie: 2314869060015", ubicacion: "QRO06", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 28, equipo: "Estación de Hidratación KUKNNIA, Modelo: K53BC, Serie: 240507943", ubicacion: "QRO06", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 29, equipo: "Refrigerador TRUE, Modelo: TR-36REF-L-SG-C, Serie: 10714494", ubicacion: "QRO06", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 30, equipo: "Refrigerador TRUE, Modelo: TR-36REF-R-SG-C, Serie: 10718092", ubicacion: "QRO06", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 31, equipo: "Máquina de Hielo SCOTSMAN, Modelo: HID312A-1A, Serie: 23061320012244", ubicacion: "QRO06", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 32, equipo: "Lavavajillas FISHER & PAYKEL, Modelo: DD24DAX9N, Serie: UAV623455", ubicacion: "QRO06", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 33, equipo: "Refrigerador U-LINE, Modelo: U-ADA24RGLS, Serie: 2314935060007", ubicacion: "QRO06", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 34, equipo: "Refrigerador U-LINE, Modelo: U-ADA24RGLS, Serie: 2314869060013", ubicacion: "QRO06", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 35, equipo: "Refrigerador DANBY, Modelo: DCR045B1XSLDB, Serie: 5224073009677", ubicacion: "QRO06", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 36, equipo: "Estación de Hidratación WHIRPOOL, Modelo: WK5915BD, Serie: S/N", ubicacion: "QRO06", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] },
        { id: 37, equipo: "Calentador de Agua A. O. SMITH, Modelo: DRE-52A 100, Serie: 2336135569423", ubicacion: "QRO06", frecuencia: "TRIMESTRAL", servicios: ["X","X","X","X"] }
    ]
};

let sitioActual = 'sitio1';

function abrirCalendarioModal() {
    document.getElementById('modal-calendario').style.display = 'flex';
    cargarTablaModal(sitioActual);
}

function cerrarCalendarioModal() {
    document.getElementById('modal-calendario').style.display = 'none';
}

function cambiarComedorModal(sitio) {
    sitioActual = sitio;
    const botones = document.querySelectorAll('.tab-btn');
    botones.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    cargarTablaModal(sitio);
}

function cargarTablaModal(sitio) {
    const thead = document.getElementById('cabecera-tabla-calendario');
    const tbody = document.getElementById('cuerpo-tabla-calendario');
    
    // Configurar las cabeceras dinámicas para 4 servicios trimestrales
    thead.innerHTML = `
        <tr>
            <th>#</th>
            <th>Modelo, Serie y Marca del Equipo</th>
            <th>Ubicación</th>
            <th>Frecuencia</th>
            <th>Servicio 1</th>
            <th>Servicio 2</th>
            <th>Servicio 3</th>
            <th>Servicio 4</th>
        </tr>
    `;
    
    // Limpiar el cuerpo de la tabla
    tbody.innerHTML = '';
    
    // Cargar los datos del sitio seleccionado
    const items = datosCalendarioSitios[sitio] || [];
    items.forEach(row => {
        let tr = document.createElement('tr');
        
        // Mapear los 4 servicios con su "X" y color corporativo
        let celdasServicios = row.servicios.map(s => `<td style="text-align:center; color:var(--accent-red); font-weight:bold;">${s}</td>`).join('');
        
        tr.innerHTML = `
            <td>${row.id}</td>
            <td style="text-align:left; white-space: nowrap;">${row.equipo}</td>
            <td>${row.ubicacion}</td>
            <td>${row.frecuencia}</td>
            ${celdasServicios}
        `;
        tbody.appendChild(tr);
    });
}