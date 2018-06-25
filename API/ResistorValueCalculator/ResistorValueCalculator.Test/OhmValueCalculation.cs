using ResistorValueCalculator.Controllers;
using System;
using Xunit;

namespace ResistorValueCalculator.Test
{
    public class OhmValueCalculation
    {
        [Fact]
        public void TestGetResistorValue()
        {
            string[] bandAandB = new[] { "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white" };
            string[] bandC = new[] { "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "gold", "silver" };
            string[] bandD = new[] { "brown", "red", "green", "blue", "violet", "grey", "gold", "silver" };
            Random random = new Random();
            string bandAColor = bandAandB[random.Next(bandAandB.Length)];
            string bandBColor = bandAandB[random.Next(bandAandB.Length)];
            string bandCColor = bandC[random.Next(bandC.Length)];
            string bandDColor = bandD[random.Next(bandD.Length)];
            var controller = new OhmValueController();
            string result = controller.GetResistorValue(bandAColor, bandBColor, bandCColor, bandDColor);
            Assert.True(!result.Equals("Color selection not supported."));
        }
    }
}
