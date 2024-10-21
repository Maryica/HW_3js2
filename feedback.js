const button = document.getElementById("btn");
const input = document.getElementById("input");
const container = document.getElementById("container");


const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];


function addFeedback() {
    try {
        if (input.value.length < 50 || input.value.length > 500) {
            throw new Error(`Отзыв должен быть не менее 50 символов и не более 500`);
        } else {
            const newFeed = document.createElement("div");
            newFeed.textContent = input.value;
            container.appendChild(newFeed);
            const hr = document.createElement("hr");
            container.appendChild(hr);
            input.value = "";
        }
    } catch (error) {
        alert(error.message);
        input.value = "";
    }
}

button.addEventListener("click", (e) => addFeedback());
initialData.forEach((elem) => {
    const title = document.createElement("div");
    title.textContent = elem.product;
    container.appendChild(title);
    elem.reviews.forEach((rev) => {
        const review = document.createElement("div");
        review.textContent = rev.text;
        container.appendChild(review);
    });
    const hr = document.createElement("hr");
    container.appendChild(hr);
});

