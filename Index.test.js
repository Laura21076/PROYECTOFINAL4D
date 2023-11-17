
const { verificarNombreCompleto } = require('./Index.js');

test('Devuelve mensaje de error si el nombre está vacío', () => {
  const resultado = verificarNombreCompleto('');
  expect(resultado).toBe('Por favor, ingrese un nombre.');
});

test('Devuelve mensaje de error si el nombre no contiene tres palabras', () => {
  const resultado = verificarNombreCompleto('Laura Cardona');
  expect(resultado).toBe('El nombre debe contener tres palabras.');
});

test('Devuelve el nombre en mayúsculas si es válido', () => {
  const resultado = verificarNombreCompleto('Laura Cardona Morales');
  expect(resultado).toBe('LAURA CARDONA MORALES');
});





