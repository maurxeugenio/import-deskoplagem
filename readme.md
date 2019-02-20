# Deskoplagem
---
Deskoplagem é uma aplicação em Vue Js que consulta a base de dados do DBDESK para buscar respostas para automatizar o processo respostas em vendas e também em outros sites do curso.

# Requerimentos
- requer jquery 3+
- import-deskoplagem.js

# Instalação


``` js
<script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous">
</script>

<script type="text/javascript" src="http://localhost:9000/import-desklopagem.js"></script>

<script type="text/javascript">
    get_deskoplagem({
        'hash': 'f31231dasd3dsqweqw', // Hash do curso
        'text': 'Tirar dúvidas', // titulo botao
        'btnBG':  '#5b8cdb', // Cor do botao
        'btnColor': 'white' // Cor da fonte
        }
    )
</script>

```
