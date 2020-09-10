using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WheaterForecast.Models;

namespace WheaterForecast.Controllers
{
    public class WeatherController : Controller
    {
        // GET: WeatherController
        [Route("Weather/Index")]
        public IActionResult Index()
        {
            WeatherRequestModel wrm = new WeatherRequestModel()
            {
                Params = new WeatherParam(true).Params,
                From = DateTime.Now,
                To = DateTime.Now.AddDays(-5),
                Temp = 1,
                Pressure = 1,
                Humidity = 1,
                Wind = 1
            };
            return View(wrm);
            
        }

        [HttpPost]
        [Route("Weather/Index")]
        public JsonResult Index(WeatherRequestModel wrm)
        {
            return Json(wrm.Sdata);
        }
    }
}
