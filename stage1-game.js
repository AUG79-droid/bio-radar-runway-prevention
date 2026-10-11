/* BIO-RADAR Stage 1: six contextual decisions followed by an airfield-wide choice.
   All scenario observations are hypothetical training data, not live aerodrome records. */
(() => {
  "use strict";
  const params = new URLSearchParams(location.search);
  let savedLang = "";
  try { savedLang = localStorage.getItem("bio-radar-language") || ""; } catch (_) {}
  const lang = (params.get("hubLang") || params.get("lang") || savedLang) === "en" ? "en" : "es";
  const es = lang === "es";
  const T = (en, spanish) => es ? spanish : en;
  const cases = [
    {
      id: 1, name: ["Grass and feeding area", "Pradera y zona de alimentación"],
      evidence: ["Training observation: groups of birds have been observed feeding in the grass near the manoeuvring area on several patrols. Their movements must be checked against aircraft activity.",
        "Observación simulada: en varias patrullas se han visto grupos de aves alimentándose en la pradera próxima al área de movimientos. Hay que comprobar si sus desplazamientos coinciden con la operación aérea."],
      question: ["What is the most appropriate first control?", "¿Cuál es la primera actuación más adecuada?"],
      options: [
        {name:["Mow every grassed area as short as possible","Segar toda la vegetación al mínimo"],description:["Assume uniformly short grass always reduces birds.","Suponer que el césped muy corto siempre reduce la presencia de aves."],result:["Not necessarily. Very short vegetation can expose prey and attract other species; grass management must be site-specific.","No necesariamente. La vegetación muy corta puede dejar presas expuestas y atraer otras especies; su gestión debe adaptarse al emplazamiento."],good:false},
        {name:["Identify attractants and adjust habitat management","Identificar los atractores y ajustar el hábitat"],description:["Record species, food sources, time of day and movements before selecting a targeted grass-management measure.","Registrar especies, alimento, horario y desplazamientos antes de elegir una medida de gestión de la vegetación."],result:["Appropriate: a targeted action addresses the cause and can be verified through follow-up observations.","Adecuado: una actuación específica aborda la causa y puede comprobarse mediante observaciones posteriores."],good:true},
        {name:["Rely on regular vehicle patrols alone","Limitarse a patrullas de vehículos"],description:["Disperse visible birds but leave their feeding conditions unchanged.","Dispersar las aves visibles sin modificar las condiciones que las atraen."],result:["This is mainly reactive: the animals may return if food and suitable habitat remain available.","Es una medida principalmente reactiva: las aves pueden regresar si siguen encontrando alimento y hábitat adecuado."],good:false}
      ]
    },
    {
      id: 2, name:["Standing water after rainfall","Agua acumulada tras la lluvia"],
      evidence:["Training observation: standing water near the operating area is used by waterbirds after rain; its duration and connection to flight paths are not yet quantified.",
        "Observación simulada: tras la lluvia, aves acuáticas utilizan una zona encharcada cercana al área operativa; aún no se han cuantificado su persistencia ni su relación con las trayectorias de vuelo."],
      question:["How would you manage this attraction?","¿Cómo gestionarías este foco de atracción?"],
      options:[
        {name:["Keep dispersing birds without treating the water","Ahuyentar aves sin actuar sobre el agua"],description:["Send a patrol whenever birds gather.","Enviar una patrulla cada vez que se agrupen aves."],result:["The attractant remains; repeated dispersal alone may become less effective and increase operational effort.","El atractivo permanece: la dispersión repetida puede perder eficacia y consumir recursos operativos."],good:false},
        {name:["Drain all wetlands without assessment","Desecar todas las zonas húmedas sin evaluación"],description:["Treat any waterbody as unacceptable, regardless of ecological and legal context.","Considerar inaceptable cualquier masa de agua, sin valorar su contexto ecológico y legal."],result:["Disproportionate: protected habitats, permits, drainage performance and unintended consequences must be checked.","Desproporcionado: deben revisarse hábitats protegidos, autorizaciones, drenaje y efectos no deseados."],good:false},
        {name:["Assess risk and manage avoidable standing water","Evaluar el riesgo y gestionar el agua evitable"],description:["Measure persistence and bird movements; study lawful drainage or other controls where needed.","Medir la duración del encharcamiento y los movimientos de aves; estudiar medidas de drenaje legales u otros controles cuando corresponda."],result:["Appropriate: reduce an avoidable attractant where justified, protecting legally sensitive areas and verifying results.","Adecuado: reducir un foco evitable cuando esté justificado, proteger las zonas legalmente sensibles y verificar el resultado."],good:true}
      ]
    },
    {
      id:3,name:["Hangar roofs and possible nesting","Cubiertas de hangares y posible nidificación"],
      evidence:["Training observation: birds repeatedly use flat-roofed hangars. Nesting activity and species protection status are not confirmed.",
        "Observación simulada: hay aves que utilizan repetidamente las cubiertas planas de los hangares. No se ha confirmado si están nidificando ni su situación de protección."],
      question:["What would you do first?","¿Qué harías primero?"],
      options:[
        {name:["Remove any nest immediately","Retirar cualquier nido inmediatamente"],description:["Treat all roof activity as an obstacle to remove without checks.","Tratar toda presencia en cubierta como algo que debe eliminarse sin comprobaciones."],result:["Unsafe and potentially unlawful: identify the species, nest status and applicable permissions before intervening.","Inadecuado y potencialmente ilegal: primero hay que identificar la especie, la situación del nido y las autorizaciones pertinentes."],good:false},
        {name:["Ignore roof activity until a collision occurs","Ignorar la actividad hasta que haya una colisión"],description:["Take no action unless an incident is reported.","No actuar salvo que se notifique un incidente."],result:["A missed opportunity for prevention: repeated roof use may contribute to dangerous movements near aircraft.","Se pierde la oportunidad de prevenir: la presencia repetida puede originar desplazamientos peligrosos cerca de las aeronaves."],good:false},
        {name:["Verify species and plan lawful prevention","Verificar especies y planificar la prevención legal"],description:["Inspect safely, assess nesting/protection status and plan proportionate future prevention with operations and environmental specialists.","Inspeccionar con seguridad, comprobar la nidificación y protección, y planificar medidas preventivas proporcionadas con operaciones y especialistas ambientales."],result:["Appropriate: prevention and immediate operational risk controls must comply with wildlife-protection obligations.","Adecuado: la prevención y los controles operativos inmediatos deben cumplir las obligaciones de protección de fauna."],good:true}
      ]
    },
    {
      id:4,name:["Waste and service compound","Residuos y zona de servicios"],
      evidence:["Training observation: uncovered refuse attracts birds to the service area. Their route towards the runway needs to be checked.",
        "Observación simulada: unos residuos sin cubrir atraen aves a la zona de servicios. Hay que comprobar su recorrido hacia la pista."],
      question:["Which intervention addresses the cause?","¿Qué actuación aborda la causa?"],
      options:[
        {name:["Seal containers and improve waste handling","Cerrar contenedores y mejorar la gestión de residuos"],description:["Control access to food, collection schedules, cleaning and bird observations.","Controlar el acceso al alimento, la frecuencia de retirada, la limpieza y las observaciones de aves."],result:["Appropriate: it reduces the food attractant and supports a measurable decrease in repeat visits.","Adecuado: reduce el atractivo alimentario y permite medir si disminuyen las visitas repetidas."],good:true},
        {name:["Use sound deterrents every time birds arrive","Usar disuasión sonora cuando aparezcan aves"],description:["Leave the refuse accessible and disperse birds when observed.","Dejar los residuos accesibles y ahuyentar a las aves cuando aparezcan."],result:["This treats the symptom while leaving the food source in place; habituation is also possible.","Actúa sobre el síntoma y mantiene el alimento disponible; además, puede producirse habituación."],good:false},
        {name:["Increase collection frequency but leave containers open","Recoger más a menudo, pero dejar los contenedores abiertos"],description:["Remove waste more often without closing access points.","Retirar residuos con más frecuencia sin cerrar los puntos de acceso."],result:["Partial control: food may still be available between collections, so the main attraction remains.","Control parcial: el alimento puede seguir disponible entre recogidas y mantenerse la atracción."],good:false}
      ]
    },
    {
      id:5,name:["Bird movements across the flight path","Cruces de aves por la trayectoria de vuelo"],
      evidence:["Training observation: a flock has crossed the departure path while aircraft movements were scheduled. The current position of the flock must be verified before a release decision.",
        "Observación simulada: una bandada ha cruzado la trayectoria de salida cuando había movimientos programados. Es necesario comprobar su ubicación actual antes de autorizar una salida."],
      question:["What is the appropriate operational response?","¿Qué respuesta operativa corresponde?"],
      options:[
        {name:["Release departure because the runway looks clear","Autorizar la salida porque la pista parece libre"],description:["Ignore birds moving through the climb-out or approach path.","Ignorar las aves que se desplazan por la trayectoria de ascenso o aproximación."],result:["The pavement may be clear while the departure path remains hazardous; visual runway clearance is not enough.","La superficie puede estar libre mientras la trayectoria de salida sigue siendo peligrosa; no basta con mirar la pista."],good:false},
        {name:["Coordinate a temporary hold and reassess","Coordinar una espera temporal y reevaluar"],description:["Alert operations, monitor the flock and use trained lawful controls before reassessing departure exposure.","Avisar a operaciones, seguir la bandada y aplicar controles legales por personal formado antes de reevaluar la exposición de la salida."],result:["Appropriate: use operational coordination and verified information before accepting the residual risk.","Adecuado: coordinar la operación y comprobar la información antes de aceptar el riesgo residual."],good:true},
        {name:["Cancel all flying for the remainder of the day","Cancelar todos los vuelos durante el resto del día"],description:["Assume a single sighting always makes the full day unsafe.","Suponer que una observación obliga siempre a suspender toda la jornada."],result:["May be disproportionate: the decision should depend on updated risk, operating procedures and the effectiveness of available controls.","Puede ser desproporcionado: depende del riesgo actualizado, los procedimientos y la eficacia de los controles disponibles."],good:false}
      ]
    },
    {
      id:6,name:["Taxiway verges and prey for raptors","Márgenes de rodaje y presas de rapaces"],
      evidence:["Training observation: raptors have been observed hunting along the taxiway verge. A possible small-mammal prey source is suspected but not yet confirmed.",
        "Observación simulada: se han visto rapaces cazando en el margen de una calle de rodaje. Se sospecha que hay pequeños mamíferos, pero aún no se ha confirmado."],
      question:["How do you investigate and reduce this risk?","¿Cómo investigarías y reducirías este riesgo?"],
      options:[
        {name:["Remove all vegetation immediately","Eliminar inmediatamente toda la vegetación"],description:["Assume bare soil will eliminate prey and raptors.","Suponer que dejar el suelo desnudo eliminará las presas y las rapaces."],result:["Not evidence-based: the intervention can expose prey, cause erosion and create other attractants.","No se basa en evidencias: la actuación puede dejar presas expuestas, generar erosión y crear otros atractores."],good:false},
        {name:["Survey prey and adapt verge management","Estudiar las presas y ajustar la gestión del margen"],description:["Confirm species and activity, review the habitat and coordinate proportionate control measures.","Confirmar especies y actividad, revisar el hábitat y coordinar medidas de control proporcionadas."],result:["Appropriate: identify the food chain and modify the conditions that create repeated hazardous bird activity.","Adecuado: comprender la cadena alimentaria y modificar las condiciones que provocan actividad peligrosa repetida."],good:true},
        {name:["Use deterrents only when a raptor is sighted","Usar disuasión solo cuando aparezca una rapaz"],description:["React to each observation without assessing prey or habitat.","Reaccionar ante cada observación sin estudiar las presas ni el hábitat."],result:["Short-term response alone leaves the feeding opportunity untouched; recurrent use of the zone may continue.","La respuesta puntual deja intacta la oportunidad de alimentación; puede mantenerse el uso recurrente de la zona."],good:false}
      ]
    }
  ];
  const byId = Object.fromEntries(cases.map(c => [String(c.id), c]));
  const screen = document.getElementById("mission1");
  const info = document.getElementById("hotInfo");
  const choiceSet = screen?.querySelector('.choice-set[data-stage="1"]');
  const evalButton = document.getElementById("eval1");
  const evalActions = evalButton?.closest(".actions");
  const feedback = document.getElementById("fb1");
  if (!screen || !info || !choiceSet || !evalActions || !feedback || typeof state === "undefined") return;

  state.hotDecisions = state.hotDecisions || {};
  let activeId = null;
  const progress = document.createElement("div");
  progress.id = "stage1Progress";
  progress.className = "stage1-progress";
  progress.setAttribute("role", "status");
  progress.setAttribute("aria-live", "polite");
  info.before(progress);
  const spotPanel = document.createElement("section");
  spotPanel.id = "stage1Decision";
  spotPanel.className = "stage1-spot";
  spotPanel.setAttribute("aria-label", T("Decision for selected location", "Decisión para la zona seleccionada"));
  info.after(spotPanel);

  const globalSection = document.createElement("section");
  globalSection.id = "stage1Final";
  globalSection.className = "stage1-final";
  globalSection.hidden = true;
  globalSection.innerHTML = `<div class="stage1-final-title">${T("FINAL DECISION · WHOLE AIRFIELD", "DECISIÓN FINAL · TODO EL AERÓDROMO")}</div><h3>${T("Which risk should be prioritised across the whole airfield?", "¿Qué riesgo debe tener prioridad en todo el aeródromo?")}</h3><p>${T("Now use the six inspections to choose one overall management strategy. This is separate from the decisions at each location.", "Ahora utiliza las seis inspecciones para elegir una estrategia de gestión global. Esta decisión es distinta de las que has tomado en cada zona.")}</p>`;
  choiceSet.before(globalSection);
  globalSection.append(choiceSet, evalActions);

  function decisionsCount() { return Object.keys(state.hotDecisions).length; }
  function updateProgress() {
    const count = decisionsCount();
    const done = count === 6;
    progress.innerHTML = `<strong>${T("Inspection decisions", "Decisiones de inspección")}: ${count}/6</strong>
      <span>${done ? T("All locations assessed. Now choose the overall priority below.", "Has evaluado las seis zonas. Ahora elige la prioridad global más abajo.") :
      T("Select a numbered area, read the evidence and decide what to do. Each number has different options.", "Selecciona una zona numerada, lee los datos y decide qué hacer. Cada número tiene opciones diferentes.")}</span>
      ${done ? `<button type="button" class="stage1-jump" id="stage1Jump">${T("Go to final decision ↓", "Ir a la decisión final ↓")}</button>` : ""}`;
    globalSection.hidden = !done;
    progress.querySelector("#stage1Jump")?.addEventListener("click", () => globalSection.scrollIntoView({behavior:"smooth",block:"start"}));
    screen.querySelectorAll(".hotspot").forEach(button => {
      const id = String([...screen.querySelectorAll(".hotspot")].indexOf(button) + 1);
      const chosen = state.hotDecisions[id] !== undefined;
      button.classList.toggle("seen", chosen);
      button.classList.toggle("active-hotspot", id === activeId);
      button.setAttribute("aria-pressed", id === activeId ? "true" : "false");
      button.title = `${T("Area", "Zona")} ${id}: ${byId[id].name[es?1:0]} — ${chosen?T("decision recorded","decisión registrada"):T("pending decision","decisión pendiente")}`;
    });
  }

  function renderCase(id) {
    activeId = String(id);
    const c = byId[activeId], selected = state.hotDecisions[activeId];
    info.innerHTML = `<b>${T("LOCATION", "ZONA")} ${c.id} · ${c.name[es?1:0]}</b><p>${c.evidence[es?1:0]}</p><small>${T("Scenario evidence is simulated for learning.", "Los datos del escenario son simulados para el aprendizaje.")}</small>`;
    spotPanel.innerHTML = `<h3>${c.question[es?1:0]}</h3><div class="stage1-options" role="group" aria-label="${T("Choose an action for area","Elige una actuación para la zona")} ${c.id}">${c.options.map((o,i)=>`<button type="button" class="stage1-option ${selected===i?"chosen":""}" data-case="${c.id}" data-action="${i}" aria-pressed="${selected===i}" ${state.completed["1"]?"disabled":""}><span class="stage1-option-letter">${"ABC"[i]}</span><span><strong>${o.name[es?1:0]}</strong><small>${o.description[es?1:0]}</small></span></button>`).join("")}</div><div id="stage1Outcome" class="stage1-outcome" aria-live="polite">${selected===undefined?T("Choose A, B or C to see what would happen. You can revise your decision before evaluating the stage.","Elige A, B o C para ver qué ocurriría. Puedes cambiar la decisión antes de evaluar la etapa."): `<strong>${c.options[selected].good?T("Appropriate action","Actuación adecuada"):T("Risk or limitation","Riesgo o limitación")}</strong><p>${c.options[selected].result[es?1:0]}</p>`}</div>`;
    updateProgress();
  }

  screen.querySelectorAll(".hotspot").forEach((button,index) => {
    const id = String(index+1);
    button.dataset.locationId = id;
    button.onclick = () => renderCase(id);
  });

  spotPanel.addEventListener("click",event => {
    const btn = event.target.closest("button[data-case][data-action]");
    if (!btn || state.completed["1"]) return;
    const id = String(btn.dataset.case), action = Number(btn.dataset.action);
    if (!byId[id] || action < 0 || action > 2) return;
    state.hotDecisions[id] = action;
    state.hot.add(byId[id].id);
    renderCase(id);
    feedback.className = "feedback";
    feedback.textContent = "";
  });

  evalButton.onclick = () => {
    if (decisionsCount() < 6) {
      feedback.className = "feedback show ko";
      feedback.textContent = T("Make a decision at each of the six locations first.","Primero toma una decisión en cada una de las seis zonas.");
      return;
    }
    if (!state.selected["1"]) {
      feedback.className = "feedback show ko";
      feedback.textContent = T("Choose A, B or C for the overall airfield priority.","Elige A, B o C para la prioridad global del aeródromo.");
      return;
    }
    const previouslyScored = Boolean(state.completed["1"]);
    evalStage("1","theory1");
    if (previouslyScored || !state.completed["1"]) return;
    const good = cases.filter(c => c.options[state.hotDecisions[c.id]]?.good).length;
    const bad = 6-good;
    state.safety = clamp(state.safety + good*2 - bad*2);
    state.evidence = clamp(state.evidence + good - bad);
    feedback.insertAdjacentHTML("afterbegin", `<p><strong>${T("Your six location decisions","Tus seis decisiones por zona")}: ${good}/6 ${T("well justified","adecuadas")}.</strong> ${bad ? T("Review the causes and limitations described in the locations you missed.", "Revisa las causas y limitaciones de las zonas donde tu respuesta no fue adecuada.") : T("You have addressed all six local hazards using proportionate, evidence-based controls.", "Has abordado los seis peligros locales con controles proporcionados y basados en evidencias.")}</p>`);
    renderCase(activeId || "1");
    refresh();
  };

  updateProgress();
  info.innerHTML = `<b>${T("Begin your investigation","Comienza tu investigación")}</b><p>${T("Select point 1–6 on the aerial photo. Each location presents a different scenario and three possible actions. Choose one to record your decision.", "Pulsa un número del 1 al 6 sobre la fotografía aérea. Cada zona presenta una situación diferente y tres posibles actuaciones. Elige una para registrar tu decisión.")}</p>`;
  spotPanel.innerHTML = `<p class="stage1-empty">${T("Your first case will appear here when you select a number on the map.", "Tu primer caso aparecerá aquí cuando selecciones un número del mapa.")}</p>`;
})();
