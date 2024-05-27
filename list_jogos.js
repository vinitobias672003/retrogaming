document.getElementById('gameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const jsonString = convertFormToJSON(event.target);
    displayJSON(jsonString);
  });
  
  function convertFormToJSON(form) {
    const formData = new FormData(form);
    const jsonObject = {};
    formData.forEach((value, key) => {
      jsonObject[key] = value;
    });
    return JSON.stringify(jsonObject);
  }
  
  function displayJSON(jsonString) {
    console.log(jsonString);
    // Exemplo de exibição do JSON resultante na página
    const pre = document.createElement('pre');
    pre.textContent = jsonString;
    document.body.appendChild(pre);
  }
      