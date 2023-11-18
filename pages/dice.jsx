import { useState, useEffect } from 'react';
import Die from '../components/die';

export default function Dice() {
  const [numDice, setNumDice] = useState(0);
  const [diceValues, setDiceValues] = useState(Array(numDice).fill(''));
  const [individualRolls, setIndividulaRolls] = useState([]);
  const [total, setTotal] = useState(null);
  const [show, setShow] = useState(false);
  const [sameSides, setSameSides] = useState(false);

  useEffect(() => {
    if (sameSides && numDice > 0) {
      const newArray = Array(numDice).fill(diceValues[0] || '');
      if (!arraysAreEqual(diceValues, newArray)) {
        setDiceValues(newArray);
      }
    }
  }, [sameSides, numDice, diceValues]);

  const arraysAreEqual = (arr1, arr2) => {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  }

  const handleNumDiceChange = (e) => {
    const newNumDice = parseInt(e.target.value, 10);
    setNumDice(newNumDice);
    setDiceValues(prevValues => Array(newNumDice).fill('').map((_, index) => prevValues[index] || ''));
    setTotal(null);
  }

  const handleDiceSidesChange = (index, value) => {
    const newDiceValues = [...diceValues];
    newDiceValues[index] = value;
    setDiceValues(newDiceValues);
  }

  const handleSameSidesChange = (e) => {
    setSameSides(e.target.checked);
  }

  const handleRoll = () => {
    console.log('rolling');
    setShow(false);

    setTimeout(() => {
      setShow(true);
    }, 1);

    if (!diceValues.includes('')) {
      const rolls = diceValues.map((values) => Math.floor(Math.random() * values) + 1);
      const calculatedTotal = rolls.reduce((sum, roll) => sum + roll, 0);
      setIndividulaRolls(rolls);
      setTotal(calculatedTotal);
    } else {
      alert('Select a value for each die');
    }
  }

  return (
    <div className='page'>
      <h1 className='header'>Dice Roller</h1>
      <div className='dice-roller'>
        <div className='dice-number'>
          <label>Number of Dice
            <select
              value={numDice}
              onChange={handleNumDiceChange}
              required
            >
              <option value='' default>Select How Many Dice to Roll</option>
              {[...Array(10)].map((_, index) => (
                <option key={index + 1} value={index + 1}>{index + 1}</option>
              ))}
            </select>
          </label>
        </div>
        {numDice > 1
          ?
          <div className='checkbox'>
            <input
              type='checkbox'
              id='sameSidesCheckBox'
              checked={sameSides}
              onChange={handleSameSidesChange}
            />
            <label htmlFor='sameSidesCheckBox'>All dice have the same number of sides</label>
          </div>
          : null}
        {diceValues.length > 0 && (
          <div className='dice-values'>
            {sameSides
              ? (
                <Die
                  key={1}
                  index={1}
                  value={diceValues[0]}
                  sameSides={sameSides}
                  onDiceSidesChange={(value) => handleDiceSidesChange(0, value)}
                />
              )
              : (
                [...Array(numDice)].map((_, index) => (
                  <Die
                    key={index + 1}
                    index={index + 1}
                    value={diceValues[index]}
                    sameSides={sameSides}
                    onDiceSidesChange={(value) => handleDiceSidesChange(index, value)}
                  />
                ))
              )
            }
            <button className='dice-button' onClick={handleRoll}>Roll the Dice</button>
          </div>
        )}

        {total !== null && (
          <div className='dice-sum'>
            <div>
              {numDice > 1
                ?
                <h3 className='dice-center'>Each Roll:</h3>
                :
                <h3 className='dice-center'>Roll:</h3>
              }
              <div className='rolls'>
                {show && individualRolls.map((roll, index) => {
                  return <h2 className={`roll fade-in fade-in-delay-${index + 1}`} key={index}>{roll}</h2>
                })}
              </div>
            </div>
            {show && (
              <div className={`fade-in fade-in-delay-${individualRolls.length + 1}`}>
                {numDice > 1
                  ?
                  <div>
                    <h3 className='dice-center'>Total:</h3>
                    <h2 className='dice-center'>{total}</h2>
                  </div>
                  :
                  null
                }
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
}