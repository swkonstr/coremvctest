﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WheaterForecast.Models
{
    public class FiveDaysModel
    {
    }

    public class Rootobject
    {
        public string cod { get; set; }
        public int message { get; set; }
        public int cnt { get; set; }
        public DataList[] list { get; set; }
        public City city { get; set; }
    }

    public class City
    {
        public int id { get; set; }
        public string name { get; set; }
        public Coord coord { get; set; }
        public string country { get; set; }
        public int population { get; set; }
        public int timezone { get; set; }
        public int sunrise { get; set; }
        public int sunset { get; set; }
    }

    public class Coord
    {
        public float lat { get; set; }
        public float lon { get; set; }
    }

    public class DataList
    {
        public int dt { get; set; }
        public Main main { get; set; }
        public Weather[] weather { get; set; }
        public Clouds clouds { get; set; }
        public Wind wind { get; set; }
        public int visibility { get; set; }
        public float pop { get; set; }
        public Sys sys { get; set; }
        public string dt_txt { get; set; }
    }

    public class Main
    {
        public float temp { get; set; }
        public float feels_like { get; set; }
        public float temp_min { get; set; }
        public float temp_max { get; set; }
        public int pressure { get; set; }
        public int sea_level { get; set; }
        public int grnd_level { get; set; }
        public int humidity { get; set; }
        public float temp_kf { get; set; }
    }

    public class Clouds
    {
        public int all { get; set; }
    }

    public class Wind
    {
        public float speed { get; set; }
        public int deg { get; set; }
    }

    public class Sys
    {
        public string pod { get; set; }
    }

    public class Weather
    {
        public int id { get; set; }
        public string main { get; set; }
        public string description { get; set; }
        public string icon { get; set; }
    }

}
