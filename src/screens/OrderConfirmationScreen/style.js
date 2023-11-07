import { StyleSheet } from 'react-native';
import { color } from "../../utils/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8
    },
    confirmText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 12
    },
    idText: {
        fontSize: 18,
        fontWeight: 600,
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