using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ResistorValueCalculator.Controllers
{
    [Produces("application/json")]
    [Route("api/OhmValue")]
    public class OhmValueController : Controller
    {
        [HttpGet("GetResistorValue/{bandAColor}/{bandBColor}/{bandCColor}/{bandDColor}")]
        public string GetResistorValue(string bandAColor, string bandBColor, string bandCColor, string bandDColor)
        {
            OhmValueCalculator calculator = new OhmValueCalculator();
            return calculator.CalculateOhmValue(bandAColor, bandBColor, bandCColor, bandDColor);
        }
    }
}