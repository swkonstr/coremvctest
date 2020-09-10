using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using System.Net.Http;


namespace WheaterForecast.Models
{

    public class WeatherParam
    {
        public WeatherParam() { }
        public WeatherParam(bool Init)
        {
            if (Init) Params = staticParams;
        }
        public static List<WeatherParam> staticParams = new List<WeatherParam>()
            {
                new WeatherParam(){ Id =0,  ParamName ="Температура"},
                new WeatherParam(){ Id =1,  ParamName ="Влажность"},
                new WeatherParam(){ Id =2,  ParamName ="Давление"},
                new WeatherParam(){ Id =3,  ParamName ="Ветер"}
            };
        public int Id { get; set; }
        public string ParamName { get; set; }
        public bool IsSelected { get; set; }
        public List<WeatherParam> Params { get; set; }
    }


    public class WeatherRequestModel
    {
        public WeatherRequestModel()
        {
            HttpClient http = new HttpClient();
            string url = "http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=501ae20968a8f5c90e4e1148e2169ff3";
            var data = http.GetAsync(url).Result.Content.ReadAsStringAsync().Result;
            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                WriteIndented = true
            };
            var ro = JsonSerializer.Deserialize<Rootobject>(data, options);
            this.Sdata = ro.list.Select(x => new dt { date = x.dt_txt, temp = x.main.temp, pressure = x.main.pressure, humidity = x.main.humidity, speed = x.wind.speed }).ToList();
        }

        public List<dt> Sdata { get; set; }
        public List<WeatherParam> Params { get; set; }

        //[DataType(DataType.Date)]
        public DateTime From { get; set; }
        
        //[DataType(DataType.Date)]
        public DateTime To { get; set; }
        public int Temp { get; set; }
        public int Pressure { get; set; }
        public int Humidity { get; set; }
        public int Wind { get; set; }
    }

    public class dt
    {
        public string date { get; set; }
        public float temp { get; set; }
        public int pressure { get; set; }
        public int humidity { get; set; }
        public float speed { get; set; }
    }
}
