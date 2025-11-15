// Datos de ejemplo de OA priorizados y su estructura de recursos
const oaData = [
  {
    id: "BIO1M_OA5",
    codigo: "OA5",
    asignatura: "Biología",
    nivel: "1° medio",
    prioridad: "prioritario",
    titulo: "Explicar el proceso de fotosíntesis y su importancia para los seres vivos.",
    area: "Ciencias Naturales",
    tags: ["XR", "PEVE", "PIE"],
    xr: { viewer3d: "viewer3d_fotosintesis.html", ar: "viewerAR_fotosintesis.html", vr: "viewerVR_fotosintesis.html" },
    kpsi: [
      "Puedo explicar qué necesita una planta para hacer fotosíntesis.",
      "Puedo dibujar un esquema simple de la fotosíntesis.",
      "Puedo relacionar fotosíntesis con el oxígeno que respiramos."
    ],
    quiz: [
      {
        pregunta: "¿En qué parte de la célula vegetal ocurre principalmente la fotosíntesis?",
        alternativas: ["En el núcleo", "En los cloroplastos", "En la mitocondria", "En la membrana plasmática"],
        correcta: 1
      },
      {
        pregunta: "¿Cuál es el gas que la planta toma del aire para la fotosíntesis?",
        alternativas: ["Oxígeno (O₂)", "Nitrógeno (N₂)", "Dióxido de carbono (CO₂)", "Hidrógeno (H₂)"],
        correcta: 2
      }
    ],
    ticketSalida: [
      "Escribe con tus palabras por qué la fotosíntesis es importante para los animales (incluyendo a las personas).",
      "Dibuja un esquema simple de la fotosíntesis y etiqueta al menos tres elementos."
    ],
    sesiones: [
      {
        titulo: "Sesión 1 – Activación & KPSI XR",
        objetivo: "Activar conocimientos previos y explorar modelos 3D de cloroplasto y hoja.",
        actividades: [
          "Aplicar KPSI de entrada (3–4 ítems) en versión papel o formulario.",
          "Explorar modelo 3D de una hoja y un cloroplasto en el visor 3D.",
          "Lluvia de ideas: ¿qué creen que necesita una planta para vivir?"
        ],
        evaluacion: "Observación de participación y registro rápido en lista de cotejo."
      },
      {
        titulo: "Sesión 2 – Desarrollo guiado con XR",
        objetivo: "Comprender el proceso de fotosíntesis usando apoyos visuales y XR.",
        actividades: [
          "Explicación guiada con apoyo de esquema en pizarra y modelo XR.",
          "Trabajo en parejas con ficha accesible (alto contraste, pictogramas).",
          "Comparar respiración celular y fotosíntesis a nivel muy general."
        ],
        evaluacion: "Preguntas orales focalizadas y revisión de ficha de trabajo."
      },
      {
        titulo: "Sesión 3 – Consolidación & Ticket de salida",
        objetivo: "Sintetizar el proceso de fotosíntesis y verificar comprensión.",
        actividades: [
          "Aplicar quiz breve (4–5 preguntas) en papel o digital.",
          "Completar mapa conceptual o esquema en grupos.",
          "Ticket de salida individual."
        ],
        evaluacion: "Corrección del quiz, revisión de ticket de salida, feedback breve."
      }
    ],
    rubrica: [
      {
        criterio: "Explica el proceso de fotosíntesis con vocabulario científico básico.",
        destacado: "Explica con claridad el proceso completo de fotosíntesis usando términos como cloroplasto, CO₂, glucosa y oxígeno.",
        competente: "Explica las ideas principales de la fotosíntesis, aunque omite algunos términos o pasos.",
        inicial: "Entrega una explicación parcial o confusa, con escasa referencia a conceptos clave."
      },
      {
        criterio: "Utiliza modelos XR/3D para apoyar su explicación.",
        destacado: "Integra adecuadamente el modelo 3D/XR para señalar partes y procesos.",
        competente: "Usa el modelo para identificar algunas partes, aunque con apoyo del docente.",
        inicial: "Presenta dificultad para relacionar el modelo con la explicación."
      }
    ],
    evaluacionDocente: "Puedes registrar resultados del quiz y ticket de salida en una hoja de cálculo o en un registro PEVE, marcando logro por ítem y observaciones cualitativas breves.",
    mineducUrl: "https://www.curriculumnacional.cl/"
  },
  {
    id: "BIO1M_OA6",
    codigo: "OA6",
    asignatura: "Biología",
    nivel: "1° medio",
    prioridad: "prioritario",
    titulo: "Explicar la respiración celular y relacionarla con el uso de energía en el organismo.",
    area: "Ciencias Naturales",
    tags: ["XR", "PEVE"],
    xr: { viewer3d: "viewer3d_mitocondria.html", ar: "viewerAR_mitocondria.html", vr: "viewerVR_mitocondria.html" },
    kpsi: [
      "Puedo decir por qué nuestro cuerpo necesita energía.",
      "Puedo ubicar la mitocondria como parte de la célula.",
      "Puedo comparar de forma simple fotosíntesis y respiración celular."
    ],
    quiz: [
      {
        pregunta: "¿En qué orgánulo ocurre principalmente la respiración celular?",
        alternativas: ["En el cloroplasto", "En la mitocondria", "En el aparato de Golgi", "En el núcleo"],
        correcta: 1
      }
    ],
    ticketSalida: [
      "Completa la frase: La respiración celular permite que la célula obtenga ______ a partir de los nutrientes.",
      "Menciona un ejemplo cotidiano donde uses energía en tu vida diaria."
    ],
    sesiones: [
      {
        titulo: "Sesión 1 – Activación y contraste con fotosíntesis",
        objetivo: "Diferenciar fotosíntesis y respiración celular a nivel general.",
        actividades: [
          "KPSI de entrada y repaso rápido de fotosíntesis.",
          "Análisis de imágenes o modelo XR de mitocondria.",
          "Tabla comparativa guiada (similitudes y diferencias)."
        ],
        evaluacion: "Revisión de tabla comparativa y participación oral."
      }
    ],
    rubrica: [
      {
        criterio: "Relaciona respiración celular con uso de energía en el organismo.",
        destacado: "Da ejemplos claros y correctos de actividades cotidianas que requieren energía y las vincula con la respiración celular.",
        competente: "Menciona algunos ejemplos, aunque con explicaciones parciales.",
        inicial: "Entrega ejemplos confusos o sin relación clara con la respiración celular."
      }
    ],
    evaluacionDocente: "Revisa los productos de los estudiantes (tablas comparativas, respuestas de ticket de salida) y registra si logran diferenciar los procesos clave.",
    mineducUrl: "https://www.curriculumnacional.cl/"
  },
  {
    id: "CN08_OA2",
    codigo: "OA2",
    asignatura: "Ciencias Naturales",
    nivel: "8° básico",
    prioridad: "prioritario",
    titulo: "Investigar y explicar interacciones en ecosistemas considerando flujo de materia y energía.",
    area: "Ciencias Naturales",
    tags: ["IoT", "Invernadero", "PEVE"],
    xr: { viewer3d: "viewer3d_ecosistema.html", ar: "viewerAR_ecosistema.html", vr: "viewerVR_ecosistema.html" },
    kpsi: [
      "Puedo identificar productores, consumidores y descomponedores en un ecosistema.",
      "Puedo leer un gráfico simple con datos de un invernadero o estanque.",
      "Puedo explicar una cadena trófica básica."
    ],
    quiz: [
      {
        pregunta: "En una cadena trófica, las plantas suelen ser:",
        alternativas: ["Consumidores primarios", "Productores", "Descomponedores", "Consumidores secundarios"],
        correcta: 1
      }
    ],
    ticketSalida: [
      "Dibuja una cadena trófica simple usando ejemplos del invernadero o estanque.",
      "Escribe una acción concreta para cuidar el ecosistema del invernadero."
    ],
    sesiones: [
      {
        titulo: "Sesión 1 – Lectura de datos del invernadero/estanque",
        objetivo: "Interpretar datos simples (T°, HR, pH) para describir el estado de un sistema.",
        actividades: [
          "Revisión de tabla o dashboard con datos del invernadero o SIAMP.",
          "Discusión guiada: ¿qué patrones observamos?",
          "Relación con necesidades de los organismos del sistema."
        ],
        evaluacion: "Lista de cotejo sobre lectura e interpretación básica de datos."
      }
    ],
    rubrica: [
      {
        criterio: "Interpreta datos simples para justificar afirmaciones sobre el ecosistema.",
        destacado: "Usa datos de manera precisa para justificar explicaciones sobre el estado del ecosistema.",
        competente: "Usa algunos datos, pero con explicaciones parciales.",
        inicial: "Menciona datos sin conectarlos con explicaciones claras."
      }
    ],
    evaluacionDocente: "Puedes vincular esta experiencia con PEVE mediante preguntas que integren interpretación de gráficos, tablas y explicaciones escritas.",
    mineducUrl: "https://www.curriculumnacional.cl/"
  },
  {
    id: "TEC2M_PROYECTO",
    codigo: "Proyecto",
    asignatura: "Tecnología",
    nivel: "2° medio",
    prioridad: "integrado",
    titulo: "Diseñar y prototipar una solución tecnológica para el invernadero escolar.",
    area: "Tecnología",
    tags: ["IoT", "Diseño 3D", "Proyecto"],
    xr: { viewer3d: "viewer3d_prototipo.html", ar: "viewerAR_prototipo.html", vr: "viewerVR_prototipo.html" },
    kpsi: [
      "Puedo describir un problema del invernadero que se pueda mejorar con tecnología.",
      "Puedo diferenciar entre idea, boceto y prototipo.",
      "Puedo trabajar en equipo respetando turnos y roles."
    ],
    quiz: [
      {
        pregunta: "¿Qué es un prototipo?",
        alternativas: [
          "El producto final terminado",
          "Un modelo inicial que permite probar y mejorar una solución",
          "Un dibujo decorativo",
          "Una lista de materiales"
        ],
        correcta: 1
      }
    ],
    ticketSalida: [
      "Escribe en una frase clara el problema que tu grupo quiere resolver en el invernadero.",
      "Dibuja un boceto rápido de tu idea de solución."
    ],
    sesiones: [
      {
        titulo: "Sesión 1 – Problema y usuarios",
        objetivo: "Identificar y definir un problema concreto del invernadero.",
        actividades: [
          "Recorrido guiado (presencial o virtual) por el invernadero.",
          "Lluvia de ideas de problemas observados.",
          "Priorización y redacción de problema elegido."
        ],
        evaluacion: "Revisión del enunciado de problema y participación en el grupo."
      }
    ],
    rubrica: [
      {
        criterio: "Define con claridad el problema tecnológico a resolver.",
        destacado: "Formula un problema específico, realista y conectado con el contexto del invernadero.",
        competente: "Formula un problema comprensible, aunque amplio o poco acotado.",
        inicial: "Formula un problema confuso o muy general."
      }
    ],
    evaluacionDocente: "Elabora una rúbrica simple para evaluar el enunciado de problema, el trabajo colaborativo y la calidad del prototipo.",
    mineducUrl: "https://www.curriculumnacional.cl/"
  }
];

// Estado global simple
let currentLang = "es";
let currentFontSize = 16;
let currentSelectedOA = null;

// Render de filtros base
function initFilters() {
  const asignaturas = [...new Set(oaData.map((oa) => oa.asignatura))].sort();
  const niveles = [...new Set(oaData.map((oa) => oa.nivel))].sort();

  const selAsig = document.getElementById("filter-asignatura");
  const selNivel = document.getElementById("filter-nivel");

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

  selAsig.addEventListener("change", renderOACards);
  selNivel.addEventListener("change", renderOACards);
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

  const filtered = oaData.filter((oa) => {
    if (selAsig && oa.asignatura !== selAsig) return false;
    if (selNivel && oa.nivel !== selNivel) return false;
    if (soloPrioritario && oa.prioridad !== "prioritario") return false;
    return true;
  });

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
    alert("Idea: abriría un template de registro CSV / Google Sheets para este OA.");
    return;
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
  initFilters();
  renderOACards();
  initCharts();
  setupControls();
  setupModalEvents();
  setFooterYear();
  registerServiceWorker();
});
