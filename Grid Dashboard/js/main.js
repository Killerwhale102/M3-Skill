/*
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
*/

const labels = [
    "playstation 2",
    "Gamecube",
    "Nintendo DS",
    "Nintendo Switch",
    "Playstation 4 Pro"
];

const data = {
    labels: labels,
    datasets:[{
        label: "Most played console in hours",
        data: [10000, 5000, 6000, 1000, 2000],
        backgroundcolors: ["#57C5B6", "#159895", "#1A5F7A", "#002B5B", "#2F0F5D"]
    }]
}

const config = {
    type:"doughnut",
    data: data,
}

const config2 = {
    type: "bar",
    data: data,
}

const config3 = {
    type: "line",
    data: data,
}

new Chart(document.getElementById("js--chart--1"), config);
new Chart(document.getElementById("js--chart--2"), config2);
new Chart(document.getElementById("js--chart--3"), config3);