class CurrencyConverter{
    
    constructor(exchangeRate){
        this.exchangeRate = exchangeRate
    }
    
    convert(value, sourceCurrency, targetCurrency){
        const convertedValue = value * this.exchangeRate;
        console.log(`${value} ${sourceCurrency} is equivalent to ${convertedValue} ${targetCurrency}`);
        return convertedValue;
    }
}

// Criando instância do conversor de moeda
const currencyConverterInstance = new CurrencyConverter(5.0);

// Convertendo moeda atraves do metodo convert que faz parte da classe CurrencyConverter
const targetCurrency = 'BRL'
const convertedValue = currencyConverterInstance.convert(100, 'USD', targetCurrency);
console.log(`Converted value: ${convertedValue} ${targetCurrency}`);