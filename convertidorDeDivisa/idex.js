// Dollar
function ConverterDollar() {
  var cantidad = parseFloat(document.getElementById("cantidad_dolar").value);
  var selection = document.getElementById("Dollar").value;

  var D_E = 0.9;
  var D_Y = 134.17;
  var D_R = 81.45;
  var D_L = 0.8;

  var proceso;

  switch (selection) {
    case "EURO":
      proceso = cantidad * D_E;
      break;
    case "YEN":
      proceso = cantidad * D_Y;
      break;
    case "RUBLORUSO":
      proceso = cantidad * D_R;
      break;
    case "LIBRAESTERLINA":
      proceso = cantidad * D_L;
      break;
    default:
      proceso = cantidad;
  }

  document.getElementById("result_dolar").innerHTML = proceso;
}
function ConverterEuro() {
  var cantidad = parseFloat(document.getElementById("cantidad_euro").value);
  var selection = document.getElementById("Euro").value;

  var E_D = 1.11;
  var E_Y = 148.89;
  var E_R = 90.38;
  var E_L = 0.89;

  var proceso;

  switch (selection) {
    case "DOLAR":
      proceso = cantidad * E_D;
      break;
    case "YEN":
      proceso = cantidad * E_Y;
      break;
    case "RUBLORUSO":
      proceso = cantidad * E_R;
      break;
    case "LIBRAESTERLINA":
      proceso = cantidad * E_L;
      break;
    default:
      proceso = cantidad;
  }

  document.getElementById("result_euro").innerHTML = proceso;
}
// Rublo ruso
function ConverterRublo() {
  var cantidad = parseFloat(document.getElementById("cantidad_rublo").value);
  var selection = document.getElementById("Rublo").value;

  var R_D = 0.012;
  var R_E = 0.011;
  var R_Y = 1.65;
  var R_L = 0.0099;

  var proceso;

  switch (selection) {
    case "DOLAR":
      proceso = cantidad * R_D;
      break;
    case "EURO":
      proceso = cantidad * R_E;
      break;
    case "YEN":
      proceso = cantidad * R_Y;
      break;
    case "LIBRAESTERLINA":
      proceso = cantidad * R_L;
      break;
    default:
      proceso = cantidad;
  }

  document.getElementById("result_rublo").innerHTML = proceso;
}
// YEN
function ConverterYen() {
  var cantidad = parseFloat(document.getElementById("cantidad_yen").value);
  var selection = document.getElementById("Yen").value;

  var Y_D = 0.0075;
  var Y_E = 0.0067;
  var Y_R = 0.61;
  var Y_L = 0.006;

  var proceso;

  switch (selection) {
    case "DOLAR":
      proceso = cantidad * Y_D;
      break;
    case "EURO":
      proceso = cantidad * Y_E;
      break;
    case "RUBLORUSO":
      proceso = cantidad * Y_R;
      break;
    case "LIBRAESTERLINA":
      proceso = cantidad * Y_L;
      break;
    default:
      proceso = cantidad;
  }

  document.getElementById("result_yen").innerHTML = proceso;
}
// LIBRA ESTERLINA
function ConverterLibra() {
  var cantidad = parseFloat(document.getElementById("cantidad_libra").value);
  var selection = document.getElementById("Libra").value;

  var L_D = 1.24;
  var L_E = 1.12;
  var L_R = 101.28;
  var L_Y = 166.81;

  var proceso;

  switch (selection) {
    case "DOLAR":
      proceso = cantidad * L_D;
      break;
    case "EURO":
      proceso = cantidad * L_E;
      break;
    case "RUBLORUSO":
      proceso = cantidad * L_R;
      break;
    case "YEN":
      proceso = cantidad * L_Y;
      break;
    default:
      proceso = cantidad;
  }

  document.getElementById("result_libra").innerHTML = proceso;
}
