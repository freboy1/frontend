const cars = [
    { 
        brand: 'Porsche', 
        model: '718 Cayman S', 
        imageUrl: 'https://di-uploads-pod15.dealerinspire.com/bluegrassmotorsport/uploads/2022/03/Porsche-718-Boxster-Exterior.jpg', 
        description: 'A sleek and sporty two-seater, perfect for high-performance driving enthusiasts.' 
    },
    { 
        brand: 'Ferrari', 
        model: 'LaFerrari Aperta', 
        imageUrl: 'https://www.motortrend.com/uploads/f/212321237.jpg', 
        description: 'A stunning open-top hybrid supercar offering incredible speed and exclusivity.' 
    },
    { 
        brand: 'Porsche', 
        model: 'Panamera', 
        imageUrl: 'https://images-porsche.imgix.net/-/media/EF493E3F2EFA4639AD7DC8100544D4E6_317C931650634732AB704E99B3BC39E9_PA24P5DOX0001-panamera-rear?w=1720&h=1232&q=45&crop=faces%2Centropy%2Cedges&auto=format', 
        description: 'A luxury sports sedan that combines performance with everyday practicality.' 
    },
    { 
        brand: 'BMW', 
        model: 'M3', 
        imageUrl: 'https://www.modifiedrides.net/medias/images/bmw-m3-by-dahler-competition-line.webp', 
        description: 'A high-performance sedan with a perfect blend of luxury, speed, and style.' 
    },
    { 
        brand: 'Porsche', 
        model: 'Taycan', 
        imageUrl: 'https://media.ed.edmunds-media.com/porsche/taycan/2025/oem/2025_porsche_taycan_sedan_base_fq_oem_2_600.jpg', 
        description: 'A fully electric sports car with cutting-edge technology and breathtaking acceleration.' 
    },
    { 
        brand: 'BMW', 
        model: 'M8 Coupé', 
        imageUrl: 'https://vehicle-images.dealerinspire.com/f155-110010513/WBSAE0C03SCS58010/aa936c6030b44ce41363960ef8a72d5f.jpg', 
        description: 'A luxury grand tourer with immense power and elegant design.' 
    },
    { 
        brand: 'Ferrari', 
        model: '488', 
        imageUrl: 'https://ferrari-avilon.ru/media/blocks/info_sections/pistagrey2.jpeg', 
        description: 'A mid-engine supercar delivering outstanding performance and iconic Ferrari styling.' 
    },
    { 
        brand: 'BMW', 
        model: 'X6 xDrive40i M Sport', 
        imageUrl: 'https://www.bmw.co.th/content/dam/bmw/marketTH/common/All%20Models/x-series/x6/bmw-x6-xdrive40i-m-sport/BMW%20X6%20xDrive40i%20M%20Sport%20(29).jpg', 
        description: 'A luxurious SUV with sporty handling and a bold, eye-catching design.' 
    },
    { 
        brand: 'Ferrari', 
        model: '296 GTS', 
        imageUrl: 'https://bluesky.cdn.imgeng.in/cogstock-images/4d71fb97-b3af-49b7-b2b8-61576065d68f.jpg?migeng=/w_1200/cmpr_99/', 
        description: 'A plug-in hybrid convertible delivering thrilling performance and cutting-edge innovation.' 
    }
];


function displayCars(filter = 'all') {
    const carContainer = document.getElementById('carContainer');
    carContainer.innerHTML = ''; // Clear existing cards

    const filteredCars = filter === 'all' ? cars : cars.filter(car => car.brand === filter);

    filteredCars.forEach((car) => {
        // Create a Bootstrap column for each car card
        const col = `
            <div class="col-12 col-sm-6 col-lg-3 d-flex">
                <div class="card mb-4 w-100">
                    <img src="${car.imageUrl}" class="card-img-top" alt="${car.model}">
                    <div class="card-body">
                        <h5 class="card-title">${car.brand} ${car.model}</h5>
                        <p class="card-text">${car.description}</p>
                        <a href="#" class="btn btn-primary">Price</a>
                        
                    </div>
                </div>
            </div>
        `;

        carContainer.innerHTML += col; // Append the column to the container
    });

    // Add event listeners for star ratings
    const starContainers = document.querySelectorAll('.star-rating');
    starContainers.forEach(starContainer => {
        const stars = starContainer.querySelectorAll('.star');
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                stars.forEach((s, i) => {
                    s.style.color = i <= index ? 'gold' : 'gray';
                });
            });
        });
    });
}

// Event listener for brand filter
document.getElementById('brandFilter').addEventListener('change', (event) => {
    const selectedBrand = event.target.value;
    localStorage.setItem('selectedBrand', selectedBrand);
    displayCars(selectedBrand);
});

// Function to load the selected brand from localStorage on page load
function loadSelectedBrand() {
    const savedBrand = localStorage.getItem('selectedBrand') || 'all';
    document.getElementById('brandFilter').value = savedBrand; // Set the dropdown value
    displayCars(savedBrand); // Display cars based on saved brand
}

// Call the function on page load
window.onload = loadSelectedBrand;
