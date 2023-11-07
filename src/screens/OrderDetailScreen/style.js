import { StyleSheet } from "react-native";
import { color } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 4
    },
    content: {
        marginVertical: 20,
        paddingHorizontal: 30,
    },
    pageName: {
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 30
    },
    itemContainer: {
        width: '100%',
        height: 120,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
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