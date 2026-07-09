import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import EmployeeForm from "./Q6/EmployeeForm";
import DigitSum from "./Q6/DigitSum";
import MinimumFind from "./Q6/MinimumFinder";
import Hailstone from "./Q6/Hailstone";
import Square from "./Q4/Square";

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ padding: 16 }}>
                <EmployeeForm />
                <DigitSum /> */
                <MinimumFind />
                <Hailstone />
                <Square text={"Click me"}/>
            </ScrollView>
        </SafeAreaView>
    );
}