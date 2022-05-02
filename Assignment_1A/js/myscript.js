

let labels2 = ['American Airlines Group', 'Ryanair', 'China Southern Airlines', 'Lufthansa Group'];
let data2 = [199.6, 130.3, 126.3, 130];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "Number of passengers carried in 2017 (in mio.)",
            display: true
        },
        legend: {
          display: false
        }
    }
});



let labels4 = ['Germany', 'France', 'UK', 'Italy', 'Spain', 'Others(23)'];
let data4 = [83, 67, 66, 61, 47, 187];
let colors4 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF', '#AC5353', '#CFD4D8'];

let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
    type: 'pie',
    data: {
        labels: labels4,
        datasets: [ {
            data: data4,
            backgroundColor: colors4
        }]
    },
    options: {
        title: {
            text: "Population of the European Union (in mio)",
            display: true
        }
    }
});