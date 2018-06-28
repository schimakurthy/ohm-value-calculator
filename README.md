# ohm-value-calculator

This application calculated the value of a 4-band resistor using their color codes.
In a 4-band resistor, each color is associated to either a value of the resistor or multiplier or tolerance.
Below is the user interface of the application

<center>
    <img src="https://github.com/schimakurthy/ohm-value-calculator/blob/master/4-band-resistor/public/resistor.png" width="55%">
  </center>
  
  Now each band has a set of valid color options to choose.

<table>
  <tr>
    <td>
      <b>Color</b>
    </td>
    <td>
      <b>Numeric Value</b>
    </td>
    <td>
      <b>Multiplier</b>
    </td>
    <td>
      <b>Tolerance</b>
    </td>
  </tr>
  <tr>
    <td>
      Black
    </td>
    <td>
      0
    </td>
    <td>
      1
    </td>
    <td>
    </td>
  </tr>
  <tr>
    <td>
      Brown
    </td>
    <td>
      1
    </td>
    <td>
      10
    </td>
    <td>
      1
    </td>
  </tr>
   <tr>
    <td>
      Red
    </td>
    <td>
      2
    </td>
    <td>
      100
    </td>
    <td>
      2
    </td>
  </tr>
  <tr>
    <td>
      Orange
    </td>
    <td>
      3
    </td>
    <td>
      1000
    </td>
    <td>
      1
    </td>
  </tr>
   <tr>
    <td>
      Yellow
    </td>
    <td>
      4
    </td>
    <td>
      10000
    </td>
    <td>
    </td>
  </tr>
  <tr>
    <td>
      Green
    </td>
    <td>
      5
    </td>
    <td>
      100000
    </td>
    <td>
      0.5
    </td>
  </tr>
   <tr>
    <td>
      Blue
    </td>
    <td>
      6
    </td>
    <td>
      1000000
    </td>
    <td>
      0.25
    </td>
  </tr>
  <tr>
    <td>
      Violet
    </td>
    <td>
      7
    </td>
    <td>
      10000000
    </td>
    <td>
      0.1
    </td>
  </tr>
   <tr>
    <td>
      Grey
    </td>
    <td>
      8
    </td>
    <td>
      100000000
    </td>
    <td>
    </td>
  </tr>
  <tr>
    <td>
      White
    </td>
    <td>
      9
    </td>
    <td>
      1000000000
    </td>
    <td>   
    </td>
  </tr>
   <tr>
    <td>
      Gold
    </td>
    <td>      
    </td>
    <td>
      0.1
    </td>
    <td>
    5
    </td>
  </tr>
  <tr>
    <td>
      Silver
    </td>
    <td>      
    </td>
    <td>
      0.01
    </td>
    <td>
      10
    </td>
  </tr>
</table>


Resistor value is calculated based on the below formula

Resistor value = ((Value of Band A*10) +Value of Band B)*Multiplier ± Tolerance%

#### Technology stack:
- React.js
- Jest Test cases
- ASP.NET Core 2.0
- C#
- Swagger API
- XUnit Unit tests

#### IDEs used:
- Visual Studio Code (for front end)
- Visual Studio Community 2017 (for .Net Core WEB API)

### Setting up the development environment:

Download the zip file and unzip to any new folder of your choice.

#### API setup:
- Open Visual Studio
- Browse for the ‘API’ folder inside the unzipped location
- Select the .sln file to open the project
- Rebuild the application and run it. (Assuming IIS Express is enabled)
- The end point url http://localhost/54841 is set by default.
-	We use this URL to access the service and calculate the resistor value.
#### Frontend setup:
-	Open Visual Studio Code
-	Browse and select ‘4-band-resistor’ folder inside the unzipped location
-	Open Integrated Terminal and execute ‘npm i’
-	Once all the modules are installed execute ‘npm start’



