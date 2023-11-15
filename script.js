function generatePackingList() {
    
    const numbnuit = parseInt(document.getElementById('nuit').value);
    const climate = document.getElementById('climat').value;
  
    const itemsContainer = document.getElementById('items');
    itemsContainer.innerHTML = '';
  
    // Valise
    addItemToContainer(itemsContainer, 'Sac à dos/valise', 1);
  
    // Chaussettes
    const numberchauss = Math.min(numbnuit, 10);
    addItemToContainer(itemsContainer, 'Paires de chaussettes', numberchauss);
  
    // Sous-vetement
    const numbsv = Math.min(numbnuit, 10);
    addItemToContainer(itemsContainer, 'Sous-vêtements', numbsv);
  
    // t-Shirt
    const numbts = Math.min(numbnuit, 10);
    addItemToContainer(itemsContainer, 'T-shirts', numbts);
  
    // Pulls/sweats
    let numbsw = 1;
    if (numbnuit >= 4 && numbnuit <= 6) {
      numbsw = 2;
    } else if (numbnuit > 6) {
      numbsw = 3;
    }
    addItemToContainer(itemsContainer, 'Pulls/sweats', numbsw, 3);
  
    // Pantalons
    let numbpants = 1;
    if (numbnuit >= 4 && numbnuit <= 6) {
      numbpants = 2;
    } else if (numbnuit > 6) {
      numbpants = 3;
    }
    addItemToContainer(itemsContainer, 'Pantalons', numbpants, 3);
  
    // Afficher une veste dans tous les cas, mais dépend du climat
    addItemToContainer(itemsContainer, 'Veste', 1);
  
    // Afficher une paire de chaussures si plus de 6 nuits
    if (numbnuit > 6) {
      addItemToContainer(itemsContainer, 'Paires de chaussures', 1);
    }
    
    const packingListDiv = document.getElementById('packingList');
    packingListDiv.style.display = 'block';
  }
  
  // Fonction pour ajouter un élément à la liste avec une quantité maximale
  function addItemToContainer(container, itemName, quantity, maxQuantity = Number.MAX_SAFE_INTEGER) {
    const newItem = document.createElement('div');
    newItem.innerHTML = `<input type="checkbox" id="${itemName}" name="${itemName}">
                         <label for="${itemName}">${itemName} : ${Math.min(quantity, maxQuantity)}</label>`;
    container.appendChild(newItem);
  }
  function resetForm() {
    document.getElementById('nuit').value = 3;
    document.getElementById('climat').value = 'moderate';
    document.getElementById('packingList').style.display = 'none';
  }
  
  // Fonction pour mettre en majuscule la première lettre
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }  