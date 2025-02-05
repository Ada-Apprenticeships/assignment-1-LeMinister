function temperatureConversion(temperature, fromScale, toScale) {
   //  checks if it is a valid number 
    if (isNaN(temperature)|| temperature== null) {
        throw new Error('Temperature must be a numeric value');
        //console.log('Not a valid number');
        //return null;
    } else {
        temperature = parseFloat(temperature); //used to convert all valid numbers to a float
    }

    // converts both scales answers to lowercase
    fromScale = fromScale.toLowerCase();
    toScale = toScale.toLowerCase();
    
    //let result=0
    let result;
  //conversion calculations
    if (fromScale === toScale) {
        result = temperature 
        return result;
    }

    else if (fromScale === 'c' && toScale === 'f') {
        result = (temperature * 9 / 5) + 32;
        return result;
    }

    else if (fromScale === 'c' && toScale === 'k') {
        result = temperature + 273.15;
        return result;
    }
 
    else if (fromScale === 'f' && toScale === 'c') {
        result = (temperature - 32) * 5 / 9;
        return result;
    }
    
    
    else if (fromScale === 'f' && toScale === 'k') {
        result = ((temperature - 32) * 5 / 9) + 273.15;
        return result;
    }
    
    else if (fromScale === 'k' && toScale === 'c') {
        result = temperature - 273.15;
        return result;
    }
    
    else if (fromScale === 'k' && toScale === 'f') {
        result = ((temperature - 273.15) * 9 / 5) + 32;
        return result;
    } else {
        throw new Error('Wrong scale used');
        //console.log('Wrong scale used');
        //return null;
    }
}

export default temperatureConversion;