import { auth, MEU_UID_ADMIN } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const painel = document.getElementById('painel');
const msg = document.getElementById('msg');

console.log("Sistema de trava iniciado...");

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Usuário logado com UID:", user.uid);
        console.log("UID esperado (Admin):", MEU_UID_ADMIN);

        if (user.uid.trim() === MEU_UID_ADMIN.trim()) {
            msg.style.display = 'none';
            painel.style.display = 'block';
        } else {
            msg.innerHTML = `
                <p style="color:red">⚠️ UID não reconhecido como Admin.</p>
                <p style="font-size:10px">Seu ID: ${user.uid}</p>
                <button onclick="window.location.href='index.html'">Voltar</button>
            `;
        }
    } else {
        msg.innerHTML = `
            <p>Você não está logada.</p>
            <a href="login-loja.html" style="display:inline-block; padding:10px; background:blue; color:white; text-decoration:none; border-radius:5px;">Ir para Login</a>
        `;
    }
});
