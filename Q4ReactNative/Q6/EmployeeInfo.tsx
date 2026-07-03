import { View, Text } from 'react-native';

interface EmployeeInfoProps {
    fullName: string;
    age: string;
    occupation: string;
    specialization: string;
}

function EmployeeInfo({
    fullName,
    age,
    occupation,
    specialization
}: EmployeeInfoProps){
    return (
        <View>
            <Text>Employee Info</Text>
            <Text>Full name: {fullName}</Text>
            <Text>Age: {age}</Text>
            <Text>Occupation: {occupation}</Text>
            <Text>Specializtion: {specialization}</Text>
        </View>
    );
}

export default EmployeeInfo;