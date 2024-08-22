export default function Keypad({handle,cal,clear})
{
return(
    <div className="keypad">
        <div className="row">
            <button onClick={()=>handle("7")} className="button">7</button>
            <button onClick={()=>handle("8")} className="button">8</button>
            <button onClick={()=>handle("9")} className="button">9</button>
            <button onClick={()=>handle("/")} className="operator">/</button>
        </div>
        <div className="row">
            <button onClick={()=>handle("4")} className="button">4</button>
            <button onClick={()=>handle("5")} className="button">5</button>
            <button onClick={()=>handle("6")} className="button">6</button>
            <button onClick={()=>handle("*")}  className="operator">*</button>
        </div>
        <div className="row">
            <button onClick={()=>handle("1")} className="button">1</button>
            <button onClick={()=>handle("2")} className="button">2</button>
            <button onClick={()=>handle("3")} className="button">3</button>
            <button onClick={()=>handle("-")} className="operator">-</button>
        </div>
        <div className="row">
            <button onClick={()=>handle("0")} className="button">0</button>
            <button onClick={()=>cal("=")} className="func-key">=</button>
            <button onClick={()=>clear("C")} className="func-key">C</button>
            <button onClick={()=>handle("+")} className="operator">+</button>
        </div>

    </div>
)
}