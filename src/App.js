import React from 'react'

export default function App() {
  return (
    <div className="container">
      <div className="calc-body">
        <div className="calc-display">
          <h4>
            0
          </h4>
        </div>
        <div className="calc-keyboard">
          {/* Fila 1 */}
          <div className="calc-button small function">
            <h4>
              C
            </h4>
          </div>
          <div className="calc-button small function">
            <h4>
              &#8314;&#8725;&#8331;
            </h4>
          </div>
          <div className="calc-button small function">
            <h4>
              %
            </h4>
          </div>
          <div className="calc-button small operator">
            <h4>
              ÷
            </h4>
          </div>
          {/* Fila 2 */}
          <div className="calc-button small number">
            <h4>
              7
            </h4>
          </div>
          <div className="calc-button small number">
            <h4>
              8
            </h4>
          </div>
          <div className="calc-button small number">
            <h4>
              9
            </h4>
          </div>
          <div className="calc-button small operator">
            <h4>
              ×
            </h4>
          </div>
          {/* Fila 3 */}
          <div className="calc-button small number">
            <h4>
              4
            </h4>
          </div>
          <div className="calc-button small number">
            <h4>
              5
            </h4>
          </div>
          <div className="calc-button small number">
            <h4>
              6
            </h4>
          </div>
          <div className="calc-button small operator">
            <h4>
              -
            </h4>
          </div>
          {/* Fila 4 */}
          <div className="calc-button small number">
            <h4>
              1
            </h4>
          </div>
          <div className="calc-button small number">
            <h4>
              2
            </h4>
          </div>
          <div className="calc-button small number">
            <h4>
              3
            </h4>
          </div>
          <div className="calc-button small operator">
            <h4>
              +
            </h4>
          </div>
          {/* Fila 5 */}
          <div className="calc-button big number">
            <h4>
              0
            </h4>
          </div>
          <div className="calc-button big operator">
            <h4>
              =
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
