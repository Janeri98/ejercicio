import React, { useState } from 'react';
import './App.css';

function QuadraticSolver() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState('');
  const [alert, setAlert] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const coefA = parseFloat(a);
    const coefB = parseFloat(b);
    const coefC = parseFloat(c);

    if (isNaN(coefA) || isNaN(coefB) || isNaN(coefC)) {
      setAlert('todos los valores deben ser numericos.');
      setResult('');
      return;
    }

    if (coefA === 0) {
      setAlert('el valor de "a" no puede ser 0 en una ecuacion cuadratica.');
      setResult('');
      return;
    }

    const discriminant = coefB ** 2 - 4 * coefA * coefC;

    if (discriminant > 0) {
      const x1 = (-coefB + Math.sqrt(discriminant)) / (2 * coefA);
      const x2 = (-coefB - Math.sqrt(discriminant)) / (2 * coefA);
      setAlert('');
      setResult(`raices reales distintas: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`);
    } else if (discriminant === 0) {
      const x = -coefB / (2 * coefA);
      setAlert('');
      setResult(`raices reales iguales: x = ${x.toFixed(2)}`);
    } else {
      const realPart = (-coefB / (2 * coefA)).toFixed(2);
      const imaginaryPart = (Math.sqrt(-discriminant) / (2 * coefA)).toFixed(2);
      setAlert('');
      setResult(`raices complejas: x₁ = ${realPart} + ${imaginaryPart}i, x₂ = ${realPart} - ${imaginaryPart}i`);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="container p-4 shadow rounded bg-white" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="mb-4 text-center text-primary">Calculadora de Formula Cuadratica</h2>
        {alert && <div className="alert alert-danger text-center">{alert}</div>}
        {result && <div className="alert alert-success text-center">{result}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Coeficiente a:</label>
            <input type="text" className="form-control" value={a} onChange={(e) => setA(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Coeficiente b:</label>
            <input type="text" className="form-control" value={b} onChange={(e) => setB(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Coeficiente c:</label>
            <input type="text" className="form-control" value={c} onChange={(e) => setC(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Calcular</button>
        </form>
      </div>
    </div>
  );
}

export default QuadraticSolver;

