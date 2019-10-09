<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Modelo Exemplo</title>
</head>
<body>
    <h1>Lista de Funcinários</h1>
    <hr/>
    <table border="1" id="tabelaFuncionarios">
        <tr>
            <th>Matrícula</th>
            <th>Nome</th>
            <th>Salario (R$)</th>
            <th>Porcentagem Aumento (%)</th>
            <th>Porcentagem Imposto (%)</th>
            <th>Novo Salário</th>
        </tr>
        <tr class="funcionario">
            <td class="info-mat">000111</td>
            <td class="info-nome">João</td>
            <td class="info-salario">1000</td>
            <td class="info-aumento">10</td>
            <td class="info-imposto">5</td>
            <td class="info-novoSalario">--</td>
        </tr>
        <tr class="funcionario">
            <td class="info-mat">000222</td>
            <td class="info-nome">Maria</td>
            <td class="info-salario">1500</td>
            <td class="info-aumento">20</td>
            <td class="info-imposto">8</td>
            <td class="info-novoSalario">--</td>
        </tr>
    </table>
    <h2>Dados Funcionário</h2>
    <div>
        <label for="matricula">Matricula</label>
        <input type="text" id="matricula"/>
    </div>
    <div>
        <label for="nome">Nome</label>
        <input type="text" id="nome"/>
    </div>
    <div>
        <label for="salario">Salario</label>
        <input type="text" id="salario"/>
    </div>
    <div>
        <label for="porcAumento">Porcentagem Aumento</label>
        <input type="text" id="porcAumento"/>
    </div>
    <div>
        <label for="porcImposto">Porcentagem Imposto</label>
        <input type="text" id="porcImposto"/>
    </div>
    <button id="btnCadastrar">Cadastrar</button>
    <script>

        function clearInput(id){
            let inputClear = document.querySelector(id);
            inputClear.value = '';

        }

        btnCadastrar.addEventListener ("click", function(){

            let inputMatricula = document.querySelector("#matricula");

            let inputNome = document.querySelector("#nome");

            let inputSalario = document.querySelector("#salario");

            let inputAumento = document.querySelector("#porcAumento");

            let inputImposto = document.querySelector("#porcImposto");

            let table = document.querySelector("#tabelaFuncionarios");

            let tr = document.createElement("tr");
            let tdMatricula = document.createElement("td");
            let tdNome = document.createElement("td");
            let tdSalario = document.createElement("td");
            let tdAumento = document.createElement("td");
            let tdImposto = document.createElement("td");
            let tdNovoSalario = document.createElement("td");
            tr.classList = "funcionario";
            table.appendChild(tr);


            tdMatricula.textContent = inputMatricula.value;

            tdMatricula.classList = "info-mat";

            tr.appendChild(tdMatricula);


            tdNome.textContent = inputNome.value;

            tdNome.classList = "info-nome";

            tr.appendChild(tdNome);


            tdSalario.textContent = inputSalario.value;

            tdSalario.classList = "info-salario";

            tr.appendChild(tdSalario);


            tdAumento.textContent = inputAumento.value;

            tdAumento.classList = "info-aumento";

            tr.appendChild(tdAumento);


            tdImposto.textContent = inputImposto.value;

            tdImposto.classList = "info-imposto";
            
            tr.appendChild(tdImposto);


            tdNovoSalario.textContent = parseFloat(tdSalario.textContent) + (parseFloat(tdSalario.textContent)*parseFloat(tdAumento.textContent)/100) - (parseFloat(tdSalario.textContent)*parseFloat(tdImposto.textContent)/100);

            tdNovoSalario.classList = "info-novoSalario";

            tr.appendChild(tdNovoSalario);

            clearInput("#matricula");
            clearInput("#nome");
            clearInput("#salario");
            clearInput("#porcAumento");
            clearInput("#porcImposto");
        })
        let funcionarios = document.querySelectorAll(".funcionario");
        console.log(funcionarios.length);
        for(let funcionario of funcionarios){
            let salario = parseFloat(funcionario.querySelector(".info-salario").textContent)
            let aumento = parseFloat(funcionario.querySelector(".info-aumento").textContent)
            let imposto = parseFloat(funcionario.querySelector(".info-imposto").textContent)
            let novoSalario = funcionario.querySelector(".info-novoSalario")

            let nSalario = salario + (salario*aumento/100) - (salario*imposto/100)
            novoSalario.textContent = nSalario
        }
    </script>
</body>
</html>
