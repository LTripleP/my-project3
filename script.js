var Carinfo = {
  2025: {
    Audi: {
      Q7: [
        "Premium 4dr SUV AWD w/45 TFSI (2.0L 4cyl Turbo gas/electric mild hybrid 8A)",
        "Premium 4dr SUV AWD w/55 TFSI (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
        "Premium Plus 4dr SUV AWD w/45 TFSI (2.0L 4cyl Turbo gas/electric mild hybrid 8A)",
        "Premium Plus 4dr SUV AWD w/55 TFSI (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
      ],
      SQ7: [
        "Premium Plus 4dr SUV AWD (4.0L 8cyl Turbo gas/electric hybrid 8A)",
        "Premium 4dr SUV AWD (4.0L 8cyl Turbo gas/electric hybrid 8A)",
      ],
    },
    BMW: {
      "3 Series": [
        "M3 4dr Sedan (3.0L 6cyl Turbo 6M)",
        "M3 Competition 4dr Sedan (3.0L 6cyl Turbo 8A)",
        "M3 Competition xDrive 4dr Sedan AWD (3.0L 6cyl Turbo 8A)",
      ],
      "4 Series": [
        "430i 2dr Coupe (2.0L 4cyl Turbo gas/electric mild hybrid 8A)",
        "430i 2dr Convertible (2.0L 4cyl Turbo gas/electric mild hybrid 8A)",
      ],
      "8 Series": [
        "840i 3dr Convertible (3.0L 6cyl Turbo 8A)",
        "840i 2dr Coupe (3.0L 6cyl Turbo 8A)",
      ],
    },
  },
  2024: {
    "Aston Martin": {
      DBX707: ["4dr SUV AWD (4.0L 8cyl Turbo 9A)"],
    },
    Bentley: {
      Bentayga: [
        "A Hybrid 4dr SUV AWD (3.0L 6cyl Turbo gas/electric plug-in hybrid 8A)",
        "A V8 4dr SUV AWD (4.0L 8cyl Turbo 8A)",
      ],
      "Bentayga EWB": [
        "A V8 4dr SUV AWD (4.0L 8cyl Turbo 8A)",
        "Azure V8 4dr SUV AWD (4.0L 8cyl Turbo 8A)",
        "Mulliner V8 4dr SUV AWD (4.0L 8cyl Turbo 8A)",
        "V8 4dr SUV AWD (4.0L 8cyl Turbo 8A)",
      ],
    },
  },

  2023: {
    Chevrolet: {
      Blazer: [
        "2LT 4dr SUV (2.0L 4cyl Turbo 9A)",
        "2LT 4dr SUV AWD(2.0L 4cyl Turbo 9A)",
        "3LT 4dr SUV (2.0L 4cyl Turbo 9A)",
      ],
      Camaro: [
        "1LS 2dr Coupe (2.0L 4cyl Turbo 6M)",
        "1LS 2dr Convertible (2.0L 4cyl Turbo 6M)",
        "1SS 2dr Convertible (6.2L 8cyl  6M)",
      ],
    },
    Dodge: {
      Challenger: [
        "GT 2dr Coupe (3.6L 6cyl 8A)",
        "GT 2dr Coupe AWD (3.6L 6cyl 8A)",
      ],
      Charger: [
        "GT 4dr Sedan (3.6L 6cyl 8A)",
        "Gt 4dr Sedan AWD (3.6L 6cyl 8A)",
        "R/T 4dr Sedan (5.7L 8cyl 8A)",
      ],
    },
  },
};
window.onload = function () {
  const selectYear = document.getElementById("year"),
    selectMake = document.getElementById("make"),
    selectModel = document.getElementById("model"),
    selectTrim = document.getElementById("trim"),
    resultInfo = document.getElementById("resultInfo"),
    selects = document.querySelectorAll("select");

  // Initialize select menus
  selectMake.disabled = true;
  selectModel.disabled = true;
  selectTrim.disabled = true;

  // Populate the year dropdown
  for (let year in Carinfo) {
    selectYear.options[selectYear.options.length] = new Option(
      year,
      year
    );
  }

  // Set cursor styling based on disabled status
  selects.forEach(
    (select) => (select.style.cursor = select.disabled ? "auto" : "pointer")
  );

  // Year change
  selectYear.onchange = function (e) {
    selectMake.disabled = false;
    selectModel.disabled = true;
    selectTrim.disabled = true;
    selectMake.length = 1;
    selectModel.length = 1;
    selectTrim.length = 1;
    for (let year in Carinfo[e.target.value]) {
      selectMake.options[selectMake.options.length] = new Option(
        year,
        year
      );
    }
  };

  // Make change
  selectMake.onchange = function (e) {
    selectModel.disabled = false;
    selectTrim.disabled = true;
    selectModel.length = 1;
    selectTrim.length = 1;
    for (let make in Carinfo[selectYear.value][e.target.value]) {
      selectModel.options[selectModel.options.length] = new Option(make, make);
    }
  };

  // Model change
  selectModel.onchange = function (e) {
    selectTrim.disabled = false;
    selectTrim.length = 1;
    let model = Carinfo[selectYear.value][selectMake.value][e.target.value];
    for (let i = 0; i < model.length; i++) {
      selectTrim.options[selectTrim.options.length] = new Option(
        model[i],
        model[i]
      );
    }
  };

  // Final selection - trim
  selectTrim.onchange = function () {
    resultInfo.innerText = `Year: ${selectYear.value},
    Make: ${selectMake.value},
    Model: ${selectModel.value},
    Trim: ${selectTrim.value}`;
  };
};

// Refresh button functionality
function refreshPage() {
  const selectYear = document.getElementById("year"),
    selectMake = document.getElementById("make"),
    selectModel = document.getElementById("model"),
    selectTrim = document.getElementById("trim"),
    resultInfo = document.getElementById("resultInfo"),
    selects = document.querySelectorAll("select");

  // Reset selections and disable dropdowns
  selectYear.selectedIndex = 0;
  selectMake.selectedIndex = 0;
  selectModel.selectedIndex = 0;
  selectTrim.selectedIndex = 0;
  selectMake.disabled = true;
  selectModel.disabled = true;
  selectTrim.disabled = true;

  // Clear result info text
  resultInfo.innerText = "";
  selects.forEach(
    (select) => (select.style.cursor = select.disabled ? "auto" : "pointer")
  );
}
