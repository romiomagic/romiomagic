$(document).ready(function(){
	$('[data-toggle="offcanvas"]').click(function() {
		$('#side-menu').toggleClass('hidden-xs');
	});
});

$(document).ready(function(){
    $('.collapsible').collapsible();
  });

// Второй вопрос
       google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Sex'],
          ['Мужской',     800],
          ['Женский',     600]
 
        ]);

        var options = {
          title: 'Пол',
          'width':600,
          'height':300,
          is3D: true
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }



// Третий вопрос
      google.charts.load('current', {packages: ['corechart', 'bar']});
	google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
      var data = google.visualization.arrayToDataTable([
        ['Оценка', ''],
        ['1/5', 12],
        ['2/5', 37],
        ['3/5', 26],
        ['4/5', 456],
        ['5/5', 1347]
      ]);

      var options = {
      	'width':600,
        'height':300,
        title: 'Желание получить диплом о высшем образовании',
        chartArea: {width: '50%'},
        isStacked: true,
        hAxis: {
          title: 'Количество проголосовавших',
          minValue: 0,
        },
        vAxis: {
          title: 'Оценка (1-5)'
        }
        
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }


// Четвертый вопрос
       google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart2);

      function drawChart2() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Sex'],
          ['Да',     550],
          ['Нет',    900]
 
        ]);

        var options = {
          title: 'До поступления в вуз Вы проживали в Таганроге?',
          'width':600,
          'height':300,
          is3D: true
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

        chart.draw(data, options);
      }



// Пятый вопрос
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic2);

function drawBasic2() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Города');
      data.addColumn('number', '');
      data.addRows([
        ['1', 155],
        ['2', 133],
        ['3', 246],
        ['4', 380],
        ['5', 147],
        ['6', 101]
      ]);

      var options = {
      	'width':600,
        'height':300,
        title: 'Подавали ли Вы заявления в другие вузы?',
        hAxis: {
          // title: 'Варианты ',
         
        },
        vAxis: {
          title: 'Количество заявок'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div2'));

      chart.draw(data, options);
    }