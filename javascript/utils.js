// Função para abrir o menu lateral
        function openNav() {
            document.getElementById("sidenav").style.width = "250px";
        }
        
        // Função para fechar o menu lateral
        function closeNav() {
            document.getElementById("sidenav").style.width = "0";
        }

        // Função para alternar a exibição do menu lateral
        function toggleMenu() {
            var sidenav = document.getElementById("sidenav");
            if (sidenav.style.width === "250px") {
                closeNav();
            } else {
                openNav();
            }
        }