document.getElementById('addBtn').addEventListener('click', function() {
    // Captura os valores dos campos do formulário
    const clientName = document.getElementById('clientName').value;
    const nfNumber = document.getElementById('nfNumber').value;
    const volumeCount = document.getElementById('volumeCount').value;
    const additionalInfo = document.getElementById('additionalInfo').value;

    // Verifica se todos os campos foram preenchidos
    if (!clientName || !nfNumber || !volumeCount || !additionalInfo) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Cria um objeto com os dados
    const packageData = {
        clientName,
        nfNumber,
        volumeCount,
        additionalInfo
    };

    // Adiciona os dados à lista
    addPackageToList(packageData);

    // Limpa os campos do formulário
    clearForm();
});

function addPackageToList(packageData) {
    const packageList = document.getElementById('packageList');

    // Cria um novo item da lista
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <p><strong>Nome do Cliente:</strong> ${packageData.clientName}</p>
        <p><strong>Número da NF:</strong> ${packageData.nfNumber}</p>
        <p><strong>Quantidade de Volumes:</strong> ${packageData.volumeCount}</p>
        <p><strong>Destino:</strong> ${packageData.additionalInfo}</p>
    `;

    // Adiciona o item à lista
    packageList.appendChild(listItem);
}

function clearForm() {
    document.getElementById('clientName').value = '';
    document.getElementById('nfNumber').value = '';
    document.getElementById('volumeCount').value = '';
    document.getElementById('additionalInfo').value = '';
}

// Salvar lista como arquivo de texto
document.getElementById('saveBtn').addEventListener('click', function() {
    const packageList = document.getElementById('packageList');
    let textContent = '';

    // Coleta o conteúdo da lista
    packageList.querySelectorAll('li').forEach(item => {
        textContent += item.textContent + '\n\n';
    });

    // Cria um arquivo de texto e faz o download
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lista_pacotes.txt';
    a.click();
    URL.revokeObjectURL(url);
});

// Imprimir lista
document.getElementById('printBtn').addEventListener('click', function() {
    const printContent = document.getElementById('packageList').innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = `
        <ul>${printContent}</ul>
    `;

    window.print();
    document.body.innerHTML = originalContent;
});
