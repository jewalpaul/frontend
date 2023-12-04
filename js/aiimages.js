const imageURLs = [
    "https://drive.google.com/uc?export=view&id=1XaJM8ABSEalMUJsbKlR4r-21AIbTsYSf",
    "https://drive.google.com/uc?export=view&id=1xbuwdJLHbzNTh-fYPHpzpYBwVG1PPLcX",
    "https://drive.google.com/uc?export=view&id=1DeSOpA_LVzuDQCnfzTlXntTXrK3rFOYs",
    "https://drive.google.com/uc?export=view&id=1LPcBmhAfY54sNmMJ86IZA-V3KxRpZSJC",
    "https://drive.google.com/uc?export=view&id=1fkrWhplyMeyRRKt6eqBIzh0QFd2NtdFM",
    "https://drive.google.com/uc?export=view&id=1zSWcxJ5xzWtciKza_M3ukQ5PrDxQfjwg",
    "https://drive.google.com/uc?export=view&id=1m3ljnypxyZtmoXt0C1ZZEQhc5dbihk85",
    "https://drive.google.com/uc?export=view&id=1qOnSCo2MCO-3ep1VguVxux5TY79Ypssn",
    "https://drive.google.com/uc?export=view&id=14wGruT_HjYCrHeVWBNoxhEd1oYQhbo1D",
    "https://drive.google.com/uc?export=view&id=1n_zyiDZbrYiPAUJUgFG-Y_du25oylUjA",
    "https://drive.google.com/uc?export=view&id=1EclF4Ajm6Rr2lMgv-KIh4u1RbJHQkHvU",
    "https://drive.google.com/uc?export=view&id=1h72TXMl10-uiKbnCeXry7H1Pl-jJO9j7",
    "https://drive.google.com/uc?export=view&id=1kWnVSk9nGawqZPExy7fj3D4FqximIOsZ",
    "https://drive.google.com/uc?export=view&id=14tCouhqdWeKutm6rZPGMlNMlASo60WPd",
    "https://drive.google.com/uc?export=view&id=1VgVFXotV8iSBc0d1ko65wqy2Z4T9qoB1",
    "https://drive.google.com/uc?export=view&id=1MLhKnv1-LfWOcX1-ZpZp3kh8dXQzcmgw",
    "https://drive.google.com/uc?export=view&id=1OvVIMBCjq9Et3WBcU0zOIiPVwT_-jCQf",
    "https://drive.google.com/uc?export=view&id=1FA1jD3fSc7Q7BNbNy9HGiM2flaBlnHzB",
    "https://drive.google.com/uc?export=view&id=1JH-5YD1n9Ejsa5Nb3YqqPMojpn_3dFea",
    "https://drive.google.com/uc?export=view&id=1twv5Ryn4hFIFwb06gDA-lfUQrFOoW1Uv",
    "https://drive.google.com/uc?export=view&id=1jQMHGlGFYSDhO_DkA49gO9Y2co3AlUhm",
    "https://drive.google.com/uc?export=view&id=1EdoYKqc-lqUy-nbrOiAWEoAe7CSTlyHP",
    "https://drive.google.com/uc?export=view&id=1lxe2lwDfxy9XDDPPl1Utkqwk7wUsuKQ4",
    "https://drive.google.com/uc?export=view&id=1YvfHgDDZVj5rxez-d41LxlP-Uy3U79HP"
    ]; 
    function createImageBox(url) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';
        const card = document.createElement('div');
        card.className = 'card';
        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = url;
        img.alt = 'Image';
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        const viewButton = document.createElement('a');
        viewButton.className = 'btn btn-primary';
        viewButton.href = url;
        viewButton.target = '_blank';
        viewButton.textContent = 'View';
        const downloadButton = document.createElement('a');
        downloadButton.className = 'btn btn-secondary';
        const downloadUrl = url.replace('export=view', 'export=download');
        downloadButton.href = downloadUrl;
        downloadButton.setAttribute('download', ''); 
        downloadButton.textContent = 'Download';
        cardBody.appendChild(viewButton);
        cardBody.appendChild(downloadButton);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        return col;
    }
    function displayImages() {
        const container = document.getElementById('imageContainer');
        imageURLs.forEach(url => {
        const imageBox = createImageBox(url);
        container.appendChild(imageBox);
        });
    }   
    displayImages();