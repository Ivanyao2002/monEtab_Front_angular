document.addEventListener('DOMContentLoaded', function () {
    const pChart = document.getElementById('myChart');
    const xValues = ["Homme", "Femme"];
    const yValues = [55, 45];
    const barColors = ["#adaaa2", "#524f49"];

    const genderChart = new Chart(pChart, {
        type: 'pie',
        data: {
            labels: xValues,
            datasets: [{
                data: yValues,
                backgroundColor: barColors,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'right',
                }
            },
          // title: {
        //   display: true,
        // }
        }
    });
});
