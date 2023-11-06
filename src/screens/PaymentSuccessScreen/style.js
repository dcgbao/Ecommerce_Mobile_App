import { StyleSheet } from 'react-native';
import { color } from "../../utils/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16
    },
    successText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    messageText: {
        fontSize: 16,
        marginBottom: 10,
    },
    thankText: {
        fontSize: 16,
        marginBottom: 80,
    },
    buttonContainer: {
        width: '100%',
        height: 48,
        borderRadius: 24,
        backgroundColor: color.PRIMARY,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonLabel: {
        fontSize: 18,
        textTransform: 'uppercase',
        color: color.WHITE,
        fontWeight: "600",
    },
});