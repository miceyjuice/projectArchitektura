const registerValues = {
  AX: 0,
  BX: 0,
  CX: 0,
  DX: 0
};

const main = () => {
  const buttons = {
    axButton: document.querySelector('#axButton'),
    bxButton: document.querySelector('#bxButton'),
    cxButton: document.querySelector('#cxButton'),
    dxButton: document.querySelector('#dxButton'),
    axFunction: this.axButton.addEventListener('click', (e) =>{
      e.preventDefault();
      registerValues.AX = document.getElementById('axValue').value.trim();
      console.log(registerValues.AX);
    }),
    bxFunction: this.bxButton.addEventListener('click', (e) =>{
      e.preventDefault();
      registerValues.BX = document.getElementById('bxValue').value.trim();
      console.log(registerValues.BX);
    }),
    cxFunction: this.cxButton.addEventListener('click', (e) =>{
      e.preventDefault();
      registerValues.CX = document.getElementById('cxValue').value.trim();
      console.log(registerValues.CX);
    }),
    dxFunction: this.dxButton.addEventListener('click', (e) =>{
      e.preventDefault();
      registerValues.DX = document.getElementById('dxValue').value.trim();
      console.log(registerValues.DX);
    })
  };
  const cmdButton = document.getElementById('cmdSubmit');
  cmdButton.addEventListener('click', () => {
    const inputValue = document.getElementById('commandLine').value.toUpperCase();
    const commands = inputValue.split(" ");

    switch (commands[0]) {
      case 'MOV':
        registerValues[commands[1]] = registerValues[commands[2]];
        document.getElementById('axValue').value = registerValues["AX"];
        document.getElementById('bxValue').value = registerValues["BX"];
        document.getElementById('cxValue').value = registerValues["CX"];
        document.getElementById('dxValue').value = registerValues["DX"];
        break;
      case 'GET':
        if(commands[1] === "ALL"){
          const result = JSON.stringify(registerValues, null, "\t");
          const deleteKlamra1 = result.replace("{", "");
          const deleteKlamra2 = deleteKlamra1.replace("}", "");
          const deleteCudzyslow = deleteKlamra2.replace(/(['"])/g, "");
          const zamienPrzecinek = deleteCudzyslow.split(",").join(" |");

          document.getElementById('results').innerHTML = zamienPrzecinek;
        }else {
          document.getElementById('results').innerHTML = registerValues[commands[1]];
        }
        break;
      case 'RESET':
        for(let key in registerValues) {
          registerValues[key] = 0;
        }
        document.getElementById('axValue').value = registerValues["AX"];
        document.getElementById('bxValue').value = registerValues["BX"];
        document.getElementById('cxValue').value = registerValues["CX"];
        document.getElementById('dxValue').value = registerValues["DX"];
        document.getElementById('results').innerHTML = "<i>All values have been reset</i>";
        break;
      case 'HELP':
        document.getElementById('results').innerHTML = "<i>You can use the following commands:<br>" +
          "<strong style='color:#eee;'>MOV |record1| |record2|</strong> - moves the value of one record to another<br>" +
          "<strong style='color:#eee;'>GET ALL</strong> or <strong style='color:#eee;'>GET |record|</strong> - prints out all records' values or prints out selected record's value<br>" +
          "<strong style='color:#eee;'>RESET</strong> - resets all records' values</i>";
        break;
      default:
          document.getElementById('results').innerHTML = "<i>Unknown command</i>";
        break;
    }
    console.log(registerValues);
  })
}

document.addEventListener("DOMContentLoaded", main);
