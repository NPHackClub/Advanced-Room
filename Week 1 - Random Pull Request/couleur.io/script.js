function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function colourChange() {
    document.getElementById("buttonAction").setAttribute("onclick", "");
    hsv();
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hsv() {
    let h = Math.random();
    let s = Math.random() * (0.5 - 0) + 0;
    let v = Math.random();
    HSVtoRGB(h, s, v);
}

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);
    let hex = rgbToHex(r, g, b);
    document.body.style.backgroundColor = hex; 
    document.body.style.transition = "all 2s";
    document.getElementById("hexCode").innerHTML = hex;
    document.getElementById("hexCode").href = "https://www.color-hex.com/color/" + hex.substr(1);
    document.getElementById("aria").setAttribute("aria-label", hex);
    setTimeout(function(){document.getElementById("buttonAction").setAttribute("onclick", "colourChange()");},1000);
}