using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ResistorValueCalculator
{
    public class OhmValueCalculator : IOhmValueCalculator
    {
        private Dictionary<string, List<double>> GetColorCodesDictionary() => new Dictionary<string, List<double>>()
            {
                { "black", new List<double>{0, 0} },
                { "brown", new List<double>{1, 1} },
                { "red", new List<double>{2, 2}  },
                { "orange",new List<double>{3,0} },
                { "yellow", new List<double>{4, 0} },
                { "green", new List<double>{5, 0.5} },
                { "blue",  new List<double>{6, 0.25} },
                { "violet", new List<double>{7, 0.10} },
                { "grey", new List<double>{8, 0.05} },
                { "white", new List<double>{9, 0} },
                { "gold", new List<double>{-1, 5} },
                { "silver", new List<double>{-2, 10} }
            };

        public string CalculateOhmValue(string bandAColor, string bandBColor, string bandCColor, string bandDColor)
        {
            try
            {
                Dictionary<string, List<double>> ColorCodes = GetColorCodesDictionary();
                if (ColorCodes.TryGetValue(bandCColor, out List<double> multiplierExponent) && ColorCodes.TryGetValue(bandDColor, out List<double> toleranceExponent))
                {
                    var multiplier = Math.Pow(10, multiplierExponent[0]);
                    string resistorValue = GetFormattedNumber(((ColorCodes[bandAColor][0] * 10) + ColorCodes[bandBColor][0]) * multiplier);
                    return $"{resistorValue}Ω ± {toleranceExponent[1]}%";
                }
                else
                    return $"Color selection not supported.";
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }



        public static string GetFormattedNumber(double num)
        {
            if (num >= 100000000)
                return (num / 1000000).ToString("#,0M");

            if (num >= 10000000)
                return (num / 1000000).ToString("0.#") + "M";

            if (num >= 100000)
                return (num / 1000).ToString("#,0K");

            if (num >= 10000)
                return (num / 1000).ToString("0.#") + "K";

            return num.ToString("#,0");
        }
    }
}
