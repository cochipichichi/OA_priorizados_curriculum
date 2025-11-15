// Datos de ejemplo de OA priorizados y su estructura de recursos
const oaDataFallback = [
  {
    "id": "CN1M_OA2_EVOLUCION",
    "codigo": "CN1M OA2",
    "asignatura": "Ciencias Naturales",
    "nivel": "1° medio",
    "prioridad": "prioritario",
    "titulo": "Analizar e interpretar evidencias de la evolución y la selección natural.",
    "area": "Biología – Evolución",
    "tags": [
      "XR",
      "PEVE",
      "PAES",
      "PIE"
    ],
    "xr": {
      "viewer3d": "viewer3D/fotosintesis.html",
      "ar": "viewerAR/fotosintesis.html",
      "vr": "viewerVR/fotosintesis.html"
    },
    "kpsi": [
      "Puedo dar al menos un ejemplo de evidencia de la evolución.",
      "Puedo explicar con mis palabras qué es la selección natural.",
      "Puedo identificar aportes de Darwin y Wallace a la teoría de la evolución."
    ],
    "quiz": [
      {
        "pregunta": "¿Cuál de las siguientes es una evidencia de la evolución?",
        "alternativas": [
          "Que todos los seres vivos son iguales.",
          "El registro fósil que muestra cambios en las especies a lo largo del tiempo.",
          "Que las especies nunca cambian.",
          "Que todos los organismos viven en los mismos lugares."
        ],
        "correcta": 1
      }
    ],
    "ticketSalida": [
      "Escribe un ejemplo de evidencia de la evolución y explica qué nos muestra.",
      "Relaciona selección natural, ambiente y variación con un ejemplo simple."
    ],
    "sesiones": [
      {
        "titulo": "Sesión 1 – Evidencias de la evolución",
        "objetivo": "Reconocer distintos tipos de evidencias de la evolución usando ejemplos y modelos.",
        "actividades": [
          "Activación de saberes previos con KPSI.",
          "Análisis guiado de imágenes de fósiles, embriones y estructuras homólogas.",
          "Mini salida virtual (video o recurso web) para observar diversidad de especies."
        ],
        "evaluacion": "Lista de cotejo sobre identificación de evidencias y participación en la discusión."
      }
    ],
    "rubrica": [
      {
        "criterio": "Reconoce y explica evidencias de la evolución.",
        "destacado": "Reconoce varios tipos de evidencias y las explica con vocabulario científico básico.",
        "competente": "Reconoce al menos una evidencia y la explica de forma parcial.",
        "inicial": "Menciona ejemplos sin relacionarlos claramente con la evolución."
      }
    ],
    "evaluacionDocente": "Registra el desempeño en KPSI, análisis de evidencias y uso de datos en el template PEVE.",
    "mineducUrl": "https://www.curriculumnacional.cl/recursos/ciencias-naturales-1-medio-unidad-1-oa2-actividad-3",
    "contexto": {
      "liceo": "Liceo Bicentenario de Excelencia Polivalente San Nicolás",
      "sede": "San Nicolás",
      "comuna": "San Nicolás",
      "region": "Ñuble",
      "curso": "1° Medio BIO",
      "anio": 2025,
      "jornada": "Diurna"
    },
    "csvTemplateUrl": "docs/plantilla_peve_kpsi_quiz_ticket.csv"
  },
  {
    "id": "BIO1M_OA5_FOTOSINTESIS",
    "codigo": "BIO1M OA5",
    "asignatura": "Biología",
    "nivel": "1° medio",
    "prioridad": "prioritario",
    "titulo": "Explicar el proceso de fotosíntesis y su importancia para los seres vivos.",
    "area": "Ciencias Naturales",
    "tags": [
      "XR",
      "PEVE",
      "PIE"
    ],
    "xr": {
      "viewer3d": "viewer3D/fotosintesis.html",
      "ar": "viewerAR/fotosintesis.html",
      "vr": "viewerVR/fotosintesis.html"
    },
    "kpsi": [
      "Puedo explicar qué necesita una planta para hacer fotosíntesis.",
      "Puedo dibujar un esquema simple de la fotosíntesis.",
      "Puedo relacionar fotosíntesis con el oxígeno que respiramos."
    ],
    "quiz": [
      {
        "pregunta": "¿En qué parte de la célula vegetal ocurre principalmente la fotosíntesis?",
        "alternativas": [
          "En el núcleo",
          "En los cloroplastos",
          "En la mitocondria",
          "En la membrana plasmática"
        ],
        "correcta": 1
      }
    ],
    "ticketSalida": [
      "Escribe con tus palabras por qué la fotosíntesis es importante para los animales (incluyendo a las personas).",
      "Dibuja un esquema simple de la fotosíntesis y etiqueta al menos tres elementos."
    ],
    "sesiones": [
      {
        "titulo": "Sesión 1 – Animación y modelo 3D",
        "objetivo": "Activar conocimientos previos y observar un modelo 3D de cloroplasto/planta.",
        "actividades": [
          "Aplicación de KPSI inicial en el repositorio.",
          "Exploración guiada de modelo 3D/AR de la planta.",
          "Construcción colectiva de un diagrama simple."
        ],
        "evaluacion": "Observación anecdótica + registro rápido de KPSI en el template PEVE."
      }
    ],
    "rubrica": [
      {
        "criterio": "Explica el proceso de fotosíntesis con vocabulario científico básico.",
        "destacado": "Explica con claridad el proceso completo de fotosíntesis usando términos como cloroplasto, CO₂, glucosa y oxígeno.",
        "competente": "Explica las ideas principales de la fotosíntesis, aunque omite algunos términos o pasos.",
        "inicial": "Entrega una explicación parcial o confusa, con escasa referencia a conceptos clave."
      }
    ],
    "evaluacionDocente": "Registra resultados del quiz y ticket de salida en el template PEVE.",
    "mineducUrl": "https://www.curriculumnacional.cl/",
    "contexto": {
      "liceo": "Liceo Bicentenario de Excelencia Polivalente San Nicolás",
      "sede": "San Nicolás",
      "comuna": "San Nicolás",
      "region": "Ñuble",
      "curso": "1° Medio BIO",
      "anio": 2025,
      "jornada": "Diurna"
    },
    "csvTemplateUrl": "docs/plantilla_peve_kpsi_quiz_ticket.csv"
  },
  {
    "id": "BIO1M_OA6_RESPIRACION",
    "codigo": "BIO1M OA6",
    "asignatura": "Biología",
    "nivel": "1° medio",
    "prioridad": "prioritario",
    "titulo": "Explicar la respiración celular y relacionarla con el uso de energía en el organismo.",
    "area": "Ciencias Naturales",
    "tags": [
      "XR",
      "PEVE"
    ],
    "xr": {
      "viewer3d": "viewer3D/mitocondria.html",
      "ar": "viewerAR/mitocondria.html",
      "vr": "viewerVR/mitocondria.html"
    },
    "kpsi": [
      "Puedo decir por qué nuestro cuerpo necesita energía.",
      "Puedo ubicar la mitocondria como parte de la célula.",
      "Puedo comparar de forma simple fotosíntesis y respiración celular."
    ],
    "quiz": [
      {
        "pregunta": "¿Cuál es la función principal de la respiración celular?",
        "alternativas": [
          "Producir oxígeno para la célula.",
          "Transformar la energía de los nutrientes en ATP.",
          "Formar glucosa a partir de CO₂ y agua.",
          "Almacenar información genética."
        ],
        "correcta": 1
      }
    ],
    "ticketSalida": [
      "Explica en una frase qué relación tienen la respiración celular y la actividad física."
    ],
    "sesiones": [
      {
        "titulo": "Sesión 1 – Animación de la mitocondria",
        "objetivo": "Reconocer la mitocondria y el rol del ATP como energía para la célula.",
        "actividades": [
          "Visualización de una animación / modelo 3D de mitocondria.",
          "Mapa conceptual guiado sobre nutrientes, oxígeno, ATP y desechos."
        ],
        "evaluacion": "Revisión del mapa conceptual y participación en la discusión."
      }
    ],
    "rubrica": [
      {
        "criterio": "Relaciona respiración celular con uso de energía en el organismo.",
        "destacado": "Explica con claridad cómo la respiración celular permite obtener energía para distintas funciones del cuerpo.",
        "competente": "Menciona la obtención de energía, pero con explicaciones parciales.",
        "inicial": "Presenta dificultad para relacionar la respiración celular con la energía del organismo."
      }
    ],
    "evaluacionDocente": "Articula este OA con actividades de Educación Física o del invernadero (sensores y consumo energético).",
    "mineducUrl": "https://www.curriculumnacional.cl/",
    "contexto": {
      "liceo": "Liceo Bicentenario de Excelencia Polivalente San Nicolás",
      "sede": "San Nicolás",
      "comuna": "San Nicolás",
      "region": "Ñuble",
      "curso": "1° Medio BIO",
      "anio": 2025,
      "jornada": "Diurna"
    },
    "csvTemplateUrl": "docs/plantilla_peve_kpsi_quiz_ticket.csv"
  },
  {
    "id": "LE1M_OA1_LECTURA",
    "codigo": "LE1M OA1",
    "asignatura": "Lenguaje y Comunicación",
    "nivel": "1° medio",
    "prioridad": "prioritario",
    "titulo": "Leer y comprender textos para contextualizar y complementar las lecturas literarias.",
    "area": "Lenguaje",
    "tags": [
      "Comprensión lectora",
      "PEVE"
    ],
    "xr": {
      "viewer3d": "",
      "ar": "",
      "vr": ""
    },
    "kpsi": [
      "Puedo identificar la idea principal de un texto informativo.",
      "Puedo localizar información explícita en un texto."
    ],
    "quiz": [],
    "ticketSalida": [
      "Escribe una frase que resuma el texto leído hoy."
    ],
    "sesiones": [],
    "rubrica": [],
    "evaluacionDocente": "Complementa este OA con rúbricas de comprensión lectora y registros PEVE.",
    "mineducUrl": "https://www.curriculumnacional.cl/recursos/lenguaje-1-medio",
    "contexto": {
      "liceo": "Neotech EduLab SpA – Plataforma PEVE",
      "sede": "Online",
      "comuna": "San Nicolás",
      "region": "Ñuble",
      "curso": "1° Medio LENG",
      "anio": 2025,
      "jornada": "Vespertina"
    },
    "csvTemplateUrl": "docs/plantilla_peve_kpsi_quiz_ticket.csv"
  },
  {
    "id": "MA1M_OA1_NUMEROS",
    "codigo": "MA1M OA1",
    "asignatura": "Matemática",
    "nivel": "1° medio",
    "prioridad": "prioritario",
    "titulo": "Resolver problemas que involucren operaciones con números racionales.",
    "area": "Matemática",
    "tags": [
      "Problemas",
      "PEVE"
    ],
    "xr": {
      "viewer3d": "",
      "ar": "",
      "vr": ""
    },
    "kpsi": [
      "Puedo ubicar fracciones en la recta numérica.",
      "Puedo realizar sumas y restas con fracciones con igual denominador."
    ],
    "quiz": [],
    "ticketSalida": [
      "Escribe un problema de la vida cotidiana que se resuelva con fracciones."
    ],
    "sesiones": [],
    "rubrica": [],
    "evaluacionDocente": "Registra desempeño en resolución de problemas con números racionales.",
    "mineducUrl": "https://www.curriculumnacional.cl/recursos/matematica-1-medio",
    "contexto": {
      "liceo": "Neotech EduLab SpA – Plataforma PEVE",
      "sede": "Online",
      "comuna": "San Nicolás",
      "region": "Ñuble",
      "curso": "1° Medio MAT",
      "anio": 2025,
      "jornada": "Vespertina"
    },
    "csvTemplateUrl": "docs/plantilla_peve_kpsi_quiz_ticket.csv"
  },
  {
    "id": "HI1M_OA2_BURGUESIA",
    "codigo": "HI1M OA2",
    "asignatura": "Historia, Geografía y Ciencias Sociales",
    "nivel": "1° medio",
    "prioridad": "prioritario",
    "titulo": "Caracterizar la cultura burguesa, su ideal de vida y valores durante el siglo XIX.",
    "area": "Historia",
    "tags": [
      "Historia",
      "Priorización"
    ],
    "xr": {
      "viewer3d": "",
      "ar": "",
      "vr": ""
    },
    "kpsi": [
      "Puedo nombrar al menos dos características de la cultura burguesa del siglo XIX."
    ],
    "quiz": [],
    "ticketSalida": [
      "Explica una diferencia entre la vida burguesa y la de los sectores populares en el siglo XIX."
    ],
    "sesiones": [],
    "rubrica": [],
    "evaluacionDocente": "Puedes cruzar este OA con recursos digitales del Currículum Nacional y registrar evidencias en el template PEVE.",
    "mineducUrl": "https://www.curriculumnacional.cl/curriculum/7o-basico-2o-medio/historia-geografia-ciencias-sociales/1-medio/hi1m-oa-02",
    "contexto": {
      "liceo": "Neotech EduLab SpA – Plataforma PEVE",
      "sede": "Online",
      "comuna": "San Nicolás",
      "region": "Ñuble",
      "curso": "1° Medio HIST",
      "anio": 2025,
      "jornada": "Vespertina"
    },
    "csvTemplateUrl": "docs/plantilla_peve_kpsi_quiz_ticket.csv"
  }
];


let oaData = [];

function loadOAData() {
  return fetch("data/oa-data.json")
    .then((res) => {
      if (!res.ok) throw new Error("No se pudo cargar oa-data.json");
      return res.json();
    })
    .then((data) => {
      oaData = data;
    })
    .catch((err) => {
      console.warn("Usando OA de respaldo:", err);
      oaData = oaDataFallback;
    });
}


// Estado global simple
let currentLang = "es";
let currentFontSize = 16;
let currentSelectedOA = null;

// Render de filtros base

function initFilters() {
  const asignaturas = [...new Set(oaData.map((oa) => oa.asignatura))].sort();
  const niveles = [...new Set(oaData.map((oa) => oa.nivel))].sort();
  const liceos = [...new Set(oaData.map((oa) => oa.contexto?.liceo).filter(Boolean))].sort();
  const sedes = [...new Set(oaData.map((oa) => oa.contexto?.sede).filter(Boolean))].sort();
  const anios = [...new Set(oaData.map((oa) => oa.contexto?.anio).filter(Boolean))].sort((a, b) => a - b);

  const selAsig = document.getElementById("filter-asignatura");
  const selNivel = document.getElementById("filter-nivel");
  const selLiceo = document.getElementById("filter-liceo");
  const selSede = document.getElementById("filter-sede");
  const selAnio = document.getElementById("filter-anio");

  asignaturas.forEach((asig) => {
    const opt = document.createElement("option");
    opt.value = asig;
    opt.textContent = asig;
    selAsig.appendChild(opt);
  });

  niveles.forEach((niv) => {
    const opt = document.createElement("option");
    opt.value = niv;
    opt.textContent = niv;
    selNivel.appendChild(opt);
  });

  liceos.forEach((liceo) => {
    if (!selLiceo) return;
    const opt = document.createElement("option");
    opt.value = liceo;
    opt.textContent = liceo;
    selLiceo.appendChild(opt);
  });

  sedes.forEach((sede) => {
    if (!selSede) return;
    const opt = document.createElement("option");
    opt.value = sede;
    opt.textContent = sede;
    selSede.appendChild(opt);
  });

  anios.forEach((anio) => {
    if (!selAnio) return;
    const opt = document.createElement("option");
    opt.value = anio;
    opt.textContent = anio;
    selAnio.appendChild(opt);
  });

  selAsig.addEventListener("change", renderOACards);
  selNivel.addEventListener("change", renderOACards);
  if (selLiceo) selLiceo.addEventListener("change", renderOACards);
  if (selSede) selSede.addEventListener("change", renderOACards);
  if (selAnio) selAnio.addEventListener("change", renderOACards);
  document
    .getElementById("filter-prioritario")
    .addEventListener("change", renderOACards);
}

// Render tarjetas OA

function renderOACards() {
  const container = document.getElementById("oa-cards-container");
  if (!container) return;
  container.innerHTML = "";

  const selAsig = document.getElementById("filter-asignatura").value;
  const selNivel = document.getElementById("filter-nivel").value;
  const soloPrioritario = document.getElementById("filter-prioritario").checked;
  const selLiceo = document.getElementById("filter-liceo")?.value || "";
  const selSede = document.getElementById("filter-sede")?.value || "";
  const selAnio = document.getElementById("filter-anio")?.value || "";

  const filtered = oaData.filter((oa) => {
    if (selAsig && oa.asignatura !== selAsig) return false;
    if (selNivel && oa.nivel !== selNivel) return false;
    if (selLiceo && oa.contexto?.liceo !== selLiceo) return false;
    if (selSede && oa.contexto?.sede !== selSede) return false;
    if (selAnio && String(oa.contexto?.anio) !== String(selAnio)) return false;
    if (soloPrioritario && oa.prioridad !== "prioritario") return false;
    return true;
  });

  // Actualizar KPIs
// Actualizar KPIs
  const kpiOA = document.getElementById("kpi-oa");
  const kpiAsig = document.getElementById("kpi-asignaturas");
  if (kpiOA) kpiOA.textContent = filtered.length;
  if (kpiAsig) {
    const uniqueAsig = [...new Set(filtered.map((oa) => oa.asignatura))];
    kpiAsig.textContent = uniqueAsig.length || oaData.length;
  }

  filtered.forEach((oa) => {
    const card = document.createElement("article");
    card.className = "oa-card";
    card.dataset.oaId = oa.id;

    const header = document.createElement("div");
    header.className = "oa-header-row";
    header.innerHTML = `
      <span class="oa-code">${oa.asignatura} – ${oa.codigo}</span>
      <span class="oa-asignatura-pill">${oa.nivel}</span>
    `;

    const title = document.createElement("div");
    title.className = "oa-title";
    title.textContent = oa.titulo;

    const meta = document.createElement("div");
    meta.className = "oa-meta";
    meta.textContent = `${oa.area} · Prioridad: ${oa.prioridad}`;

    const badges = document.createElement("div");
    badges.className = "oa-badges";

    const prioridadClass =
      oa.prioridad === "prioritario"
        ? "badge-prioritario"
        : oa.prioridad === "integrado"
        ? "badge-integrado"
        : "badge-complementario";

    const prioridadSpan = document.createElement("span");
    prioridadSpan.className = `badge ${prioridadClass}`;
    prioridadSpan.textContent =
      oa.prioridad === "prioritario"
        ? "OA prioritario"
        : oa.prioridad === "integrado"
        ? "OA integrado"
        : "OA complementario";
    badges.appendChild(prioridadSpan);

    (oa.tags || []).forEach((tag) => {
      const span = document.createElement("span");
      span.className = "badge badge-tag";
      span.textContent = tag;
      badges.appendChild(span);
    });

    const buttonsRow = document.createElement("div");
    buttonsRow.className = "oa-buttons-row";

    const botonesConfig = [
      { icon: "👁️", label: "Ver detalle", action: "detalle" },
      { icon: "🧠", label: "KPSI", action: "kpsi" },
      { icon: "🧪", label: "Quiz", action: "quiz" },
      { icon: "🎟️", label: "Ticket", action: "ticket" },
      { icon: "👩‍🎓", label: "Estudiante", action: "estudiante" },
      { icon: "👨‍🏫", label: "Docente", action: "docente" },
      { icon: "👁️", label: "3D", action: "3d" },
      { icon: "📱", label: "AR", action: "ar" },
      { icon: "🥽", label: "VR", action: "vr" },
      { icon: "✅", label: "Registro CSV", action: "csv" }
    ];

    botonesConfig.forEach((cfg) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "oa-btn";
      btn.dataset.action = cfg.action;
      btn.innerHTML = `<span class="icon">${cfg.icon}</span><span>${cfg.label}</span>`;
      btn.addEventListener("click", (ev) => {
        ev.stopPropagation();
        handleOACardButton(cfg.action, oa);
      });
      buttonsRow.appendChild(btn);
    });


card.appendChild(header);
card.appendChild(title);
card.appendChild(meta);

if (oa.contexto) {
  const ctx = document.createElement("div");
  ctx.className = "oa-contexto";
  const { liceo, sede, curso, anio } = oa.contexto;
  ctx.textContent = `📍 ${liceo || ""} · ${sede || ""} · ${curso || ""} (${anio || ""})`;
  card.appendChild(ctx);
}

card.appendChild(badges);
    card.appendChild(buttonsRow);

    card.addEventListener("click", () => {
      currentSelectedOA = oa;
      renderQuickDetail(oa);
      openOAModal(oa, "estudiante");
    });

    container.appendChild(card);
  });

  if (!filtered.length) {
    container.innerHTML =
      '<p style="font-size:0.85rem;color:var(--text-muted);">No se encontraron OA con los filtros seleccionados.</p>';
  }
}

// Manejo rápido de botones en la tarjeta
function handleOACardButton(action, oa) {
  currentSelectedOA = oa;
  if (["detalle", "estudiante", "docente"].includes(action)) {
    openOAModal(oa, action === "docente" ? "docente" : "estudiante");
    return;
  }
  if (action === "3d" && oa.xr?.viewer3d) {
    window.open(oa.xr.viewer3d, "_blank");
    return;
  }
  if (action === "ar" && oa.xr?.ar) {
    window.open(oa.xr.ar, "_blank");
    return;
  }
  if (action === "vr" && oa.xr?.vr) {
    window.open(oa.xr.vr, "_blank");
    return;
  }
  if (action === "csv") {
  const url = oa.csvTemplateUrl || "docs/plantilla_peve_kpsi_quiz_ticket.csv";
  window.open(url, "_blank");
  return;
};
  }
  // Acciones lógicas que abren modal en secciones específicas
  openOAModal(oa, "estudiante");
}

// Detalle rápido panel derecho

function renderQuickDetail(oa) {
  const container = document.getElementById("oa-detail-quick");
  if (!container) return;
  container.classList.remove("empty");
  container.innerHTML = "";

  const h3 = document.createElement("h3");
  h3.textContent = `${oa.asignatura} – ${oa.codigo}`;
  const pTitulo = document.createElement("p");
  pTitulo.textContent = oa.titulo;

  const pMeta = document.createElement("p");
  pMeta.className = "oa-meta";
  pMeta.textContent = `${oa.nivel} · ${oa.area}`;

  const pCtx = document.createElement("p");
  pCtx.className = "oa-contexto";
  if (oa.contexto) {
    const { liceo, sede, curso, anio } = oa.contexto;
    pCtx.textContent = `📍 ${liceo || ""} · ${sede || ""} · ${curso || ""} (${anio || ""})`;
  }

  const chips = document.createElement("div");
  chips.className = "detail-chips";

  const prioridadSpan = document.createElement("span");
  prioridadSpan.className =
    "chip-small " +
    (oa.prioridad === "prioritario"
      ? "badge-prioritario"
      : oa.prioridad === "integrado"
      ? "badge-integrado"
      : "badge-complementario");
  prioridadSpan.textContent = `Prioridad: ${oa.prioridad}`;
  chips.appendChild(prioridadSpan);

  (oa.tags || []).forEach((tag) => {
    const span = document.createElement("span");
    span.className = "chip-small";
    span.textContent = tag;
    chips.appendChild(span);
  });

  container.appendChild(h3);
  container.appendChild(pTitulo);
  container.appendChild(pMeta);
  if (oa.contexto) container.appendChild(pCtx);
  container.appendChild(chips);
}
// Modal OA
function openOAModal(oa, initialView = "estudiante") {
  const modal = document.getElementById("oa-modal");
  if (!modal) return;

  // Título y meta
  document.getElementById("modal-oa-titulo").textContent =
    `${oa.asignatura} – ${oa.codigo}: ${oa.titulo}`;
  document.getElementById("modal-oa-meta").textContent =
    `${oa.nivel} · ${oa.area} · Prioridad: ${oa.prioridad}`;

  // Resumen estudiante
  const resEst = document.getElementById("modal-oa-resumen-est");
  if (resEst) {
    resEst.innerHTML = `<p>En este OA aprenderás a: <strong>${oa.titulo}</strong>. Las actividades incluyen recursos XR (3D/AR/VR), trabajo colaborativo y evaluaciones formativas.</p>`;
  }

  // Resumen docente
  const resDoc = document.getElementById("modal-oa-resumen-doc");
  if (resDoc) {
    resDoc.innerHTML = `<p>Este OA se trabaja a través de una secuencia de sesiones con foco en acceso, participación y progreso. Integra recursos XR, evaluaciones formativas y sumativas, y se articula con PEVE cuando corresponde.</p>`;
  }

  // Chips
  const chipsRow = document.getElementById("modal-oa-chips");
  if (chipsRow) {
    chipsRow.innerHTML = "";
    const prioridadChip = document.createElement("span");
    prioridadChip.className = "chip-small";
    prioridadChip.textContent = `Prioridad: ${oa.prioridad}`;
    chipsRow.appendChild(prioridadChip);

    (oa.tags || []).forEach((tag) => {
      const span = document.createElement("span");
      span.className = "chip-small";
      span.textContent = tag;
      chipsRow.appendChild(span);
    });
  }

  // KPSI
  const kpsiList = document.getElementById("modal-kpsi-list");
  if (kpsiList) {
    kpsiList.innerHTML = "";
    (oa.kpsi || []).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      kpsiList.appendChild(li);
    });
  }

  // Quiz
  const quizList = document.getElementById("modal-quiz-list");
  if (quizList) {
    quizList.innerHTML = "";
    (oa.quiz || []).forEach((q, idx) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>Pregunta ${idx + 1}:</strong> ${q.pregunta}`;
      const ulAlt = document.createElement("ul");
      q.alternativas.forEach((alt, i) => {
        const liAlt = document.createElement("li");
        const mark = i === q.correcta ? " ✅" : "";
        liAlt.textContent = `${alt}${mark}`;
        ulAlt.appendChild(liAlt);
      });
      li.appendChild(ulAlt);
      quizList.appendChild(li);
    });
  }

  // Ticket de salida
  const ticketList = document.getElementById("modal-ticket-list");
  if (ticketList) {
    ticketList.innerHTML = "";
    (oa.ticketSalida || []).forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      ticketList.appendChild(li);
    });
  }

  // XR buttons
  const xrButtons = document.getElementById("modal-xr-buttons");
  if (xrButtons) {
    xrButtons.innerHTML = "";
    if (oa.xr) {
      if (oa.xr.viewer3d) {
        const b = document.createElement("button");
        b.className = "xr-btn";
        b.innerHTML = "👁️ Ver modelo 3D";
        b.onclick = () => window.open(oa.xr.viewer3d, "_blank");
        xrButtons.appendChild(b);
      }
      if (oa.xr.ar) {
        const b = document.createElement("button");
        b.className = "xr-btn";
        b.innerHTML = "📱 Ver en AR";
        b.onclick = () => window.open(oa.xr.ar, "_blank");
        xrButtons.appendChild(b);
      }
      if (oa.xr.vr) {
        const b = document.createElement("button");
        b.className = "xr-btn";
        b.innerHTML = "🥽 Ver en VR";
        b.onclick = () => window.open(oa.xr.vr, "_blank");
        xrButtons.appendChild(b);
      }
    }
  }

  // Sesiones
  const sesList = document.getElementById("modal-sesiones-list");
  if (sesList) {
    sesList.innerHTML = "";
    (oa.sesiones || []).forEach((s) => {
      const li = document.createElement("li");
      const actList = (s.actividades || [])
        .map((a) => `<li>${a}</li>`)
        .join("");
      li.innerHTML = `<strong>${s.titulo}</strong><br/><em>Objetivo:</em> ${s.objetivo}<br/><em>Actividades:</em><ul>${actList}</ul><em>Evaluación:</em> ${s.evaluacion}`;
      sesList.appendChild(li);
    });
  }

  // Rúbrica
  const rubWrapper = document.getElementById("modal-rubrica-wrapper");
  if (rubWrapper) {
    rubWrapper.innerHTML = "";
    if (oa.rubrica && oa.rubrica.length) {
      const table = document.createElement("table");
      table.innerHTML = `
        <thead>
          <tr>
            <th>Criterio</th>
            <th>Destacado</th>
            <th>Competente</th>
            <th>Inicial</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;
      const tbody = table.querySelector("tbody");
      oa.rubrica.forEach((r) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${r.criterio}</td>
          <td>${r.destacado}</td>
          <td>${r.competente}</td>
          <td>${r.inicial}</td>
        `;
        tbody.appendChild(tr);
      });
      rubWrapper.appendChild(table);
    } else {
      rubWrapper.textContent =
        "Puedes adaptar una rúbrica base de la asignatura para este OA.";
    }
  }

  // Evaluación docente / PEVE
  const evalDoc = document.getElementById("modal-evaluacion-doc");
  if (evalDoc) {
    evalDoc.innerHTML = `<p>${oa.evaluacionDocente || ""}</p>`;
  }

  // Link PEVE (si existe)
  const peveP = document.getElementById("modal-peve-link");
  if (peveP) {
    if (oa.peveUrl) {
      peveP.innerHTML = `
        Puedes complementar este OA en tu plataforma PEVE:
        <a href="${oa.peveUrl}" target="_blank" rel="noopener noreferrer">${oa.peveUrl}</a>.
      `;
    } else {
      peveP.textContent =
        "Puedes registrar resultados en PEVE usando tu propia estructura de curso.";
    }
  }


  // Link Mineduc
  const mineducP = document.getElementById("modal-mineduc-link");
  if (mineducP) {
    const url = oa.mineducUrl || "https://www.curriculumnacional.cl/";
    mineducP.innerHTML = `
      Puedes revisar el OA en el sitio oficial del Currículum Nacional:
      <a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>.
    `;
  }

  // Activar pestañas
  setModalTab(initialView === "docente" ? "docente" : "estudiante");

  // Mostrar modal
  modal.setAttribute("aria-hidden", "false");
}

// Cambiar pestañas modal
function setModalTab(tab) {
  const btns = document.querySelectorAll(".modal-tab");
  const panels = document.querySelectorAll(".tab-panel");
  btns.forEach((b) => {
    b.classList.toggle("active", b.dataset.tab === tab);
  });
  panels.forEach((p) => {
    p.classList.toggle(
      "active",
      p.id === `tab-${tab}`
    );
  });
}

// Cerrar modal
function closeOAModal() {
  const modal = document.getElementById("oa-modal");
  if (!modal) return;
  modal.setAttribute("aria-hidden", "true");
}

// Charts
function initCharts() {
  const tipoCanvas = document.getElementById("oaTipoChart");
  const xrCanvas = document.getElementById("oaXRChart");
  if (tipoCanvas) {
    const ctx = tipoCanvas.getContext("2d");
    const counts = { XR: 0, IoT: 0, PEVE: 0 };
    oaData.forEach((oa) => {
      const tags = (oa.tags || []).map((t) => t.toLowerCase());
      if (tags.includes("xr")) counts.XR++;
      if (tags.includes("iot") || tags.includes("invernadero")) counts.IoT++;
      if (tags.includes("peve")) counts.PEVE++;
    });
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["XR", "IoT / Invernadero", "PEVE"],
        datasets: [
          { data: [counts.XR, counts.IoT, counts.PEVE] }
        ]
      },
      options: {
        animation: { animateRotate: true, animateScale: true, duration: 900 },
        plugins: {
          legend: { position: "bottom", labels: { boxWidth: 12 } }
        }
      }
    });
  }

  if (xrCanvas) {
    const ctx2 = xrCanvas.getContext("2d");
    const withXR = oaData.filter((oa) => oa.xr).length;
    const withoutXR = oaData.length - withXR;
    new Chart(ctx2, {
      type: "bar",
      data: {
        labels: ["OA con XR", "OA sin XR"],
        datasets: [
          { data: [withXR, withoutXR] }
        ]
      },
      options: {
        animation: { duration: 900, easing: "easeOutCubic" },
        plugins: { legend: { display: false } },
        scales: {
          y: {
            ticks: { color: "#b3b7d3" },
            grid: { display: false }
          },
          x: {
            ticks: { color: "#b3b7d3" },
            grid: { display: false }
          }
        }
      }
    });
  }
}

// Controles inclusivos
function setupControls() {
  const buttons = document.querySelectorAll(".ctrl-btn");
  const body = document.body;
  const searchOverlay = document.getElementById("search-overlay");
  const searchInput = document.getElementById("search-input");
  const searchClose = document.getElementById("search-close");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.action;

      if (action === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      if (action === "theme") {
        body.classList.toggle("theme-light");
      }

      if (action === "font-inc") {
        currentFontSize = Math.min(currentFontSize + 1, 22);
        document.documentElement.style.setProperty(
          "--font-size-base",
          `${currentFontSize}px`
        );
      }

      if (action === "font-dec") {
        currentFontSize = Math.max(currentFontSize - 1, 12);
        document.documentElement.style.setProperty(
          "--font-size-base",
          `${currentFontSize}px`
        );
      }

      if (action === "focus") {
        body.classList.toggle("focus-mode");
      }

      if (action === "search") {
        if (!searchOverlay) return;
        searchOverlay.classList.add("active");
        searchOverlay.setAttribute("aria-hidden", "false");
        setTimeout(() => searchInput && searchInput.focus(), 50);
      }

      if (action === "narrator") {
        const text = document.getElementById("narrator-text")?.textContent;
        if (!text || !("speechSynthesis" in window)) return;
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = currentLang === "es" ? "es-ES" : "en-US";
        window.speechSynthesis.speak(utter);
      }

      if (action === "lang") {
        currentLang = currentLang === "es" ? "en" : "es";
        swapLanguage(currentLang);
      }
    });
  });

  if (searchClose) {
    searchClose.addEventListener("click", () => {
      if (!searchOverlay) return;
      searchOverlay.classList.remove("active");
      searchOverlay.setAttribute("aria-hidden", "true");
      if (searchInput) searchInput.value = "";
      renderOACards();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      globalSearch(e.target.value);
    });
  }

  if (searchOverlay) {
    searchOverlay.addEventListener("click", (e) => {
      if (e.target === searchOverlay && searchClose) {
        searchClose.click();
      }
    });
  }
}

// Búsqueda global simple
function globalSearch(text) {
  const container = document.getElementById("oa-cards-container");
  if (!container) return;
  container.innerHTML = "";
  const term = text.toLowerCase();

  const filtered = oaData.filter((oa) => {
    if (!term) return true;
    return (
      oa.titulo.toLowerCase().includes(term) ||
      oa.asignatura.toLowerCase().includes(term) ||
      oa.nivel.toLowerCase().includes(term) ||
      oa.codigo.toLowerCase().includes(term)
    );
  });

  filtered.forEach((oa) => {
    // Reaprovechamos render, pero sin duplicar lógica: pequeño hack
    // Set filtros vacíos para que renderOACards no los restrinja
  });

  // Render base y luego resaltado no lo implementamos para mantener simple;
  // simplemente actualizamos tarjetas en base a filtros manuales:
  const selAsig = document.getElementById("filter-asignatura");
  const selNivel = document.getElementById("filter-nivel");
  const checkPrior = document.getElementById("filter-prioritario");
  if (selAsig) selAsig.value = "";
  if (selNivel) selNivel.value = "";
  if (checkPrior) checkPrior.checked = false;

  // Render normal y luego ocultar los que no aplican
  renderOACards();
  if (term) {
    const cards = document.querySelectorAll(".oa-card");
    cards.forEach((card) => {
      const id = card.dataset.oaId;
      const oa = oaData.find((o) => o.id === id);
      if (
        !(
          oa.titulo.toLowerCase().includes(term) ||
          oa.asignatura.toLowerCase().includes(term) ||
          oa.nivel.toLowerCase().includes(term) ||
          oa.codigo.toLowerCase().includes(term)
        )
      ) {
        card.style.display = "none";
      } else {
        card.style.display = "";
      }
    });
  }
}

// Cambio ES / EN simple
function swapLanguage(lang) {
  const map = {
    "filtros-oa": {
      es: "Filtros & resumen",
      en: "Filters & overview"
    },
    "lista-oa": {
      es: "OA priorizados por asignatura",
      en: "Prioritized LO by subject"
    },
    "detalle-rapido": {
      es: "Detalle rápido del OA",
      en: "Quick LO detail"
    }
  };

  Object.keys(map).forEach((key) => {
    const el = document.querySelector(`[data-i18n="${key}"]`);
    if (el) el.textContent = map[key][lang];
  });

  const narrator = document.getElementById("narrator-text");
  if (narrator) {
    narrator.textContent =
      lang === "es"
        ? "Explora los Objetivos de Aprendizaje priorizados, filtra por asignatura y nivel, y abre la vista de estudiante o docente para ver las secuencias de clases, recursos XR (3D, AR, VR), rúbricas, evaluaciones, KPSI, quiz y ticket de salida."
        : "Explore prioritized learning objectives, filter by subject and grade, and open the student or teacher view to see lesson sequences, XR resources (3D, AR, VR), rubrics, assessments, KPSI, quiz and exit ticket.";
  }
}

// Footer
function setFooterYear() {
  const span = document.getElementById("footer-year");
  if (span) span.textContent = new Date().getFullYear();
}

// Modal events
function setupModalEvents() {
  const modal = document.getElementById("oa-modal");
  const closeBtn = document.getElementById("modal-close");
  const backdrop = document.querySelector("#oa-modal .modal-backdrop");
  if (closeBtn) closeBtn.addEventListener("click", closeOAModal);
  if (backdrop) backdrop.addEventListener("click", closeOAModal);

  document.querySelectorAll(".modal-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      setModalTab(btn.dataset.tab);
    });
  });
}

// PWA: registrar service worker
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("service-worker.js")
      .catch((err) => console.error("SW error", err));
  }
}


document.addEventListener("DOMContentLoaded", () => {
  loadOAData()
    .catch(() => {
      // Si falla la carga del JSON, usamos los datos de respaldo
      console.warn("Fallo al cargar oa-data.json, usando oaDataFallback");
    })
    .finally(() => {
      initFilters();
      renderOACards();
      initCharts();
      setupControls();
      setupModalEvents();
      setFooterYear();
      registerServiceWorker();
    });
});

