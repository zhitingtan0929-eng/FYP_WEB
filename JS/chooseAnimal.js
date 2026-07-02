function chooseAnimal(animal) {
    localStorage.setItem("animal", animal);

    window.location.href = animal + ".html";
}