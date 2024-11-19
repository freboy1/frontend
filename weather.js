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

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("suggestButton");
    const suggestionContainer = document.getElementById("suggestionContainer");

    button.addEventListener("click", function () {
        const city = "Astana";
        const apiKey = "a184cec28e18696aa72e9629c0f4f09c";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const weather = data.weather[0].main.toLowerCase();

                let suggestedCar;

                if (weather.includes("clear")) {
                    suggestedCar = cars.find(car => car.brand === "Ferrari");
                } else if (weather.includes("cloud")) {
                    suggestedCar = cars.find(car => car.brand === "Porsche");
                } else if (weather.includes("rain")) {
                    suggestedCar = cars.find(car => car.brand === "BMW");
                } else {
                    suggestedCar = cars[0]; // Default car suggestion
                }

                displaySuggestedCar(suggestedCar);
            })
            .catch(error => console.log("Error fetching weather data: ", error));
    });

    function displaySuggestedCar(car) {
        suggestionContainer.innerHTML = `
            <div class="card">
                <img src="${car.imageUrl}" class="card-img-top" alt="${car.model}">
                <div class="card-body">
                    <h5 class="card-title">${car.brand} ${car.model}</h5>
                    <p class="card-text">${car.description}</p>
                    <button class="btn" onclick="window.location.href='https://kolesa.kz/';">Price</button>
                </div>
            </div>
        `;
    }
});
