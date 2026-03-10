import { auth, MEU_UID_ADMIN } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const painel = document.getElementById('painel');
const msg = document.getElementById('msg');
const btnSair = document.getElementById('btn-sair');

onAuthStateChanged(auth, (user) => {
    if (user && user.uid === MEU_UID_ADMIN) {
        msg.style.display = 'none';
        painel.style.display = 'block';
    } else {
        msg.innerHTML = "❌ Acesso Negado.<br>Redirecionando...";
        setTimeout(() => window.location.href = "index.html", 2500);
    }
});

btnSair.addEventListener('click', () => {
    signOut(auth).then(() => window.location.href = "index.html");
});
