import { Box, Button, ButtonGroup, TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
// import Color from "./Color";

function App() {
  const [intervalRedIsRunning, setIntervalRedIsRunning] = useState(false);
  const [intervalGreenIsRunning, setIntervalGreenIsRunning] = useState(false);
  const [intervalBlueIsRunning, setIntervalBlueIsRunning] = useState(false);
  const [rgbColor, setRgbColor] = useState('');
  const [hexColor, setHexColor] = useState('');
  const [rValue, setRValue] = useState(34);
  const [gValue, setGValue] = useState(120);
  const [bValue, setBValue] = useState(56);
  const [incrementForRed, setIncrementForRed] = useState(20);
  const [incrementForGreen, setIncrementForGreen] = useState(20);
  const [incrementForBlue, setIncrementForBlue] = useState(20);
  const [paragraphColor, setParagraphColor] = useState('black');

  //=====================Total Necunosct=================
  // const hexToRgb = (hex) =>
  //   hex
  //     .replace(
  //       /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
  //       (m, r, g, b) => '#' + r + r + g + g + b + b
  //     )
  //     .substring(1)
  //     .match(/.{2}/g)
  //     .map((x) => parseInt(x, 16));
  // let [r, g, b] = hexToRgb(hexColor);
  //===========================================================

  const handleMinusBtnRed = () => {
    if (rValue - incrementForRed < 0) {
      setRValue(255);
    }
    setRValue((currentValue) => currentValue - Number(incrementForRed));

    // console.log('r:' + rValue);
    setRgbColor(`rgb(${rValue},${gValue},${bValue})`);
  };
  const handleMinusBtnGreen = () => {
    if (gValue - incrementForGreen < 0) {
      setGValue(255);
    }
    setGValue((currentValue) => currentValue - Number(incrementForGreen));

    // console.log('g:' + gValue);
    setRgbColor(`rgb(${rValue},${gValue},${bValue})`);
  };
  const handleMinusBtnRedBlue = () => {
    if (bValue - incrementForBlue < 0) {
      setBValue(255);
    }
    setBValue((currentValue) => currentValue - Number(incrementForBlue));

    // console.log('b:' + bValue);
    setRgbColor(`rgb(${rValue},${gValue},${bValue})`);
  };

  const handlePlusBtnRed = () => {
    setRValue((currentValue) => currentValue + Number(incrementForRed));
    if (rValue + Number(incrementForRed) > 255) {
      setRValue(0);
    }
    // console.log('r:' + rValue);
    setRgbColor(`rgb(${rValue},${gValue},${bValue})`);
  };
  const handlePlusBtnGreen = () => {
    setGValue((currentValue) => currentValue + Number(incrementForGreen));
    if (gValue + Number(incrementForGreen) > 255) {
      setGValue(0);
    }
    // console.log('g:' + gValue);
    setRgbColor(`rgb(${rValue},${gValue},${bValue})`);
  };
  const handlePlusBtnBlue = () => {
    setBValue((currentValue) => currentValue + Number(incrementForBlue));
    if (bValue + Number(incrementForBlue) > 255) {
      setBValue(0);
    }
    // console.log('b:' + bValue);
    setRgbColor(`rgb(${rValue},${gValue},${bValue})`);
  };

  useEffect(() => {
    setRgbColor(`rgb(${rValue},${gValue},${bValue})`);
  }, [rValue, gValue, bValue]);

  useEffect(() => {
    if (rValue + gValue + bValue < 330) {
      setParagraphColor('white');
    } else {
      setParagraphColor('black');
    }
  }, [rValue, gValue, bValue]);

  const startIntervalRed = () => {
    setIntervalRedIsRunning(!intervalRedIsRunning);
  };
  const startIntervalGreen = () => {
    setIntervalGreenIsRunning(!intervalGreenIsRunning);
  };
  const startIntervalBlue = () => {
    setIntervalBlueIsRunning(!intervalBlueIsRunning);
  };

  const redInterval = () => {
    setRValue((currentValue) => {
      if (currentValue + Number(incrementForRed) > 255) {
        return 0;
      }
      return currentValue + Number(incrementForRed);
    });
  };

  useEffect(() => {
    // console.log(intervalRedIsRunning);
    if (!intervalRedIsRunning) {
      return;
    }
    if (intervalRedIsRunning) {
      let myInt = setInterval(redInterval, 1000);
      return () => clearInterval(myInt);
    }
  }, [intervalRedIsRunning]);

  const greenInterval = () => {
    setGValue((currentValue) => {
      if (currentValue + Number(incrementForGreen) > 255) {
        return 0;
      }
      return currentValue + Number(incrementForGreen);
    });
  };

  useEffect(() => {
    // console.log(intervalGreenIsRunning);
    if (!intervalGreenIsRunning) {
      return;
    }
    if (intervalGreenIsRunning) {
      let myInt = setInterval(greenInterval, 1000);
      return () => clearInterval(myInt);
    }
  }, [intervalGreenIsRunning]);

  const blueInterval = () => {
    setBValue((currentValue) => {
      if (currentValue + Number(incrementForBlue) > 255) {
        return 0;
      }
      return currentValue + Number(incrementForBlue);
    });
  };

  useEffect(() => {
    // console.log(intervalBlueIsRunning);
    if (!intervalBlueIsRunning) {
      return;
    }
    if (intervalBlueIsRunning) {
      let myInt = setInterval(blueInterval, 1000);
      return () => clearInterval(myInt);
    }
  }, [intervalBlueIsRunning]);

  // ============rgb to hexadecimal============

  useEffect(() => {
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? '0' + hex : hex;
    }
    function rgbToHex(r, g, b) {
      return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    setHexColor(rgbToHex(rValue, gValue, bValue));
    // console.log(hexColor);
  }, [rgbColor]);
  // =====================================================
  return (
    <Box className='main-container'>
      <Typography variant='h3' component='h1' gutterBottom>
        ColorCycle
      </Typography>
      <Typography variant='h5' component='h2' textAlign='center' gutterBottom>
        Please Enter Values <br />
        For Red, Green and Blue
      </Typography>
      <Box className='inputs'>
        <div className='colorContainer'>
          <ButtonGroup size='small' style={{ height: 30 }}>
            <Button onClick={handleMinusBtnRed}>-</Button>
            <Button id={'redBtn'} style={{ minWidth: 60 }} disabled>
              Red
            </Button>
            <Button className='plusBtn' onClick={handlePlusBtnRed}>
              +
            </Button>
          </ButtonGroup>

          <Box>
            <TextField
              type='number'
              placeholder={'increment'}
              value={incrementForRed}
              onChange={(e) => {
                setIncrementForRed(e.target.value);
              }}
            />
            <Button
              color='error'
              variant={intervalRedIsRunning ? 'contained' : 'outlined'}
              size='small'
              className={'startIntervalBtn'}
              style={{ height: 30 }}
              onClick={startIntervalRed}
            >
              {intervalRedIsRunning ? 'Stop' : 'Start'}
            </Button>
          </Box>
        </div>
        <div className='colorContainer'>
          <ButtonGroup size='small' style={{ height: 30 }}>
            <Button onClick={handleMinusBtnGreen}>-</Button>
            <Button id={'greenBtn'} style={{ minWidth: 60 }} disabled>
              Green
            </Button>
            <Button className='plusBtn' onClick={handlePlusBtnGreen}>
              +
            </Button>
          </ButtonGroup>

          <div>
            <TextField
              type='number'
              placeholder={'increment'}
              value={incrementForGreen}
              onChange={(e) => setIncrementForGreen(e.target.value)}
            />
            <Button
              color='success'
              variant={intervalGreenIsRunning ? 'contained' : 'outlined'}
              size='small'
              className={'startIntervalBtn'}
              onClick={startIntervalGreen}
            >
              {intervalGreenIsRunning ? 'Stop' : 'Start'}
            </Button>
          </div>
        </div>
        <div className='colorContainer'>
          <ButtonGroup size='small' style={{ height: 30 }}>
            <Button onClick={handleMinusBtnRedBlue}>-</Button>
            <Button id={'blueBtn'} disabled style={{ minWidth: 60 }}>
              Blue
            </Button>
            <Button className='plusBtn' onClick={handlePlusBtnBlue}>
              +
            </Button>
          </ButtonGroup>

          <div>
            <TextField
              type='number'
              placeholder={'interval'}
              value={incrementForBlue}
              onChange={(e) => {
                setIncrementForBlue(e.target.value);
              }}
            />
            <Button
              color='info'
              size='small'
              variant={intervalBlueIsRunning ? 'contained' : 'outlined'}
              className={'startIntervalBtn'}
              onClick={startIntervalBlue}
            >
              {intervalBlueIsRunning ? 'Stop' : 'Start'}
            </Button>
          </div>
        </div>
      </Box>

      <div id='square' style={{ backgroundColor: `${rgbColor}` }}>
        <Typography
          variant='h4'
          textAlign='center'
          style={{
            color: `${paragraphColor}`,
            marginTop: 40,
          }}
        >
          {rgbColor}
        </Typography>
        <Typography
          variant='h4'
          textAlign='center'
          style={{
            color: `${paragraphColor}`,
            marginTop: 40,
          }}
        >
          {hexColor}
        </Typography>
      </div>
    </Box>
  );
}

export default App;
