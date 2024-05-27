let pessoa = {
         "nome": "Artur",
         "sobrenome": "Brasil",
         "idade": 24,
         "hobbies": ["Cinema", "Praia", "Correr"]
     }
    
     pessoa.altura = 1.83;

     let pessoaTexto = JSON.stringify(pessoa);
    
     console.log(pessoaTexto)
     let pessoaJSON = JSON.parse(pessoaTexto);

     console.log(pessoaJSON);
     
     console.log(pessoaJSON.hobbies[0])