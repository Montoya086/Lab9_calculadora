import React, { useEffect, useState } from 'react'

export default function App() {
  const [display, setDisplay] = useState('0')
  const [operator, setOperator] = useState('')
  const [firstVal, setFirstVal] = useState('')
  const [isFirst, setIsFirst] = useState(true)

  const handleNumber = (e) => {
    if (display.length <= 8) {
      if (operator === '') {
        if (display === '0') {
          if (e === '.') {
            setDisplay(display + e)
          } else {
            setDisplay(e)
          }
        } else if (e === '.') {
          if (!display.includes('.')) {
            setDisplay(display + e)
          }
        } else {
          setDisplay(display + e)
        }
      } else if (operator !== '') {
        if (isFirst) {
          setFirstVal(display)
          const newVal = ''
          setDisplay(newVal + e)
          setIsFirst(false)
        } else {
          setDisplay(display + e)
        }
      }
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setOperator('')
    setFirstVal('')
    setIsFirst(true)
  }

  const handleMode = () => {
    if (display.startsWith('-')) {
      setDisplay(display.slice(1))
    } else if (display.length !== 9) {
      const sign = '-'
      setDisplay(sign + display)
    }
  }

  const handlePercent = () => {
    setDisplay((parseFloat(display) / 100).toString())
  }

  const handleEquals = () => {
    setIsFirst(true)
    switch (operator) {
      case '÷':
        setDisplay(((parseFloat(firstVal) / parseFloat(display)).toFixed(3)).toString())
        break
      case '×':
        setDisplay((parseFloat(firstVal) * parseFloat(display)).toString())
        break
      case '-':
        setDisplay((parseFloat(firstVal) - parseFloat(display)).toString())
        break
      case '+':
        setDisplay((parseFloat(firstVal) + parseFloat(display)).toString())
        break
      default:
    }
  }

  const handleOperator = (e) => {
    setOperator(e)
    if (!isFirst) {
      handleEquals()
    }
    setFirstVal(display)
  }

  useEffect(() => {
    if (display.length > 9) {
      setDisplay('Error')
    }
  }, [display])

  useEffect(() => {
    const handleKey = (e) => {
      const k = e.key
      if (/^\d$/.test(k)) {
        handleNumber(k)
      } else if (k === 'Escape') {
        handleClear()
      } else if (k === '+' || k === '-' || k === '*' || k === '/') {
        if (k === '/') {
          handleOperator('÷')
        } else {
          handleOperator(k)
        }
      } else if (k === 'Enter') {
        handleEquals()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('keydown', handleKey)
    }
  })

  return (
    <div className="body">
      <div className="container">
        <div className="calc-body">
          <div className="calc-display">
            <h4>
              {display}
            </h4>
          </div>
          <div className="calc-keyboard">
            {/* Fila 1 */}
            <div className="calc-button small function" onClick={handleClear} onKeyDown={handleClear} role="presentation">
              <h4>
                C
              </h4>
            </div>
            <div className="calc-button small function" onClick={handleMode} onKeyDown={handleMode} role="presentation">
              <h4>
                &#8314;&#8725;&#8331;
              </h4>
            </div>
            <div className="calc-button small function" onClick={handlePercent} onKeyDown={handlePercent} role="presentation">
              <h4>
                %
              </h4>
            </div>
            <div className="calc-button small operator" onClick={() => handleOperator('÷')} onKeyDown={handleOperator} role="presentation">
              <h4>
                ÷
              </h4>
            </div>
            {/* Fila 2 */}
            <div className="calc-button small number" onClick={() => handleNumber('7')} onKeyDown={handleNumber} role="presentation">
              <h4>
                7
              </h4>
            </div>
            <div className="calc-button small number" onClick={() => handleNumber('8')} onKeyDown={handleNumber} role="presentation">
              <h4>
                8
              </h4>
            </div>
            <div className="calc-button small number" onClick={() => handleNumber('9')} onKeyDown={handleNumber} role="presentation">
              <h4>
                9
              </h4>
            </div>
            <div className="calc-button small operator" onClick={() => handleOperator('×')} onKeyDown={handleOperator} role="presentation">
              <h4>
                ×
              </h4>
            </div>
            {/* Fila 3 */}
            <div className="calc-button small number" onClick={() => handleNumber('4')} onKeyDown={handleNumber} role="presentation">
              <h4>
                4
              </h4>
            </div>
            <div className="calc-button small number" onClick={() => handleNumber('5')} onKeyDown={handleNumber} role="presentation">
              <h4>
                5
              </h4>
            </div>
            <div className="calc-button small number" onClick={() => handleNumber('6')} onKeyDown={handleNumber} role="presentation">
              <h4>
                6
              </h4>
            </div>
            <div className="calc-button small operator" onClick={() => handleOperator('-')} onKeyDown={handleOperator} role="presentation">
              <h4>
                -
              </h4>
            </div>
            {/* Fila 4 */}
            <div className="calc-button small number" onClick={() => handleNumber('1')} onKeyDown={handleNumber} role="presentation">
              <h4>
                1
              </h4>
            </div>
            <div className="calc-button small number" onClick={() => handleNumber('2')} onKeyDown={handleNumber} role="presentation">
              <h4>
                2
              </h4>
            </div>
            <div className="calc-button small number" onClick={() => handleNumber('3')} onKeyDown={handleNumber} role="presentation">
              <h4>
                3
              </h4>
            </div>
            <div className="calc-button small operator" onClick={() => handleOperator('+')} onKeyDown={handleOperator} role="presentation">
              <h4>
                +
              </h4>
            </div>
            {/* Fila 5 */}
            <div className="calc-button big number" onClick={() => handleNumber('0')} onKeyDown={handleNumber} role="presentation">
              <h4>
                0
              </h4>
            </div>
            <div className="calc-button small number" onClick={() => handleNumber('.')} onKeyDown={handleNumber} role="presentation">
              <h4>
                .
              </h4>
            </div>
            <div className="calc-button small operator" onClick={handleEquals} onKeyDown={handleEquals} role="presentation">
              <h4>
                =
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
