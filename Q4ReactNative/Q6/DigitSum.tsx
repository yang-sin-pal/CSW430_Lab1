import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

export default function DigitSum(){
    const[number, setNumber] = useState("");
    
    const value = number.trim();

    // Validation
    const isEmpty = value === "";
    const isValidNumber = !isNaN(Number(value));

    let first = "";
    let last = "";
    let sum = 0;
    
    if(!isEmpty && isValidNumber){
        if (value.length === 1) {
            first = value;
            last = value;
            sum = Number(value);
        } else {
            first = value[0];
            last = value[value.length - 1];
            sum = Number(first) + Number(last);
        }
    }

    return(
        <View>
            <Text>Sum of LAST & FIRST digit</Text>

            <TextInput 
                value={number} 
                onChangeText={setNumber} 
                placeholder="Nhập dãy số bạn muốn tính..." 
                keyboardType="numeric"
            />
            
            {isEmpty && (
                <Text>Please enter a number.</Text>
            )}

            {!isEmpty && !isValidNumber &&(
                <Text>This is not a valid number.</Text>
            )}

            {!isEmpty && isValidNumber  && (
                <>
                    <Text>Fisrt digit: {first}</Text>
                    <Text>Last digit: {last}</Text>
                    <Text> Sum of first digit and last digit: {sum}</Text>
                </>
            )}
        </View>
    );
}