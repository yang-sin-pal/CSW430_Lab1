import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Hailstone(){
    const [number, setNumber] = useState("");
    const [sequence, setSequence] = useState<number[]>([]);
    
    // Check
    const current = Number(number.trim());
    const isValidInput = (current > 0) && !isNaN(current);

    const handleGenerate = () => {
        if (!isValidInput) {
            return;
        }

        // Generate sequence
        setSequence(generateHailstone(current));
    }

    return(
        <View>
            <Text>The HailStone Sequence</Text>

            <TextInput 
                value={number} 
                onChangeText={(text) => {
                    setNumber(text);
                    setSequence([]);
                }} 
                placeholder="Nhập số bạn muốn tính..." 
                keyboardType="numeric"
            />
            
            {!isValidInput && (number !== "") && (
                <Text>Please enter a positive number.</Text>
            )}

            <Button 
                title="Generate Hailstone sequence" 
                onPress={handleGenerate}
            />

            {sequence.length > 0  && (
               <Text>Sequence: {sequence.join(" -> ")}</Text>
            )}
        </View>
    );

    function generateHailstone(n: number): number[] {
        const seq: number[] = [];
        while (n !== 1) {
            seq.push(n);
            if (n % 2 === 0) {
                n = n / 2;
            } else {
                n = n * 3 + 1;
            }
        }
        seq.push(1);
        return seq;
    }
}