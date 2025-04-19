function generate() {
    const color =
        "#" +
        Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");
    document.getElementById("box").style.backgroundColor = color;
    document.getElementById("hex").innerHTML = color;
    document.getElementById("rgb").innerHTML = hexToRgb(color);
}
function hexToRgb(hex) {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
}
