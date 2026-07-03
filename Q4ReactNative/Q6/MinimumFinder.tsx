import { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function MinimumFind(){
    const [numbers, setNumbers] = useState(["", "", ""]);
    
    const trimedNumbers = numbers.map((value) => value.trim());

    // Check
    const isValidInput = trimedNumbers.every(value => {
        return (value !== "") && !isNaN(Number(value));    
    });

    const minimum = isValidInput? Math.min(...trimedNumbers.map(Number)) : null;

    return(
        <View>
            <Text>The MINIMUM of thee numbers</Text>

            {numbers.map((value, index) => (
                <>
                    <Text>Number {index + 1}:</Text>
                    <TextInput 
                        key={index}
                        value={value}
                        onChangeText={(text) => {
                            const newNumbers = [...numbers];
                            newNumbers[index] = text;
                            setNumbers(newNumbers);
                        }}
                    />
                </>
            ))}

            {numbers.map((value, index) => {
                const text = value.trim();
                        
                if(text ===""){
                    return (
                        <Text key={index}>
                            Number {index + 1} is empty.
                        </Text>
                    );
                }

                if (isNaN(Number(text))) {
                    return (
                        <Text key={index}>
                            Number {index + 1} is invalid.
                        </Text>
                    );
                }

                return null;
            })}

            {minimum !== null  && (
               <Text>Minimum number: {minimum}</Text>
            )}
        </View>
    );
}