const generateBtn = document.getElementById("generate-btn");
const viewSection = document.getElementById("view");

function generatePallete() {
    const maxColors = 5;

    const randomPallete = document.createElement("div");
    randomPallete.className = "random-pallete";

    for(let i = 0; i < maxColors; i++) {
        // We'll use hsl() to get all colors.
        let hueValue = Math.floor(Math.random() * 361); // number
        let saturationValue = `${Math.floor(Math.random() * 101)}%`; // percentage
        let lightnessValue = `${Math.floor(Math.random() * 101)}%`; // percentage

        const boxColor = document.createElement("div");
        boxColor.className = "box-color";
        boxColor.style.backgroundColor = `hsl(${hueValue}, ${saturationValue}, ${lightnessValue})`;
        boxColor.style.width = "50px";
        boxColor.style.height = "50px";

        randomPallete.append(boxColor);
    }

    viewSection.append(randomPallete);
}

generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    generatePallete();
});

console.log(viewSection);