import { useState } from 'react';
import { InputBox } from './components';
import useMoneyconvertInfo from './hooks/useMoneyconvertInfo';

function App() {
    const [to, setTo] = useState("inr");
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [convertAmount, setConvertAmount] = useState(0);

    const currencyInfo = useMoneyconvertInfo(from);
    const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertAmount(amount * currencyInfo[to]);
        setAmount(convertAmount);
    };

    const convert = () => {
        setConvertAmount(amount * currencyInfo[to]);
    };

    return (
    
        <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
           
            style={{ backgroundImage: `url('https://www.religareonline.com/blog/wp-content/uploads/2023/05/online-trading.jpg')` }}>
            <div className='w-full '>
            
                <div className='w-full max-w-md mx-auto border border-gray-90 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl inline-block"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">CashFlip</span></h1>
                <form onSubmit={(e) => { e.preventDefault(); convert(); }}>
                        <div className='w-full mb-1'>
                            <InputBox
                                label="from"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)} />
                        </div>

                        <div className='relative w-full h-0.5'>
                            <button
                                type='button'
                                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                                onClick={swap}>
                                SWAP
                            </button>
                        </div>

                        <div className='w-full mt-1 mb-4'>
                            <InputBox
                                label="to"
                                amount={convertAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                onAmountChange={(amount) => setConvertAmount(amount)} />
                        </div>

                        <button
                            type='submit'
                            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
