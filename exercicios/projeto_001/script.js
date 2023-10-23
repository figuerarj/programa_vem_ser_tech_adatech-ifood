        

            document.addEventListener("DOMContentLoaded", function() {
                // Encontre a altura do cabeçalho
                var headerHeight = document.querySelector("header").offsetHeight;
                
              
                // Função para rolar para a âncora com ajuste de altura do cabeçalho
                function scrollToAnchor(anchorId) {
                  document.querySelector('a[href="#' + anchorId + '"]').addEventListener("click", function(e) {
                    e.preventDefault();
              
                    // Encontre a posição da âncora
                    var target = document.getElementById(anchorId);
                    var targetPosition = target.offsetTop;
              
                    // Role suavemente para a âncora, considerando a altura do cabeçalho
                    window.scrollTo({
                      top: targetPosition - headerHeight,
                      behavior: "smooth"
                    });
                  });
                }
              
                // Chame a função para cada âncora desejada
                scrollToAnchor("home");
                scrollToAnchor("about_us"); // Adicionado
                scrollToAnchor("trendy");
                scrollToAnchor("form-contact");
              });