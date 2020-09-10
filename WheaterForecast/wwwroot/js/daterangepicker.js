$(function () {
    console.log($("#from-value").val());
    console.log($("#to-value").val());
    console.log((new Date($("#from-value").val())));
    console.log((new Date($("#to-value").val())));

        $('input[name="daterange"]').daterangepicker({
            opens: 'left',
            "startDate": new Date($("#from-value").val()),
            "endDate": new Date($("#to-value").val()),
            "locale": {
                "format": "DD/MM/YYYY",
                "separator": " - ",
                "applyLabel": "Применить",
                "cancelLabel": "Отмена",
                "fromLabel": "От",
                "toLabel": "До",
                "customRangeLabel": "Custom",
                "weekLabel": "Н",
                "daysOfWeek": [
                    "Вс",
                    "Пн",
                    "Вт",
                    "Ср",
                    "Чт",
                    "Пт",
                    "Сб"
                ],
                "monthNames": [
                    "Январь",
                    "Февраль",
                    "Март",
                    "Апрель",
                    "Май",
                    "Июнь",
                    "Июль",
                    "Август",
                    "Сентябрь",
                    "Октябрь",
                    "Ноябрь",
                    "Декабрь"
                ],
                "firstDay": 1
            }
        }, function (start, end, label) {
                $("#from-value").val(start.toJSON());
                $("#to-value").val(end.toJSON());
            console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        });
    //$('input[name="daterange"]').data('daterangepicker').setStartDate(new Date($("#from-value").val()));
    //$('input[name="daterange"]').data('daterangepicker').setEndDate(new Date($("#to-value").val()));
    });
