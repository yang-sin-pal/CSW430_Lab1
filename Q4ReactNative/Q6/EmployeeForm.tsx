import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import EmployeeInfo from './EmployeeInfo';

function EmployeeForm(){
    
    const[fullName, setFullName] = useState("");
    const[age, setAge] = useState("");
    const[occupation, setOccupation] = useState("");
    const[specialization, setSpecialization] = useState("");
    const[hasData, setHasData] = useState(false);

    const handleUpdate = () => {
        Alert.alert(
            "Success",
            "Employee information updated successfully!"
        );
        
        setHasData(true);
    }

    return (
        <View>
            <Text>EmployeeForm</Text>
            <TextInput 
                value={fullName} 
                onChangeText={setFullName} 
                placeholder='Tên bạn là gì?'
            />
            <TextInput 
                value={age} 
                onChangeText={setAge} 
                placeholder='Bạn bao nhiêu tuổi?' 
                keyboardType='numeric' 
            />
            <TextInput 
                value={occupation} 
                onChangeText={setOccupation} 
                placeholder='Bạn đang đi làm hay đi học? Làm nghề gì nhỉ?' 
            />
            <TextInput 
                value={specialization} 
                onChangeText={setSpecialization} 
                placeholder='Chuyên ngành bạn học là gì vậy?' 
            />
            <Button 
                title="Update" 
                onPress={handleUpdate}
            />
            {hasData && (
                <EmployeeInfo
                    fullName={fullName}
                    age={age}
                    occupation={occupation}
                    specialization={specialization}
                />
            )}
        </View>
    );
}

export default EmployeeForm;