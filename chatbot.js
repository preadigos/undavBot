const faqs = [{
        q: "¿Qué es la UNDAV?",
        a: "La UNDAV (Universidad Nacional de Avellaneda) es una universidad pública argentina ubicada en Avellaneda, Buenos Aires. Ofrece carreras de grado, posgrado, tecnicaturas y actividades de extensión, con el objetivo de brindar educación superior de calidad, gratuita e inclusiva."
    },
    {
        q: "¿La universidad es gratuita?",
        a: "Sí, la UNDAV es una universidad pública y gratuita que estamos construyendo entre todos. Está conformada por una comunidad de docentes, estudiantes y no docentes, que fortalecen todos juntos un proyecto educativo, el cual integra el conocimiento académico, de investigación y los saberes sociales."
    },
    {
        q: "¿Cuáles son las carreras que ofrece la UNDAV?",
        a: [
            `<b>Departamento de Ambiente y Turismo</b><ul style='margin-top:4px;margin-bottom:8px;'>
                <li>Ciencias Ambientales</li>
                <li>Conservación de la Naturaleza y Áreas Naturales Protegidas</li>
                <li>Turismo</li>
                <li>Guía universitario en Turismo</li>
            </ul>`,
            `<b>Departamento de Arquitectura, Diseño y Urbanismo</b><ul style='margin-top:4px;margin-bottom:8px;'>
                <li>Arquitectura</li>
                <li>Diseño Industrial</li>
                <li>Diseño de Marcas y Envases</li>
                <li>CCC Licenciatura en Diseño Industrial</li>
                <li>Tecnicatura en Intervención Sociocomunitaria</li>
            </ul>`,
            `<b>Departamento de Ciencias Sociales</b><ul style='margin-top:4px;margin-bottom:8px;'>
                <li>Abogacía</li>
                <li>Economía</li>
                <li>Tecnicatura en Gestión Universitaria</li>
            </ul>`,
            `<b>Departamento de Cultura, Arte y Comunicación</b><ul style='margin-top:4px;margin-bottom:8px;'>
                <li>Artes Audiovisuales</li>
                <li>Gestión Cultural</li>
                <li>Periodismo</li>
                <li>CCC Licenciatura en Periodismo</li>
                <li>CCC Licenciatura en Gestión Cultural</li>
                <li>CCC Licenciatura en Historia</li>
                <li>Tecnicatura en Dirección de Orquestas y Coros Infantiles y Juveniles</li>
                <li>CCC en Museología y Repositorios Culturales y Naturales</li>
                <li>Tecnicatura en Política, Gestión y Comunicación</li>
                <li>CCC Licenciatura en Comunicación Política</li>
            </ul>`,
            `<b>Departamento de Salud y Actividad Física</b><ul style='margin-top:4px;margin-bottom:8px;'>
                <li>Enfermería</li>
                <li>Actividad Física y Deporte</li>
                <li>Tecnicatura Universitaria en Prótesis Dental</li>
                <li>CCC Licenciatura en Actividad Física y Deporte</li>
            </ul>`,
            `<b>Departamento de Tecnología y Administración</b><ul style='margin-top:4px;margin-bottom:8px;'>
                <li>Ingeniería en Informática</li>
                <li>Ingeniería en Materiales</li>
                <li>Licenciatura en Gerencia de Empresas</li>
                <li>CCC Licenciatura en Higiene y Seguridad en el Trabajo</li>
                <li>Tecnicatura Universitaria en Mantenimiento Industrial del Sector Automotriz</li>
                <li>Tecnicatura Universitaria en Seguridad e Higiene de la Industria Mecánico-Automotriz</li>
            </ul>`,
            `<p>Si querés saber cómo inscribirte, consultá <a href='https://undav.edu.ar/index.php?idcateg=5' target='_blank'>acá</a>.</p>`
        ]
    },
    {
        q: "¿Qué sedes tiene la UNDAV?",
        a: "Estas son nuestras sedes:<br>" +
            "<strong>Sede España, Rectorado:</strong><br>" +
            "España 350 esq. Colón, Avellaneda | 5436-7553<br>" +
            "<strong>Sede Piñeyro:</strong> Mario Bravo 1460 esq. Isleta, Piñeyro<br>" +
            "<strong>Sede 12 de Octubre:</strong> 12 de Octubre 463, Avellaneda<br>" +
            "<strong>Sede Arenales:</strong> Arenales 320, Avellaneda<br>" +
            "<strong>Sede Constitución:</strong> Constitución 627, Avellaneda<br>" +
            "<strong>Escuela Secundaria Técnica UNDAV:</strong> Av. Ramón Franco 6475, Wilde | (54 11) 2142-4477"
    },
    {
        q: "¿Cómo me inscribo?",
        a: "Podés inscribirte en línea durante el período de inscripción. Podés encontrar toda la información <a href='https://undav.edu.ar/index.php?idcateg=5' target='_blank'>acá</a>."
    },
    {
        q: "¿El título es valido?",
        a: "Todos nuestros títulos están avalados por la CONEAU. Podés consultar más información <a href='https://www.undav.edu.ar/index.php?idcateg=238' target='_blank'>acá</a>."
    },
    {
        q: "¿Dónde consulto mis materias?",
        a: "Toda la información de las materias e inscripción a las mismas se encuentra en el sistema SIU Guaraní. Podés acceder a él <a href='https://academica.undav.edu.ar/g3w/' target='_blank'>acá</a>."
    },
    {
        q: "¿Cómo accedo al campus virtual?",
        a: "Para acceder al campus virtual podes ingresar desde <a href='https://ead.undav.edu.ar/' target='_blank'>acá</a>."
    },
    {
        q: "¿Cómo es el proceso de tesis?",
        a: "El proceso de tesis varía según la carrera. Generalmente, incluye la elección de un tema, la asignación de un director de tesis, la elaboración del proyecto, la investigación y finalmente la defensa oral. Para más detalles específicos podes revisar <a href='https://undav.edu.ar/index.php?idcateg=408' target='_blank'>acá</a>."
    },
    {
        q: "¿Dónde puedo encontrar el calendario academíco?",
        a: "Podés encontrar el calendario académico <a href='https://undav.edu.ar/index.php?idcateg=129' target='_blank'>acá</a>."
    },
    {
        q: "¿Cuáles son los requisitos para inscribirme en una carrera?",
        a: "Los requisitos generales son: título secundario completo, DNI, y completar el formulario de inscripción online. Podés consultar los requisitos específicos y la documentación necesaria en la sección de inscripciones de la web de la UNDAV."
    },
    {
        q: "¿Dónde puedo consultar el estado de mi inscripción?",
        a: "El estado de tu inscripción lo podés consultar ingresando al sistema SIU Guaraní con tu usuario y contraseña. Si tenés dudas, podés comunicarte con tramitesestudiantes@undav.edu.ar."
    },
    {
        q: "¿Cómo solicito un certificado de alumno regular?",
        a: "Podés solicitar tu certificado de alumno regular a través del SIU Guaraní o enviando un correo a tramitesestudiantes@undav.edu.ar indicando tu nombre completo, DNI y carrera."
    },
    {
        q: "¿Qué debo hacer si olvido mi contraseña del SIU Guaraní?",
        a: "Si olvidaste tu contraseña, en la pantalla de acceso al SIU Guaraní hay una opción para recuperarla. Seguí los pasos indicados o escribí a soporte@undav.edu.ar si necesitás ayuda."
    },
    {
        q: "¿Cómo puedo contactar a la Secretaría Académica?",
        a: "Podés comunicarte con la Secretaría Académica enviando un correo a secretaria.academica@undav.edu.ar o consultando los datos de contacto en la web institucional."
    },
    {
        q: "¿Cómo accedo a la biblioteca digital de la UNDAV?",
        a: "Podés acceder a la biblioteca digital ingresando a la web de la UNDAV, sección ‘Biblioteca’, o consultando directamente en biblioteca@undav.edu.ar."
    },
    {
        q: "¿Qué hago si tengo problemas con el campus virtual?",
        a: "Si tenés problemas para acceder o usar el campus virtual, podés escribir a soporte@undav.edu.ar detallando tu inconveniente, o consultar la sección de ayuda en el propio campus."
    },
    {
        q: "¿Cómo puedo hacer una consulta específica sobre mi situación académica?",
        a: "Para consultas académicas específicas, te recomendamos contactar directamente a tu facultad o departamento a través de los correos electrónicos institucionales. También podés acercarte personalmente a las sedes de la UNDAV."
    },
    {
        q: "¿La UNDAV ofrece cursos de idiomas?",
        a: "Sí, la UNDAV ofrece cursos de idiomas extranjeros. Podés consultar la oferta académica de idiomas en la sección de idiomas de la web de la UNDAV."
    },
    {
        q: "¿Puedo cursar materias de diferentes carreras a la vez?",
        a: "Sí, podés cursar materias de diferentes carreras, pero tené en cuenta que cada carrera tiene su propio plan de estudios y requisitos. Es recomendable que consultes con un asesor académico."
    },
    {
        q: "¿Cómo se organiza el año académico en la UNDAV?",
        a: "El año académico en la UNDAV se organiza en dos cuatrimestres. Cada cuatrimestre tiene un período de clases, un receso y un período de exámenes. Podés consultar el calendario académico para más detalles."
    },
    {
        q: "¿Qué actividades extracurriculares ofrece la UNDAV?",
        a: "La UNDAV ofrece actividades extracurriculares como talleres, seminarios, actividades deportivas, culturales y de extensión. Estas actividades están destinadas a complementar tu formación académica."
    },
    {
        q: "¿Cómo puedo participar en actividades de extensión universitaria?",
        a: "Para participar en actividades de extensión universitaria, estate atento a los anuncios en la web de la UNDAV y en las redes sociales. También podés consultar directamente en tu facultad."
    },
    {
        q: "¿Qué es el programa de Tutorías y cómo funciona?",
        a: "El programa de Tutorías es un espacio de acompañamiento académico. Funciona a través de la asignación de un tutor que te guiará en tu trayectoria académica. Para más información, consultá en tu facultad."
    },
    {
        q: "¿La UNDAV tiene convenios con otras universidades?",
        a: "Sí, la UNDAV tiene convenios con diversas universidades nacionales e internacionales. Estos convenios permiten el intercambio académico y la realización de actividades conjuntas."
    },
    {
        q: "¿Cómo puedo acceder a programas de intercambio estudiantil?",
        a: "Para acceder a programas de intercambio estudiantil, consultá la sección de movilidad estudiantil en la web de la UNDAV. Allí encontrarás información sobre los convenios y el proceso de inscripción."
    },
    {
        q: "¿Qué debo hacer si tengo una consulta o reclamo sobre el servicio educativo?",
        a: "Si tenés un reclamo o consulta sobre el servicio educativo, podés hacerlo a través del sistema de reclamos en la web de la UNDAV o enviando un correo a la dirección correspondiente que encuentres en la sección de contacto."
    },
    {
        q: "¿Cómo se financia la UNDAV?",
        a: "La UNDAV se financia a través de fondos públicos nacionales y provinciales, y de recursos propios. Como universidad pública, no cobra matrícula ni aranceles por sus carreras de grado."
    },
    {
        q: "¿Qué es el Consejo Superior y cuál es su función?",
        a: "El Consejo Superior es el órgano máximo de gobierno de la UNDAV. Su función es definir las políticas generales de la universidad, aprobar presupuestos y supervisar la gestión del rectorado."
    },
    {
        q: "¿Cómo se elige al rector de la UNDAV?",
        a: "El rector de la UNDAV es elegido por el Consejo Superior entre sus miembros. La elección se realiza por voto secreto y directo de los consejeros."
    },
    {
        q: "¿Qué es la CONEAU?",
        a: "La CONEAU (Comisión Nacional de Evaluación y Acreditación Universitaria) es el organismo encargado de evaluar y acreditar las universidades y carreras en Argentina. Su objetivo es garantizar la calidad educativa."
    },
    {
        q: "¿Cómo se realiza la inscripción a las materias?",
        a: "La inscripción a las materias se realiza a través del sistema SIU Guaraní, durante los períodos establecidos en el calendario académico. Es importante inscribirse en el plazo correspondiente."
    },
    {
        q: "¿Qué es el régimen de correlatividades?",
        a: "El régimen de correlatividades son los requisitos de aprobación de ciertas materias para poder cursar otras. Está diseñado para asegurar que los estudiantes adquieran los conocimientos necesarios en el orden adecuado."
    },
    {
        q: "¿La UNDAV tiene un programa de educación a distancia?",
        a: "Sí, la UNDAV ofrece carreras y cursos en modalidad a distancia. Esta modalidad permite mayor flexibilidad para el estudio, combinando actividades virtuales y presenciales."
    },
    {
        q: "¿Qué es el Aula Virtual y cómo se utiliza?",
        a: "El Aula Virtual es la plataforma de la UNDAV para la educación a distancia. A través de ella, los estudiantes pueden acceder a materiales de estudio, realizar actividades y comunicarse con docentes y compañeros."
    },
    {
        q: "¿Cómo se evalúa en las materias a distancia?",
        a: "La evaluación en las materias a distancia puede incluir exámenes, trabajos prácticos, foros de discusión y otras actividades. Los criterios de evaluación están detallados en cada materia."
    },
    {
        q: "¿Qué hacer si tengo problemas técnicos con el Aula Virtual?",
        a: "Si tenés problemas técnicos con el Aula Virtual, podés contactar al soporte técnico de la UNDAV a través de soporte@undav.edu.ar o consultar la sección de ayuda de la plataforma."
    },
    {
        q: "¿La UNDAV ofrece actividades deportivas?",
        a: "Sí, la UNDAV ofrece una variedad de actividades deportivas. Los estudiantes pueden participar en deportes individuales y en equipo, y acceder a instalaciones deportivas."
    },
    {
        q: "¿Cómo puedo inscribirme en las actividades deportivas?",
        a: "Para inscribirte en las actividades deportivas, debés consultar la oferta deportiva en la web de la UNDAV y completar el formulario de inscripción correspondiente."
    },
    {
        q: "¿Qué es el Programa de Intercambio Académico?",
        a: "El Programa de Intercambio Académico permite a los estudiantes realizar parte de sus estudios en universidades extranjeras con las que la UNDAV tiene convenios. Es una experiencia enriquecedora a nivel académico y personal."
    },
    {
        q: "¿Cómo puedo postularme para el Programa de Intercambio Académico?",
        a: "Para postularte, debés cumplir con ciertos requisitos académicos y de idioma. La inscripción se realiza a través de la web de la UNDAV, donde encontrarás más información y el formulario de postulación."
    },
    {
        q: "¿Qué es el Programa de Becas de Grado?",
        a: "El Programa de Becas de Grado de la UNDAV está destinado a estudiantes de carreras de grado que necesiten apoyo económico. Las becas pueden cubrir parcial o totalmente el costo de la matrícula y otros gastos académicos."
    },
    {
        q: "¿Cómo se solicita una Beca de Grado?",
        a: "La solicitud de Beca de Grado se realiza online, completando un formulario y presentando la documentación requerida. Los detalles del proceso están disponibles en la sección de becas de la web de la UNDAV."
    },
    {
        q: "¿Qué requisitos se necesitan para acceder a una beca?",
        a: "Los requisitos para acceder a una beca varían según el tipo de beca y la convocatoria. Generalmente, se considera el rendimiento académico y la situación socioeconómica del estudiante."
    },
    {
        q: "¿La UNDAV tiene un servicio de orientación vocacional?",
        a: "Sí, la UNDAV ofrece un servicio de orientación vocacional para ayudar a los estudiantes a definir su proyecto académico y profesional. Se realizan talleres y asesorías personalizadas."
    },
];

const button = document.getElementById('chatbot-button');
const modal = document.getElementById('chatbot-modal');
const close = document.getElementById('close-chat');
const faqList = document.getElementById('faq-list');
const messages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');
const chatInputArea = document.getElementById('chat-input-area');
const backToFaqsButton = document.getElementById('back-to-faqs-button');

function showChatView() {
    faqList.style.display = 'none';
    messages.style.display = 'flex';
    backToFaqsButton.style.display = 'block';
}

function showInitialView() {
    faqList.style.display = 'block';
    messages.style.display = 'none';
    messages.innerHTML = '';
    backToFaqsButton.style.display = 'none';
    // Mensaje de bienvenida arriba de las preguntas frecuentes
    const welcome = document.createElement('div');
    welcome.className = 'faq-welcome message bot';
    welcome.innerHTML = 'Hola, soy UNDAV-BOT. ¿Cómo puedo ayudarte hoy? Acá tenés algunas preguntas frecuentes para que puedas elegir una opción:';
    faqList.innerHTML = '';
    faqList.appendChild(welcome);
    faqs.forEach(item => {
        const btn = document.createElement('button');
        btn.textContent = item.q;
        btn.classList.add('faq-button');
        btn.onclick = () => {
            addMessage("user", item.q);
            showChatView();
            setTimeout(() => {
                if (Array.isArray(item.a)) {
                    let delay = 0;
                    item.a.forEach((msg, idx) => {
                        setTimeout(() => {
                            addBotMessageWithDelay(msg, 1800, idx === item.a.length - 1);
                        }, delay);
                        delay += 2000;
                    });
                } else {
                    addBotMessageWithDelay(item.a, 2200, true);
                }
            }, 400);
        };
        faqList.appendChild(btn);
    });
    // Ajuste: fuerza a que el input quede abajo usando scroll y focus
    setTimeout(() => {
        chatInputArea.scrollIntoView({ behavior: 'auto', block: 'end' });
        chatInput.blur();
    }, 100);
}

button.onclick = () => {
    modal.classList.toggle('hidden');
    if (!modal.classList.contains('hidden')) {
        showInitialView();
    }
};
close.onclick = () => modal.classList.add('hidden');

function addBotMessageWithDelay(text, delay = 2000, showFeedback = false) {
    const typingMsg = document.createElement('div');
    typingMsg.classList.add('message', 'bot');
    typingMsg.innerHTML = '<span class="typing-dots">•••</span>';
    messages.appendChild(typingMsg);
    messages.scrollTop = messages.scrollHeight;
    setTimeout(() => {
        typingMsg.remove();
        addMessage('bot', text, showFeedback);
    }, delay);
}

faqs.forEach(item => {
    const btn = document.createElement('button');
    btn.textContent = item.q;
    btn.classList.add('faq-button');
    btn.onclick = () => {
        addMessage("user", item.q);
        showChatView();
        setTimeout(() => {
            if (Array.isArray(item.a)) {
                let delay = 0;
                item.a.forEach((msg, idx) => {
                    setTimeout(() => {
                        addBotMessageWithDelay(msg, 1800, idx === item.a.length - 1);
                    }, delay);
                    delay += 2000;
                });
            } else {
                addBotMessageWithDelay(item.a, 2200, true);
            }
        }, 400);
    };
    faqList.appendChild(btn);
});

function findBestFaqMatch(userInput) {
    // Normaliza y busca la pregunta más parecida usando coincidencia de palabras clave
    const normalize = str => str.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
    const input = normalize(userInput);
    let bestScore = 0;
    let bestFaq = null;
    faqs.forEach(item => {
        const question = normalize(item.q);
        let score = 0;
        // Suma puntos por palabras en común
        input.split(/\s+/).forEach(word => {
            if (question.includes(word) && word.length > 2) score++;
        });
        // Bonus si la pregunta contiene la frase completa
        if (question.includes(input)) score += 2;
        if (score > bestScore) {
            bestScore = score;
            bestFaq = item;
        }
    });
    // Devuelve solo si hay coincidencia razonable
    return bestScore > 0 ? bestFaq : null;
}

sendButton.onclick = () => {
    const userText = chatInput.value.trim();
    if (userText !== "") {
        showChatView();
        addMessage("user", userText);
        chatInput.value = "";
        setTimeout(() => {
            const match = findBestFaqMatch(userText);
            if (match) {
                if (Array.isArray(match.a)) {
                    let delay = 0;
                    match.a.forEach((msg, idx) => {
                        setTimeout(() => {
                            addBotMessageWithDelay(msg, 1800, idx === match.a.length - 1);
                        }, delay);
                        delay += 2000;
                    });
                } else {
                    addBotMessageWithDelay(match.a, 2200, true);
                }
            } else {
                addBotMessageWithDelay("Perdón, sigo aprendiendo. Por el momento, puedo ayudarte solo con las preguntas del menú principal.", 2500);
                setTimeout(() => {
                    addBotMessageWithDelay(
                        `<b>ATENCIÓN AL ESTUDIANTE</b><br>E-mail:<br>
                        Para consultas generales a estudiantes UNDAV: <a href=\"mailto:tramitesestudiantes@undav.edu.ar\">tramitesestudiantes@undav.edu.ar</a><br>
                        Por consultas de solicitud y entrega de libretas: <a href=\"mailto:libretas@undav.edu.ar\">libretas@undav.edu.ar</a><br>
                        Por consultas con respecto a prórrogas de cursadas vencidas: <a href=\"mailto:finales@undav.edu.ar\">finales@undav.edu.ar</a>`, 2000
                    );
                }, 2700);
            }
        }, 400);
    }
};

chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});

function addMessage(sender, text, showFeedback = false) {
    const message = document.createElement('div');
    message.innerHTML = text;
    message.classList.add('message', sender);
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;

    if (showFeedback && sender === 'bot') {
        const feedbackContainer = document.createElement('div');
        feedbackContainer.className = 'feedback-container';
        feedbackContainer.innerHTML = '<span class="feedback-label">¿Esta respuesta te ayudó?</span>';
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback-buttons';
        let likeCount = 0;
        let dislikeCount = 0;
        let voted = null;
        const likeBtn = document.createElement('button');
        likeBtn.innerHTML = '👍 <span class="like-count">0</span>';
        likeBtn.className = 'like-btn';
        likeBtn.onclick = function() {
            if (voted === 'like') return;
            if (voted === 'dislike') {
                dislikeCount--;
                dislikeBtn.querySelector('.dislike-count').textContent = dislikeCount;
                dislikeBtn.classList.remove('voted');
            }
            likeCount++;
            likeBtn.querySelector('.like-count').textContent = likeCount;
            likeBtn.classList.add('voted');
            dislikeBtn.classList.remove('voted');
            voted = 'like';
        };
        const dislikeBtn = document.createElement('button');
        dislikeBtn.innerHTML = '👎 <span class="dislike-count">0</span>';
        dislikeBtn.className = 'dislike-btn';
        dislikeBtn.onclick = function() {
            if (voted === 'dislike') return;
            if (voted === 'like') {
                likeCount--;
                likeBtn.querySelector('.like-count').textContent = likeCount;
                likeBtn.classList.remove('voted');
            }
            dislikeCount++;
            dislikeBtn.querySelector('.dislike-count').textContent = dislikeCount;
            dislikeBtn.classList.add('voted');
            likeBtn.classList.remove('voted');
            voted = 'dislike';
        };
        feedbackDiv.appendChild(likeBtn);
        feedbackDiv.appendChild(dislikeBtn);
        feedbackContainer.appendChild(feedbackDiv);
        messages.appendChild(feedbackContainer);
        messages.scrollTop = messages.scrollHeight;
    }
}

backToFaqsButton.onclick = () => {
    showInitialView();
    chatInput.value = "";
};