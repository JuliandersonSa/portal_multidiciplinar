document.addEventListener("DOMContentLoaded", function () {
    // Selecionar todos os links do menu
    const dropdownLinks = document.querySelectorAll(".dropdownlink");

    dropdownLinks.forEach((link) => {
        link.addEventListener("click", function () {
            // Selecionar o próximo elemento (submenu)
            const submenu = this.nextElementSibling;

            // Verificar se o submenu está visível
            const isVisible = submenu.style.display === "block";

            // Fechar todos os submenus
            document.querySelectorAll(".submenuItems").forEach((item) => {
                item.style.display = "none";
            });

            // Fechar todas as classes 'open'
            document.querySelectorAll(".open").forEach((item) => {
                item.classList.remove("open");
            });

            // Mostrar/ocultar o submenu clicado
            if (!isVisible) {
                submenu.style.display = "block";
                this.parentElement.classList.add("open");
            }
        });
    });
});
