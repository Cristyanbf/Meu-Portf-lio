// Tab Certificados

function openTab(evt, tabName) {
    // Declara todas as variáveis
    var i, tabcontent, tablinks;

    // Obtém todos os elementos com a classe "tabcontent" e os oculta
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Obtém todos os elementos com a classe "tablinks" e remove a classe "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Exibe o conteúdo da aba atual e adiciona a classe "active" ao botão que abriu a aba
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Abre a primeira aba por padrão
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab button").click();
});

// Acordion Projetos

const buttons = document.querySelectorAll('.accordion-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        
        // Toggle o conteúdo
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

