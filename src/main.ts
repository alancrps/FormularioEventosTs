import "./style.css";
// A -> Al enviar el formulario validar los siguientes campos

// 1 . ningun campo puede estar vacio
// 2 . edad > 18
// 3. La cantidad max de personas depende del pais

// arg -> 50
// chi -> 60
// uru -> 70

// B -> . al finalizar crear objecto con las propiedades del formulario
// y almacenarlo local storage

const formulario = document.querySelector("#formulario");
const nombreInput = document.querySelector("#nombre");
const apellidoInput = document.querySelector("#apellido");
const edadInput = document.querySelector("#edad");
const eventoInput = document.querySelector("#nombreEvento");
const paisInput = document.querySelector("#pais");
const cantPersonasInput = document.querySelector("#cantPersonas");
const enviarBtn = document.querySelector("#enviar");
let cantPers: number = 0;

enviarBtn.addEventListener("click", (event) => {
	event.preventDefault();
	if (validarCampos()) {
		alert("El/los campos no pueden estar vacios");
	} else if (validarEdad()) {
		alert("Debe ser mayor de edad");
	} else if (cantPersonasPorPais()) {
		alert(`Solo es posible tener ${cantPers} personas para ${paisInput.value}`);
	} else {
		const registroDeEvento: object = {
			nombre: nombreInput.value,
			apellido: apellidoInput.value,
			edad: edadInput.value,
			evento: eventoInput.value,
			pais: paisInput.value,
			personas: cantPersonasInput.value,
		};
		let registroDeEventos = JSON.parse(localStorage.getItem("registroDeEventos") || "");
		registroDeEventos.push(registroDeEvento);
		localStorage.setItem("registroDeEventos", JSON.stringify(registroDeEventos));
		console.log(registroDeEventos);
		alert("Registro de evento exitoso");
		formulario.reset();
	}
});

const validarCampos = () => {
	if (
		nombreInput.value.length === 0 ||
		apellidoInput.value.length === 0 ||
		edadInput.value.length === 0 ||
		eventoInput.value.length === 0 ||
		cantPersonasInput.value.length === 0
	) {
		return true;
	}
};

const validarEdad = () => {
	if (edadInput.value < 18) {
		return true;
	}
};

const cantPersonasPorPais = () => {
	let paisValue = paisInput.value;
	let cantPersonasValue = cantPersonasInput.value;
	switch (paisValue) {
		case "Argentina":
			if (cantPersonasValue > 50) {
				cantPers = 50;
				return true;
			}
			break;
		case "Chile":
			if (cantPersonasValue > 60) {
				cantPers = 60;
				return true;
			}
			break;
		case "Uruguay":
			if (cantPersonasValue > 70) {
				cantPers = 70;
				return true;
			}
			break;
	}
};
