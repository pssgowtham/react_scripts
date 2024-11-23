import React, { useCallback, useRef, useEffect } from 'react'
import { useState } from 'react'

function Passgen() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [numbers, setNumbers] = useState(false);
    const [characters, setCharacters] = useState(false);
    const passwordRef = useRef(null);

    const copyClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
    },[password]);

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numbers) str += "0123456789";
        if(characters) str += "!@#$%^&*_+-=/";
        for(let i = 1; i <= length; i++) {
        let random = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(random);
        }  
        setPassword(pass); 
        
    }, [length, numbers, characters, setPassword]);

    useEffect(()=>{
        passwordGenerator();
    },[setCharacters, setLength, setNumbers, passwordGenerator])

  return (
    <div class="bg-purple-500 h-screen flex flex-col items-center justify-center p-4 text-white">
    <h1 class="text-4xl font-bold mb-8 text-center">Password Generator</h1>
    
    <div class="flex items-center space-x-4 mb-6">
        <input 
            type="text" 
            value={password} 
            placeholder="Generated Password" 
            readOnly
            ref={passwordRef}
            class="w-64 p-2 bg-white text-gray-800 rounded-md shadow-md text-center"
        />
        <button 
            onClick={copyClipboard} 
            class="p-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-md transition duration-200"
        >
            Copy
        </button>
    </div>
    
    <div class="flex flex-col items-center space-y-4">
        <div class="flex items-center space-x-4">
            <input 
                type="range" 
                min="6" 
                max="20" 
                value={length}
                onChange={(e) => setLength(e.target.value)}
                class="w-48"
            />
            <label class="text-lg font-semibold">Length: {length}</label>
        </div>
        
        <div class="flex items-center space-x-4">
            <input 
                type="checkbox"
                checked={numbers}
                onChange={(e) => setNumbers(e.target.checked)}
                class="w-4 h-4 accent-blue-500"
            />
            <label class="text-lg font-semibold">Include Numbers</label>
            
            <input 
                type="checkbox"
                checked={characters}
                onChange={(e) => setCharacters(e.target.checked)}
                class="w-4 h-4 accent-blue-500"
            />
            <label class="text-lg font-semibold">Include Special Characters</label>
        </div>
    </div>
</div>

  )
}

export default Passgen
 