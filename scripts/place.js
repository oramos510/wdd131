function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        let windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(1);
    } else {
        return "N/A";
    }
}

let temp = 10; 
let windSpeed = 5; 

document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);

document.getElementById("lastModified").textContent = document.lastModified;
